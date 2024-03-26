// ProductItem.js
import React, { useState } from 'react';
import '../App.css'; 

const ProductItem = ({ product, addToCart }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <img className="product-image" src={product.image} alt={product.name} />
      <h3
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {product.name}
      </h3>
      {isHovered && <p>{product.description}</p>}
      <p>${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;