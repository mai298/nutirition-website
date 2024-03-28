// img
import { Col, Container, Row } from "react-bootstrap";
import bg from "../../data/imgs/1545.jpg";
import first from "../../data/imgs/first_img.png";
import second from "../../data/imgs/second_img.png";
// components
// styles
import './about.css'; 

function About() {
  return (
    <section className="about ">
      <Container fluid className=" p-0 m-0">
        <div className="about-title text-center d-flex justify-content-center align-items-center">
          <img src={bg} className="img-fluid bg-about w-100" alt="about" />
          <h1 className="about-header text-white ">About Us</h1>
        </div>

        <Row className="mx-auto">
          <Col lg={6} md={4} className="pt-5">
            <div className="first-about text-center pt-5 ">
              <h3>Welcome To Our Family</h3>
              <p className="mx-auto">
                There are no judgments here – No too much or not enough. No
                glares of disapproval. Here we keep open minds. We are
                nurturers. We seek only to encourag0e, empower and entertain.
                There is no one type. There is no one reason. There is no one
                way.
              </p>
              <p className="mx-auto">
                What we are is a diverse community; what we have is a culture of
                fun; what there is, is room for everyone: all kinds of people
                with all kinds of goals who’ve chosen to come reach them with
                us.
              </p>
            </div>
          </Col>

          <Col lg={4} md={6}>
            
          <img src={first} className="img-fluid bg-first " alt="first" />

            
            </Col>
        </Row>





        <Row className="mx-auto">
          <Col lg={6} md={6} className="pt-5">

          <img src={second} className="img-fluid bg-second " alt="second" />


          </Col>

          <Col lg={4} md={6} className="pt-5">
            
          <div className="first-about text-center pt-5">
              <h3>Why We Do What We Do</h3>
              <p className="mx-auto">
                There are no judgments here – No too much or not enough. No
                glares of disapproval. Here we keep open minds. We are
                nurturers. We seek only to encourag0e, empower and entertain.
                There is no one type. There is no one reason. There is no one
                way.
              </p>
              <p className="mx-auto">
                What we are is a diverse community; what we have is a culture of
                fun; what there is, is room for everyone: all kinds of people
                with all kinds of goals who’ve chosen to come reach them with
                us.
              </p>
            </div>
            
            </Col>
        </Row>


      </Container>
    </section>
  );
}

export default About;
