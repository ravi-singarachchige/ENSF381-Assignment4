import React from 'react';
import CartItem from './CartItem';
import '../App.css'; 

const Cart = ({ cart, removeFromCart }) => {
  const totalCost = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <div className={cart.length ? "cart-container" : "cart-container-empty"}>
      <section>
        <h2>Shopping Cart</h2>
        {cart.map((item, index) => (
          <CartItem key={index} item={item} removeFromCart={removeFromCart} />
        ))}
        <p>Total: ${totalCost.toFixed(2)}</p>
      </section>
    </div>
  );
};

export default Cart;