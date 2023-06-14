import React from 'react';
import { useState } from 'react';
import "../components/navbar.css";
import menuHam from "../assets/images/icon-menu.svg";
import avatar from "../assets/images/image-avatar.png";
import kartBlack from "../assets/images/icon-cart-black.svg";
import close from "../assets/images/icon-close.svg";
import ModalCart from './ModalCart';

const Navbar = ({ cartItems, setCartItems, currentImage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(true);
  };

  const closeModal = () => {
    setIsMenuOpen(false);
  };

  const openCartModal = () => {
    setIsModalOpen(true);
  };

  const closeCartModal = () => {
    setIsModalOpen(false);
  };

  const clearCart = () => {
    setCartItems(0);
  };

  return (
    <nav className='navBar'>
      <div className='left_Navbar'>
        <div onClick={handleMenuClick}>
          <img src={menuHam} alt="menu" />
        </div>
        <div className='menu-sneakers'>
          <p>sneakers</p>
        </div>
        <div className='menu-list__query'>
          <p>Collections</p>
          <p>Men</p>
          <p>Women</p>
          <p>About</p>
          <p>Contact</p>
        </div>
      </div>
      <div className='right_Navbar'>
        <div className='cart-container'>
          {cartItems > 0 && <div className="cart-items">{cartItems}</div>}
          <img src={kartBlack} alt="cart" onClick={openCartModal} />
        </div>
        <div><img src={avatar} alt="profile" className='avatar-face' /></div>
      </div>
      {isMenuOpen && (
        <div className='menu'>
          <div className='menu-content'>
            <button onClick={closeModal} className='image-close'> <img src={close} alt="close" /></button>
            <ul className='menu-list'>
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      )}
      {isModalOpen && (
        <ModalCart
          onClose={closeCartModal}
          totalPrice={cartItems * 125}
          cartItems={cartItems}
          onClearCart={clearCart}
          currentImage={currentImage}
        />
      )}
    </nav>
  );
}

export default Navbar;