// react
import { Link, NavLink } from "react-router-dom";
// logo
import logo from "../../data/imgs/kisspng-herbalife-dietary-supplement-sports-nutrition-logo-nutrition-5ac52e7f72bd63.76817392152287193547.png";
// styles
// font awesome
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header2.css";
import { IoIosLogOut } from "react-icons/io";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Header2({setIsAuthenticated,cartCount}) {


  const navigate = useNavigate();



  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log("Logout successful");
      navigate("/");
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };
  return (
    <>

      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              alt=""
              className="img-fluid"
              style={{ width: "90px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            
            <div className="text-start nav-responsive d-lg-none">

              <Nav >
                <li>
                  <Link className="nav-res-link"   to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="nav-res-link" to="/Offers">
                    Offers & Stacks
                  </Link>
                </li>
                <li>
                  <Link className="nav-res-link" to="/Health">
                    Health Packages
                  </Link>
                </li>
                <li>
                  <Link className="nav-res-link" to="/Stores">
                    Stores
                  </Link>
                </li>
                <li>
                  <Link className="nav-res-link" to="/Blog">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="nav-res-link" to="/Bmi">
                    Bmi Calculator
                  </Link>
                </li>
                <li>
                  <Link className="nav-res-link" to="/Book">
                    Book Appointment
                  </Link>
                </li>
              </Nav>
            </div>





            <Nav className="me-auto nav-links d-none d-lg-block">
  <NavLink exact to="/home" activeClassName="active">Home</NavLink>
  <NavLink to="/about" activeClassName="active">About Us</NavLink>
  <NavLink to="/Health" activeClassName="active">Health Packages</NavLink>
  <NavLink to="/Stores" activeClassName="active">Stores</NavLink>
  <NavLink to="/Products" activeClassName="active">Products</NavLink>
  <NavLink to="/Bmi" activeClassName="active">Bmi Calculator</NavLink>
  <NavLink to="/get_in_touch" activeClassName="active">Get In Touch</NavLink>
</Nav>

            <div className="icons">
              <span className="icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <span className="icon">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </span>

              <NavLink to="/product-details">
              <span className="icon">
                <FontAwesomeIcon icon={faBagShopping} />
                <span>{cartCount}</span>
              </span>
              </NavLink>

            </div>
            <Button
              className="ms-4"
              style={{ backgroundColor: "transparent", border: "none" }}
              onClick={handleLogout}
            >
              <span className="icon">
                <IoIosLogOut
                  style={{ color: "red", width: "1.5rem", height: "1.5rem" }}
                />
              </span>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header2;
