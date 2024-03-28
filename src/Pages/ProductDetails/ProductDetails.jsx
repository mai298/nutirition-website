/* eslint-disable react/prop-types */

import { Button,Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import QuantityCounter from "../../Components/quantity/QuantityCounter";
import { useState } from "react";
import PaymentFormm from "./PaymentFormm";
import creditCard from "../../data/imgs/credit-card-1.png";
import pay from "../../data/imgs/paypal-1.png";
import { useNavigate } from "react-router-dom";
import './ProductDetails.css';

// eslint-disable-next-line react/prop-types
export default function ProductDetails({cartProducts}) {

  const [isProceed, setIsProceed] = useState(false);
  const navigate=useNavigate();


  const subtotalData = [
    { label:'Subtotal', amount:'$654.00'},
    { label:'Shipping', amount:'$654.00'},
    { label:'Vat,tax', amount:'$654.00'},
  ];

    
  const handleCancelClick = () => {
  
    setIsProceed(false);
    navigate("/products");
  };



  return (
    <>

<section className='payment-section pt-4'>
      <Container>
        <Row>
          {isProceed ? (
            <Col lg={6} md={6} xs={12}>
              <Form noValidate >
                <h3 className='text-start payment-titles'>
                  Payment Methods
                </h3>
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3 text-start">
                    <Form.Check
                      inline
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <img src={creditCard} alt="credit" className='img-fluid ' />

                    <Form.Check
                      inline
                      className='ms-5'
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                    <img src={pay} alt="pay" className='img-fluid' />

                  </div>
                ))}

                <h3 className='text-start payment-titles' >
                  Payment Details
                </h3>

                <Form.Group controlId="firstName" className='text-start' as={Col} >
                  <Form.Label className='pay-label' >Name on card</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name of Card"

                  />
                </Form.Group>

                <Form.Group controlId="visaCardNumber" className='text-start'>
                  <Form.Label className='pay-label'>Card number</Form.Label>
                  <Form.Control
                   type="text"
                    placeholder="Enter Visa Card Number"
                    maxLength="16"
                    />
                </Form.Group>
                <Row>

                  <Form.Group className='"form-label text-start '  as={Col} controlId="expirationDate">
        <Form.Label className='pay-label' >Expiration Date (MM/YY)</Form.Label>
        <InputGroup>
            <Form.Control type='text' placeholder='MM/YY' maxLength='5' />
        </InputGroup>
      </Form.Group>

                  <Form.Group className=' text-start' controlId="cvc" as={Col}>
                    <Form.Label className='pay-label'>CVC</Form.Label>
                    <Form.Control
                     type="text"
            placeholder="CVC"
            maxLength="3"
                     style={{ width: "100%" }} />
                  </Form.Group>
                </Row>
                <p className=' agree-paragraph mt-3 text-start'> By Clicking “Confirm Payment” I agree to the
                  companies term of services  </p>

                <div className="paymentBtns">
                  <Button onClick={handleCancelClick} className='cancelBtn'>
                    Cancel order
                  </Button>

                  <Button type="submit" className='ms-3 completeBtns'>
                    Complete order
                  </Button>
                </div>


              </Form>
            </Col>

          ) : (

  <Col lg={6} md={6} >
<PaymentFormm setIsProceed={setIsProceed}/>
            </Col>
          )}

          <Col lg={6} md={6} xs={12} sm={12} >
          <div className="order-details mb-5 ms-4 ">
  <h3 className='text-start mt-2 ms-2 order-titles'>Your Order</h3>
  <hr style={{ width: "100%" }} />

  {cartProducts.map((item, index) => (
    <div key={index}>
      <h4 className='text-start ms-3 order-title'>{item.title}</h4>

      <div style={{ display: "flex" }}>
        <img src={item.img} alt="itemImg" className='img-fluid order-imgs mb-2' />
        <p className='text-start ms-3 mt-3 order-paragraph'>{item.paragraph}</p>
        <QuantityCounter />
      </div>

      <div className='sizeDropDown text-start ms-3'>
        <h5 style={{ fontSize: "16px" }}>Size:</h5>
        <Form.Control as="select" style={{ width: "135px" }}>
          <option value="">Select Size</option>
          <option value="small">Small Size</option>
          <option value="medium">Medium Size</option>
          <option value="big">Big Size</option>
        </Form.Control>
      </div>

      <p className='me-3 text-end' style={{ fontSize: "20px" }}>{item.price}</p>
      <hr className='ms-3 mb-1' />
    </div>
  ))}

  {subtotalData.map((data, index) => (
    <div className='ms-3 me-3 subTotal' key={index}>
      <p>{data.label}</p>
      <p>{data.amount}</p>
    </div>
  ))}

  <hr className='ms-3 mb-0' />
  <div className='ms-3 me-3 total'>
    <p>Total</p>
    <p>$778.00</p>
  </div>
</div>

          </Col>
        </Row>
      </Container>

    </section>











          
    </>
          
  )
}
