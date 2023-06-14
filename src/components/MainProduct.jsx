import React, { useState, useEffect } from 'react';
import product1 from "../assets/images/image-product-1.jpg";
import product2 from "../assets/images/image-product-2.jpg";
import product3 from "../assets/images/image-product-3.jpg";
import product4 from "../assets/images/image-product-4.jpg";
import previous from "../assets/images/icon-previous.svg";
import next from "../assets/images/icon-next.svg";
import "../components/mainProduct.css";

const MainProduct = ({ onImageChange }) => {
  const [currentImage, setCurrentImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setCurrentImage(product1);
  }, []);

  const handlePrevious = () => {
    if (selectedImage) {
      if (selectedImage === product1) {
        setSelectedImage(product4);
      } else if (selectedImage === product2) {
        setSelectedImage(product1);
      } else if (selectedImage === product3) {
        setSelectedImage(product2);
      } else if (selectedImage === product4) {
        setSelectedImage(product3);
      }
    } else {
      if (currentImage === product1) {
        setCurrentImage(product4);
      } else if (currentImage === product2) {
        setCurrentImage(product1);
      } else if (currentImage === product3) {
        setCurrentImage(product2);
      } else if (currentImage === product4) {
        setCurrentImage(product3);
      }
    }
  };

  const handleNext = () => {
    if (selectedImage) {
      if (selectedImage === product1) {
        setSelectedImage(product2);
      } else if (selectedImage === product2) {
        setSelectedImage(product3);
      } else if (selectedImage === product3) {
        setSelectedImage(product4);
      } else if (selectedImage === product4) {
        setSelectedImage(product1);
      }
    } else {
      if (currentImage === product1) {
        setCurrentImage(product2);
      } else if (currentImage === product2) {
        setCurrentImage(product3);
      } else if (currentImage === product3) {
        setCurrentImage(product4);
      } else if (currentImage === product4) {
        setCurrentImage(product1);
      }
    }
  };

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  useEffect(() => {
    if (onImageChange) {
      onImageChange(selectedImage || currentImage);
    }
  }, [selectedImage, currentImage, onImageChange]);

  return (
    <div className='product-container'>
      <img src={selectedImage || currentImage} alt="product" className='main-product' />
      <div className='arrows'>
        <div>
          <img src={previous} alt="back" className='arrow' onClick={handlePrevious} />
        </div>
        <div>
          <img src={next} alt="next" className='arrow' onClick={handleNext} />
        </div>
      </div>
      <div className='query-img__container'>
        <img src={product1} alt="" className='img-design' onClick={() => handleImageSelect(product1)} />
        <img src={product2} alt="" className='img-design' onClick={() => handleImageSelect(product2)} />
        <img src={product3} alt="" className='img-design' onClick={() => handleImageSelect(product3)} />
        <img src={product4} alt="" className='img-design' onClick={() => handleImageSelect(product4)} />
      </div>
    </div>
  );
}

export default MainProduct;