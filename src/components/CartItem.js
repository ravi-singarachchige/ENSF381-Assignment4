// CartItem.js
import React from 'react';
import '../App.css'; 

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div>
      <img className="cart-item-image" src={item.product.image} alt={item.product.name} />
      <h3>{item.product.name}</h3>
      <p>${item.product.price.toFixed(2)}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Total (in cart): ${(item.quantity * item.product.price).toFixed(2)}</p>
      <button onClick={() => removeFromCart(item.product.id)}>Remove</button>
    </div>
  );
};

export default CartItem;