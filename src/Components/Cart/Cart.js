import React from "react";

function Cart(props) {
  const data = props.text;
  let total = 0;
  data.map(item => total+=parseInt(item.cost))

  return (
    <div style={{ backgroundColor: "red" }}>
      <h1>Order</h1>
      {
        data.map(item =><li>{item.name}</li>)
      }
      <h3>Total Cost: ${total}</h3>
    </div>
  );
}

export default Cart;
