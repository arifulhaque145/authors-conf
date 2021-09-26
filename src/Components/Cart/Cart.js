import React from "react";
import "./Cart.css";

function Cart(props) {
  const cart = document.getElementById("cart");
  const data = props.text;
  let total = 0,
    height = 150;
  data.map((item) => {
    total += parseInt(item.cost);
    height += 25;
    cart.style.height = `${height}px`;
  });

  return (
    <div
      id="cart"
      className="cart__container stic shadow-sm p-3 mb-5 bg-white rounded"
    >
      <h4>Ordered People {data.length}</h4>
      <ol>
        {data.map((item) => (
          <li>{item.name}</li>
        ))}
      </ol>
      <h3>Total Cost: ${total}</h3>
    </div>
  );
}

export default Cart;
