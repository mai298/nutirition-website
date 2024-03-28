import { useState } from "react";
import SignIn from "./SignIn";
import { Button, Col, Container, Row } from "react-bootstrap";
import sign from "../../data/imgs/2942004.jpg";
import SignUp from "./SignUp";
import './sign.css';

// eslint-disable-next-line react/prop-types
export default function Sign({ setIsAuthenticated }) {
  const [hasAccount, setHasAccount] = useState(false);

  const toggleForm = () => {
    setHasAccount(!hasAccount);
  };

  return (
    <section className=" sign-section pt-5  pb-5" >
      <Container>
        <Row className="log-row  mx-auto" >
           <Col lg={6}>
            {/* Render Sign Up or Login component based on the hasAccount state */}
            {hasAccount ? (
              <SignIn setIsAuthenticated={setIsAuthenticated} />
            ) : (
              <>
                <SignUp />
              </>
            )}
            {/* Already have an account */}
            <p className="mt-4 text-sm text-gray-600">
              {hasAccount
                ? "Don't have an account?"
                : "Already have an account?"}
              <Button className="sign-btn" onClick={toggleForm}>
                {hasAccount ? "Sign Up" : "Sign In"}
              </Button>
            </p>
          </Col>

          <Col lg={6}>
          <div className="sign-img">
              <img src={sign} className="img-fluid" alt="" />
            </div>
          </Col>


         

        </Row>
      </Container>
    </section>
  );
}
