import React from "react";
import "../components/infoProduct.css"

const InfoProduct = () => {
  return (
    <div className="infoProduct-container">
      <section>
        <p className="sneaker-design">SNEAKER COMPANY</p>
      </section>
      <section>
        <h1 className="title-design">Fall Limited Edition <br />
            Sneakers</h1>
      </section>
      <section>
        <p className="description-design">
          These low-profile sneakers are you perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
      </section>
    </div>
  );
};

export default InfoProduct;
