// style
import "./home.css";
import { Button, Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import swipImg1 from "../../data/imgs/6583.jpg";
import swipImg2 from "../../data/imgs/6586.jpg";
import swipImg3 from "../../data/imgs/first_img.png";
import swipImg4 from "../../data/imgs/6584.jpg";

import service1 from "../../data/imgs/customer-service-2-line.png";
import service2 from "../../data/imgs/cash-line.png";
import service3 from "../../data/imgs/rocket-2-line.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
function Home() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_en10oqw', 'template_cqlevod', form.current, 'WQQ0qlIbHJJhelceL')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert("email is sent successfully");
      }, (error) => {
          console.log(error.text);
      });
  };

  const swiperImgs = [
    { img: swipImg1 },
    { img: swipImg2 },
    { img: swipImg3 },
    { img: swipImg4 },
  ];

  const services = [
    { img: service1 ,title:"24 hour customer service",},
    { img: service2,title:"Payment in cash on card"},
    { img: service3 ,title:"Free Delevery for Purchases over $100"},
  ];
  return (
    <>
      <section className="home-section pt-5 pb-5 ">
        <Container >
          <Row>
          <Col lg={6} className="mx-auto text-center">
        <div className="home-header pt-5 ms-5 mb-5">
          <h1 className="mb-4">Low Carb Protein</h1>
          <p >
            It’s the idea that inspires everything we do, because we believe
            the simplest things lead to the best results. We’re passionate
            about smart nutrition, staying fit, and enjoying life’s adventures –
            all while inspiring others to do the same.
          </p>
          <Button className="homeBtn">Shop Now</Button>
        </div>
      </Col>
          </Row>
        </Container>
      </section>

      <section className="services">
        <Container>
          <Row>
            {services.map((item, index) => (
              <Col key={index} className="mx-auto pt-4">
                <div className="mx-auto d-flex ">
                  <img src={item.img} alt="" className="img-fluid" />
                  <h5>{item.title}</h5>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="swip-section pt-5 pb-5">
        <Container>
          <h2 className="text-center">Our Products</h2>
          <Row className="mx-auto">
            <Swiper
              slidesPerView={3}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {swiperImgs.map((item, index) => (
                <SwiperSlide key={index} style={{ cursor: "pointer" }}>
                  <div className="mx-auto">
                    <img
                      src={item.img}
                      className="img-fluid swiperImg"
                      alt="item-card"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Row>
        </Container>
      </section>


      <section id="contact" className="pt-5 pb-5">
        <Container>
          <div className="contact-content text-center">
            <h2>Contact Us</h2>
            <p className="text-center">
              Please fill out the form below to ask any questions
            </p>
          </div>

          <Row>
            <Col lg={5} md={6} className="mx-auto">
              <Form ref={form} onSubmit={sendEmail}>
                <InputGroup className="mb-3 ">
                  <Form.Control
                    placeholder="Your name"
                    aria-label="Username"
                    name="your_name"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="your_email"
                  />
                </Form.Group>

                <InputGroup>
                  <Form.Control
                    name="message"
                    placeholder=" Your Message"
                    as="textarea"
                    aria-label="With textarea"
                    className="mb-3"
                  />
                </InputGroup>
                <Button value="send" type="submit" className="submit-btn">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
