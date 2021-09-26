import React, { useEffect, useState } from "react";
import Author from "../Author/Author";
import Cart from "../Cart/Cart";
import "./Authors.css";

function Authors() {
  const [names, setnames] = useState([]);
  const [data, setdata] = useState([]);
  const eventHandle = (name) => {
    const newNames = [...names, name];
    setnames(newNames);
  };

  useEffect(() => {
    fetch("./authors.json")
      .then((res) => res.json())
      .then((newData) => setdata(newData));
  }, []);

  return (
    <div className="parent__container">
      <div className="full__container">
        <div className="row" style={{ justifyContent: "center" }}>
          {data.map((item) => (
            <Author key={item.key} data={item} newClick={eventHandle} />
          ))}
        </div>
        <Cart text={names} />
      </div>
    </div>
  );
}

export default Authors;
