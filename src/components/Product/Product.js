import React from "react";
import "./Product.css";

const Product = ({ product, handleAddToCart }) => {
  const { name, img, price, ratings, seller } = product;
  return (
    <div className="product">
      <img src={img} alt=""></img>
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price: ${price}</p>
        <p>
          <small>Seller{seller}</small>
        </p>
        <p>
          <small>Rating{ratings}</small>
        </p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="btn-cart">
        <p>Add To cart</p>
      </button>
    </div>
  );
};

export default Product;
