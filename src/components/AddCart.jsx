import React, { useState } from 'react';
import "../components/addCart.css"
import add from "../assets/images/icon-plus.svg"
import minus from "../assets/images/icon-minus.svg"
import Button from './Button'

const AddCart = ({ setCartItems }) => {
  const [count, setCount] = useState(0);
  const price = 125;

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    setCartItems(count);
    setCount(0);
  };

  return (
    <div className='add-container'>
      <div className='price-container'>
        <div className='discount-container'>
          <section>
            <p className='price-design'>$125.00</p>
          </section>
          <section>
            <p className='discount-design'>50%</p>
          </section>
        </div>
        <div className='numeroTachado'>
          <p className="numero-tachado">$250.00</p>
        </div>
      </div>
      <div className='but-container__query'>
      <div className='button-container'>
        <button className='button-design left' onClick={handleMinus}>
          <img src={minus} alt="" />
        </button>
        <span className='item-count'>{count}</span>
        <button className='button-design right' onClick={handleAdd}>
          <img src={add} alt="" />
        </button>
      </div>
      <div className='button-query'>
        <Button onClick={handleAddToCart}></Button>
      </div>
      </div>
    </div>
  )
}

export default AddCart;