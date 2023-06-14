import React from 'react';
import "../components/button.css";
import cart from "../assets/images/icon-cart.svg";

const Button = ({ onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(); // Llama a la función onClick pasada como prop
    }
  };

  return (
    <div className='butt-container'>
      <button className='butt-design' onClick={handleClick}>
        <div>
          <img src={cart} alt="cart" />
        </div>
        <div>
          <p>Add to cart</p>
        </div>
      </button>
    </div>
  );
};

export default Button;