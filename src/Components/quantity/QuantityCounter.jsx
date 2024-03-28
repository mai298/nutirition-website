import { useState } from 'react';
import { Button } from 'react-bootstrap';
import './QuantityCounter.css';

const QuantityCounter = () => {
    const [quantity, setQuantity] = useState(0);
    //for quantity counter
      const increment = () => {
        setQuantity(quantity + 1);
      };

      const decrement = () => {
        if (quantity > 0) {
          setQuantity(quantity - 1);
        }
      };
    
  return (
    <div className='quantity-counter text-end ms-5 '>
    <h5 className='text-center quantityTitle'
     style={{ fontSize: "16px" }}>Quantity</h5>
     <div className='quantitybtn d-flex'>
    <Button className='quantityBtns me-2 '
     variant="primary" onClick={decrement}>-</Button>
    <span>{quantity}</span>
    <Button className='quantityBtns ms-2 me-2'
     variant="primary" onClick={increment}>+</Button>
  </div>
  </div>
  )
}

export default QuantityCounter