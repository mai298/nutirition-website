import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'
import Header2 from './Header/Header2'
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import './Root.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

// eslint-disable-next-line react/prop-types
export default function Root({isAuthenticated,setIsAuthenticated ,cartCount}) {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);


 
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  

 
  return (
    <div>
 <Header2 cartCount={cartCount}/>

      <main>
      <Button
      variant="primary"
      className={`scroll-to-top ${isVisible ? 'show' : 'hide'}`}
      onClick={scrollToTop}
    >
<FontAwesomeIcon icon={faChevronUp} size="lg" style={{color: "#ffffff",}} />    </Button>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
