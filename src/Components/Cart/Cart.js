import React from "react";
import "./Cart.css";

function Cart(props) {
  const cart = document.getElementById("cart");
  const data = props.text;
  let total = 0,
    height = 150;
  data.map((item) => {
    total += parseInt(item.cost);
    height += 43;
    cart.style.height = `${height}px`;
  });

  return (
    <div
      id="cart"
      className="cart__container stic shadow-sm p-3 mb-5 rounded text-uppercase"
    >
      <h5>Your Orders: {data.length}</h5>
      <hr />
      {data.map((item) => (
        <div className="listItem">{item.name}</div>
      ))}
      <h4 style={{color: 'red', marginTop: "20px"}}>Total Cost: ${total}</h4>
    </div>
  );
}

export default Cart;
