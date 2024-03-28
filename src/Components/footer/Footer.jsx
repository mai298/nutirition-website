import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../data/imgs/kisspng-herbalife-dietary-supplement-nutrition-nutrient-5ae527d9daae59.2856467715249673858957.png';
import download from '../../data/imgs/play store.png';
import './footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faSquareInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col lg={2} md={3} sm={6}>
            <img src={logo} alt="logo" className='img-fluid img-logo' />
          </Col>
          <Col lg={1} md={3} sm={6}>
            <h4 className='text-start foot-title'>My Account</h4>
            <div className='text-start'>
              <ul>
              <li><Link className='foot-link' to="#">Dashboard</Link></li>
              <li><Link className='foot-link' to="log">Login / register</Link></li>
              <li><Link className='foot-link' to="/orders">Orders</Link></li>
              <li><Link className='foot-link' to="#">Reviews</Link></li>
              </ul>
            </div>
          </Col>
          <Col lg={2} md={3} sm={6}>
          <h4 className='text-start foot-title'>Orders & Shipping</h4>

          <div className='text-start'>
            <ul>
              <li><Link className='foot-link' to="#">FAQ</Link></li>
              <li><Link className='foot-link' to="#">Return Policy</Link></li>
              <li><Link className='foot-link' to="#">Privacy & Policy</Link></li>
              <li><Link className='foot-link' to="#">Terms Of Use</Link></li>
              <li><Link className='foot-link' to="#">Faqs</Link></li>
              <li><Link className='foot-link' to="#">Original Products</Link></li>
              <li><Link className='foot-link' to="#">Shipping & Delivery</Link></li>
              </ul>
            </div>
          </Col>


          <Col lg={2} md={3} sm={6}>
          <h4 className='text-start foot-title'>Top Categories</h4>

          <div className='text-start'>
            <ul>
              <li><Link className='foot-link' to="#">Sports Nutrition</Link></li>
              <li><Link className='foot-link' to="#">Vitamins & Minerals</Link></li>
              <li><Link className='foot-link' to="#">Health & Wellness</Link></li>
              <li><Link className='foot-link' to="#">Weight Management</Link></li>
              <li><Link className='foot-link' to="#">Keto</Link></li>
              <li><Link className='foot-link' to="#">Healthy Foods</Link></li>
              <li><Link className='foot-link' to="#">Multivitamins</Link></li>
              <li><Link className='foot-link' to="#">Whey Protein</Link></li>
</ul>
            </div>
          </Col>

          <Col lg={2} md={3} sm={6}>
          <h4 className='text-start foot-title'>Top Brands</h4>

          <div className='text-start'>
          <ul>
              <li><Link className='foot-link' to="#">Laperva</Link></li>
              <li><Link className='foot-link' to="#">Body Builder</Link></li>
              <li><Link className='foot-link' to="#">Applied Nutrition</Link></li>
              <li><Link className='foot-link' to="#">Optimum Nutrition</Link></li>
              <li><Link className='foot-link' to="#">MuscleTech</Link></li>
              <li><Link className='foot-link' to="#">Xtend</Link></li>
              <li><Link className='foot-link' to="#">Universal Nutrition</Link></li>
              <li><Link className='foot-link' to="#">Cellucor</Link></li>
</ul>
            </div>
          </Col>

          <Col lg={2} md={3} sm={6}>
          <h4 className='text-start foot-title'>Promotions</h4>

          <div className='text-start '>
            <ul>
              <li><Link className='foot-link' to="#">Stacks/Combos</Link></li>
              <li><Link className='foot-link' to="#">Clearance</Link></li>
              <li><Link className='foot-link' to="#">wholesale</Link></li>
</ul>
            </div>
          </Col>




          <Col lg={1} md={3} sm={6}>
            <h4 className='text-start foot-title'>Contact Us</h4>
            <div className='social'>
            <ul>
              <li>
                <a>
                  <FontAwesomeIcon icon={faSquareInstagram} />
                </a>
              </li>
              <li>
                <a>
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a>
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
              <li>
                <a>
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
            </ul>
            </div>
            <div className="download">
              <h5 className='text-start foot-title' style={{width:"120px"}}>Download App</h5>
              <img src={download} alt="logo" className='img-fluid' />

            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer-copyRight pt-4 pb-3 mt-2">
        <Container>
          <Row>
            <Col>
              <span className='span-copyRight'>© Copyright Dr Nutrition UAE | Online Supplement & 
                Nutrition Store 2023. All rights reserved..</span>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}
