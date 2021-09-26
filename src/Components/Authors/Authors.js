import React, { useState } from "react";
import Author from "../Author/Author";
import Cart from "../Cart/Cart";
import "./Authors.css";

function Authors() {
  const [names, setnames] = useState([]);
  const [data, setdata] = useState([]);

  fetch("./authors.json")
    .then((res) => res.json())
    .then((newData) => setdata(newData));

  const eventHandle = (name) => {
    setnames(name);
  };

  console.log(names);

  return (
    <div className="full__container">
      <div className="row" style={{ justifyContent: "center" }}>
        {data.map((item) => (
          <Author key={item.key} data={item} newClick={eventHandle} />
        ))}
      </div>
      <Cart />
    </div>
  );
}

export default Authors;
