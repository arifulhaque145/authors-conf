import React from "react";
import './Cart.css'

function Cart(props) {
  const data = props.text;
  let total = 0;
  data.map(item => total+=parseInt(item.cost))

  return (
    <div className="cart__container">
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
