import React, { useRef, useEffect } from 'react';
import "../components/modalCart.css";
import ImageDelete from "../assets/images/icon-delete.svg";

const ModalCart = ({ onClose, totalPrice, cartItems, onClearCart, currentImage }) => {
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  const clearCart = () => {
    onClearCart();
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="modal" ref={modalRef}>
      <div className="modal-content">
        <p>Cart</p>
      </div>
      <div className="modal-content_main">
        {cartItems > 0 ? (
          <>
            <div className='modal-checkout'>
              <div className="modal-checkout__image">
                <img src={currentImage} alt="image info" />
              </div>
              <div className='modal-checkout__info'>
                <p>Fall Limited Edition Sneakers</p>
                <p>{`$${125.00} x ${cartItems} $${totalPrice}`}</p>
              </div>
              <div>
                <img src={ImageDelete} alt="delete Info" onClick={clearCart} />
              </div>
            </div>
            <div className='button-checkout'>
              <button className='button-checkout__design'>Checkout</button>
            </div>
          </>
        ) : (
          <div className='empty'>
            <p>Your cart is empty.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalCart;