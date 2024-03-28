import { useState } from 'react';
import { Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';
import "./BmiCalc.css";

export default function BmiCalc() {
  const [gender, setGender] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiData, setBmiData] = useState(null);
  const [validated, setValidated] = useState(false);

  //calculate Bmi function
  const calculateBMI = (e) => {
    e.preventDefault();

    // Use state values
    const ageValue = parseInt(age);
    const genderValue = gender.toLowerCase();
    const heightValue = parseFloat(height);
    const weightValue = parseFloat(weight);


    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
    }

    setValidated(true);


    // Check if age, weight, and height are non-negative
    if (ageValue <= 0 || weightValue <= 0 || heightValue <= 0) {
      console.log('Please enter non-negative and non-zero values.');
      return;
    }

    // Check if height and weight are valid numbers
    if (isNaN(heightValue) || isNaN(weightValue) || isNaN(ageValue)) {
      console.log('Invalid value');
      return;
    }

    // Calculate BMI
    const bmi = weightValue / ((heightValue / 100) * (heightValue / 100));

    // Define the BMI categories and their corresponding ranges
    const categories = [
      { label: 'Underweight', min: 0, max: 18.5 },
      { label: 'Normal weight', min: 18.5, max: 24.9 },
      { label: 'Overweight', min: 24.9, max: 29.9 },
      { label: 'Obesity', min: 29.9, max: Infinity },
    ];

    // Find the category based on the calculated BMI
    let category = '';
    for (const item of categories) {
      if (bmi >= item.min && bmi <= item.max) {
        category = item.label;
        break;
      }
    }

    // Display the result

    console.log('Age:', ageValue);
    console.log('Gender:', genderValue);
    console.log('BMI:', bmi.toFixed(2));
    console.log('Category:', category);


    // Save BMI data to state
    setBmiData({
      age: ageValue,
      gender: genderValue,
      bmi: bmi.toFixed(2),
      category,
    });

    // Reset the form fields
    setGender('');
    setActivityLevel('');
    setAge('');
    setWeight('');
    setHeight('');


    // Reset the validation state
    setValidated(false);

  };

  return (
    <>
 <section className="blog-content pt-5 pb-5 ">
      <Container >
        <Row >
          <Col lg={6} md={12}  className='mx-auto'>
            <Form noValidate validated={validated} className="form" onSubmit={calculateBMI}>
              <div className="form-row">
                <h3 className="pb-4 text-center" style={{ fontSize: '49px' }}>
                  BMI Calculator
                </h3>
                <Form.Group>
                  <Form.Label className='bmi-label'>Gender</Form.Label>
                  <Form.Select
                    required
                    onChange={(e) => setGender(e.target.value)}
                    value={gender}
                  >
                    <option style={{ color: '#808080' }} value="" disabled>
                      Select
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="other">Other</option>
                  </Form.Select>
                </Form.Group>
              </div>

              <Form.Group>
                <Form.Label className='bmi-label'>Physical activity</Form.Label>
                <Form.Select
                  required
                  onChange={(e) => setActivityLevel(e.target.value)}
                  value={activityLevel}
                >
                  <option style={{ color: '#808080' }} value="" disabled>
                    Select
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>

              <Form.Group>
                <Form.Label className='bmi-label'>Age</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid age.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label className='bmi-label'>Weight (In kg)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid weight.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label className='bmi-label'>Height (In cm)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid height.
                </Form.Control.Feedback>
              </Form.Group>

              <div className="text-center mt-4">
                <Button className="submitBtn" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
        </Row>

        <Row>
          <Col lg={6} md={12} className='mx-auto'>
            {bmiData && (
              <div className="mt-3">
                <Alert variant="info">
                  <h4 className="text-center">BMI Data:</h4>
                  <ul style={{ listStyle: 'none' }}>
                    <li>Age: {bmiData.age}</li>
                    <li>Gender: {bmiData.gender}</li>
                    <li>BMI: {bmiData.bmi}</li>
                    <li>Category: {bmiData.category}</li>
                  </ul>
                </Alert>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </section>
    </>
  );

}