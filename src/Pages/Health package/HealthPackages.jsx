import "./HealthPackages.css";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
const HealthPackages = () => {
  return (
    <>
      <section className="health-content pt-5 pb-4 text-center mx-auto">
        <h4 className="text-start ms-3">Health packages</h4>
        <Container >
          <div className="price-header text-center pt-3">
            <h3>Pricing</h3>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipiscing elit interdum
              ullamcorper sed pharetra sene.
            </p>
          </div>

          <Row className="justify-content-center mt-4 ">
            <Col lg={3} md={6} className="pb-3 ">
              <Card className="p-0 First-card mx-auto" style={{ width: "18rem" }}>
                <Card.Header
                  style={{ background: "none" }}
                  className=" d-flex justify-content-between"
                >
                  <div className="text-start  ">
                    <h6 className="headerTitle1">Basic</h6>
                  </div>

                  <div className="header-btn ms-3">
                    <Button className="headerBtns1">Save 30%</Button>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Card.Title>
                    <h4 style={{ color: "#242331" }}>$10.99 / month</h4>
                    <Button className="priceBtn1">
                      Billed as $96 per year
                    </Button>
                  </Card.Title>
                  <hr />
                  <Card.Text style={{ color: "#666" }}>
                    <p>22 Points</p>
                    <p>
                      <span className="me-1" style={{ color: "#1594F8" }}>
                        2 min
                      </span>
                      months
                    </p>
                    <p>1 min product</p>
                    <p>1 max small machines</p>
                    <p>500 voucher</p>
                    <p>20% discount card</p>
                    <p>IR Availiable</p>
                    <div className="getStarted">
                      <Button className="getStartedBtns1">Get Started</Button>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={3} md={6} className="pb-3">
              <Card className="mx-auto p-0 center-card" style={{ width: "18rem" }}>
                <Card.Header
                  style={{ background: "none" }}
                  className=" d-flex justify-content-between"
                >
                  <div className="text-start  ">
                    <h6 className="headerTitle ">Platinum Package</h6>
                  </div>

                  <div className="header-btn ms-3">
                    <Button className="headerBtns">Popular</Button>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Card.Title>
                    <h4 style={{ color: "#FFF" }}>$10.99 / month</h4>
                    <Button className="headerBtns">
                      Billed as $199 per year
                    </Button>
                  </Card.Title>
                  <hr />
                  <Card.Text style={{ color: "#FFF" }}>
                    <p>22 Points</p>
                    <p>2 min months</p>
                    <p>1 min product</p>
                    <p>1 max small machines</p>
                    <p>500 voucher</p>
                    <p>20% discount card</p>
                    <p>IR Availiable</p>
                    <div className="getStarted">
                      <Button className="getStartedBtns">Get Started</Button>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={3} md={6} className="pb-3">
              <Card className="mx-auto p-0 last-card" style={{ width: "18rem" }}>
                <Card.Header
                  style={{ background: "none" }}
                  className=" d-flex justify-content-between"
                >
                  <div className="text-start  ">
                    <h6 className="headerTitle3">Bronze Package</h6>
                  </div>

                  <div className="header-btn ms-3">
                    <Button className="headerBtns3">Save 30%</Button>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Card.Title>
                    <h4 style={{ color: "#242331" }}>$15.99 / month</h4>
                    <Button className="priceBtn3">
                      Billed as $243 per year
                    </Button>
                  </Card.Title>
                  <hr />
                  <Card.Text style={{ color: "#666" }}>
                    <p>22 Points</p>
                    <p>
                      <span className="me-1" style={{ color: "#1594F8" }}>
                        2 min
                      </span>
                      months
                    </p>
                    <p>1 min product</p>
                    <p>1 max small machines</p>
                    <p>500 voucher</p>
                    <p>20% discount card</p>
                    <p>IR Availiable</p>
                    <div className="getStarted">
                      <Button className="getStartedBtns3">Get Started</Button>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HealthPackages;
