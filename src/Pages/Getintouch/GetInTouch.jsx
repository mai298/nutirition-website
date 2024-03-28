import { Col, Container,Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './GetInTouch.css';
// import map from '../../data/imgs/india-map.jpg';
import axios from "axios";
import { useState } from "react";
import { Map, Marker } from "pigeon-maps"


function GetInTouch() {
  const [cities, setCities] = useState([]);
  const [country, setcountry] = useState([]);



  const handleCountrySelect= async()=>{
    const result=await axios.get("https://countriesnow.space/api/v0.1/countries");
    const countryData = result.data.data.map((item) => item.country);
    setcountry(countryData);
      }
    

 const handleCitySelect= async()=>{
const result=await axios.get("https://countriesnow.space/api/v0.1/countries/population/cities");
const cityData = result.data.data.map((item) => item.city);
setCities(cityData);
  }

  return (
    <>
<section className="get-in-touch pt-5 pb-4">
  <Container>
    <Row>
    
      <Col lg={6}>

  <div className="get-titles">
  <h4 className="header-title">Get in <span className="span-title">Touch</span></h4>
  <p className="para">Enim tempor eget pharetra facilisis sed maecenas adipiscing.
     Eu leo molestie vel, ornare non id blandit netus.</p>
</div>

<Form noValidate className="form-get">

<Form.Group className="mb-3" controlId="formBasicuser">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  id='Name'
                  placeholder="Name"
                />
               
              </Form.Group>



      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Well never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="phoneNumber" className="mb-4">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Enter phone number"
          name="phoneNumber"
          pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
          required
        />
        <Form.Text muted>Please enter the phone number without spaces or dashes.</Form.Text>
      </Form.Group>

      <Form.Select defaultValue="1" onClick={handleCountrySelect} aria-label="Default select example" className="mb-4">
      <option disabled value="1">Select Country</option>
      {country.map((country, index) => (
    <option key={index} value={country}>{country}</option>
      ))}

    </Form.Select>

    <Form.Select defaultValue="1" onClick={handleCitySelect} aria-label="Default select example" className="mb-4">
      <option disabled value="1"> Select City</option>
      {cities.map((city, index) => (
    <option key={index} value={city}>{city}</option>
  ))}

    </Form.Select>
      <Button className="getBtn" variant="primary" type="submit">
        Submit
      </Button>
    </Form>


    </Col>






      <Col lg={6}>
      <Map height={600}  defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
      <Marker width={30} anchor={[50.879, 4.6997]} />
    </Map>

      </Col>
    </Row>
  </Container>

</section>
    </>
  );
}

export default GetInTouch;
