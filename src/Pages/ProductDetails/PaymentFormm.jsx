import  { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Row, Col, Form, Button } from 'react-bootstrap';

import './PaymentForm.css';

// eslint-disable-next-line react/prop-types
const PaymentFormm = ({setIsProceed}) => {
    const { register, handleSubmit, formState: { errors }, reset, trigger, getValues } = useForm();
    const [selectedTime, setSelectedTime] = useState('12:00');

  const handlePaymentClick = async () => {
    // Pause and wait for the validation of all form fields
    const isValid = await trigger();
    // Check if the form is valid
    if (isValid) {
      // If valid, get the form data
      const formData = getValues();

      // Log the form data to the console
      console.log('Form data:', formData);

      // Set isProceed state to true, indicating it's okay to proceed
      setIsProceed(true);
    }
  }

      //handle time changes
  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  //handle form submit
  const onSubmit = (data) => {
    console.log(data);
    // Reset the form after submission
    reset();
  }

  //pattern expertion for email & phone  aka (user cant put characters and must put email in format name@gmail.com )
  const regEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  return (
    <Form noValidate  onSubmit={handleSubmit(onSubmit)}>
    <h3 className='text-start payment-titles'>
      Contact Information
    </h3>
    <Row className="mb-3">
      <Form.Group controlId="firstName" className='text-start' as={Col} >
        <Form.Label className='form-label' >First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter First Name"
          isInvalid={Boolean(errors.firstName)}
          {...register("firstName", { required: true })}
        />

        <Form.Control.Feedback type="invalid">
          {errors.firstName && "First Name is required"}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="lastName" className='text-start' as={Col}>
        <Form.Label className='form-label'  >Last Name</Form.Label>
        <Form.Control

          type="text"
          placeholder="Enter Last Name"
          isInvalid={Boolean(errors.lastName)}

          {...register("lastName", { required: true })}
        />

        <Form.Control.Feedback type="invalid">
          {errors.lastName && "Last Name is required"}
        </Form.Control.Feedback>
      </Form.Group>
    </Row>

    <Row className="mb-3">
      <Form.Group className='text-start' as={Col} controlId="email" >
        <Form.Label className='form-label'>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Your email@gmail.com"
          isInvalid={Boolean(errors.email)}
          {...register("email", { required: true, pattern: regEmail })}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email && errors.email.type === "required" && "Email is required"}
          {errors.email && errors.email.type === "pattern" && "Please provide a valid email address"}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className='text-start' controlId="contactNumber" as={Col}>
        <Form.Label className='form-label'>Phone Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="+1-(0000 000 0000)"
          isInvalid={Boolean(errors.contactNumber)}
          {...register("contactNumber", { required: true, pattern: phoneRegExp })}
        />
        <Form.Control.Feedback type="invalid">
          {errors.contactNumber && errors.contactNumber.type === "required" && "phone is required"}
          {errors.contactNumber && errors.contactNumber.type === "pattern" && "Please provide a valid phone number"}
        </Form.Control.Feedback>
      </Form.Group>
    </Row>

    <h3 className='text-start pb-2 payment-titles'>
      Delivery Information
    </h3>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="dob" className='text-start'>
        <Form.Label className='form-label'>Delivery Date</Form.Label>
        <Form.Control type="date"
                              isInvalid={Boolean(errors.formGridAddress1)}

          {...register("dob", { required: true })}
          name="dob" />

<Form.Control.Feedback type="invalid">
          {errors.dob && errors.dob.type === "required" && "Delivery Date is required"}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className='text-start' as={Col} controlId="formTimePicker">
        <Form.Label className='form-label'>Convenient Time</Form.Label>
        <Form.Control
              type="time"
              id="formTimePicker"
              onChange={(e) => handleTimeChange(e.target.value)}
              value={selectedTime}
              step={900} // 15 minutes in seconds (15 * 60)
            />
      </Form.Group>
    </Row>

    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridCity" className='text-start'>
        <Form.Label className='form-label'>City</Form.Label>
        <Form.Control
          isInvalid={Boolean(errors.formGridCity)}

          {...register("formGridCity", { required: true })}
        />

        <Form.Control.Feedback type="invalid">
          {errors.formGridCity && errors.formGridCity.type === "required" && "City is required"}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} className="mb-3 text-start" controlId="formGridAddress1"  >
        <Form.Label className='form-label'>Address</Form.Label>
        <Form.Control
          isInvalid={Boolean(errors.formGridAddress1)}
          {...register("formGridAddress1", { required: true })} placeholder="1234 Main St" />
        <Form.Control.Feedback type="invalid">
          {errors.formGridAddress1 && errors.formGridAddress1.type === "required" && "Address is required"}
        </Form.Control.Feedback>

      </Form.Group>

      <Form.Group as={Col} controlId="formGridZip" className='text-start'>
        <Form.Label className='form-label'>Zip</Form.Label>
        <Form.Control {...register("formGridZip", { required: true })} placeholder='00000' />
      </Form.Group>
    </Row>

    <Button type="submit" onClick={handlePaymentClick} className="proceedBtn mb-3"  >
      Proceed  to Payment
    </Button>
  </Form>
  )
}

export default PaymentFormm;