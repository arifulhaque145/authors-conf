import React, { useState } from "react";
import Author from "../Author/Author";
import "./Authors.css";

function Authors() {
  const [data, setdata] = useState([]);

  fetch("./authors.json")
    .then((res) => res.json())
    .then((newData) => setdata(newData));

  return (
    <div className="grid__container">
      {data.map((item) => (
        <Author key={item.key} data={item} />
      ))}
    </div>
  );
}

export default Authors;
