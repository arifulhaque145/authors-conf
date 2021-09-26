import React from "react";

function Cart(props) {
  return (
    <div style={{ backgroundColor: "red" }}>
      {
        props.text.map(item => <li>{item}</li>)
      }
    </div>
  );
}

export default Cart;
