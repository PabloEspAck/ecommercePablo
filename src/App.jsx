import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MainProduct from "./components/MainProduct";
import InfoProduct from "./components/InfoProduct";
import AddCart from "./components/AddCart";

function App() {
  const [cartItems, setCartItems] = useState(0);
  const [currentImage, setCurrentImage] = useState(null);

  const handleImageChange = (image) => {
    setCurrentImage(image);
  };

  return (
    <div className="App">
      <Navbar
        cartItems={cartItems}
        setCartItems={setCartItems}
        currentImage={currentImage}
      />
      <div className="mainApp-container">
        <div>
        <MainProduct onImageChange={handleImageChange} />
        </div>
        <div className="main-right">
          <section>
            <InfoProduct />
          </section>
          <section>
            <AddCart setCartItems={setCartItems} />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
