import React from "react";
import "./Author.css";

function Author(props) {
  const { name, birth_day, age, country, lang, cost, img } = props.data;
  const okClick = props.newClick;

  return (
    <div className="col-3 card__container shadow-sm p-3 mb-5 bg-white rounded">
      <div>
        <img src={img} alt={name} />
      </div>
      <div className="detailsList">
        <li>
          <b>Name:</b> {name}
        </li>
        <li>
          <b>Birthday:</b> {birth_day}
        </li>
        <li>
          <b>Age:</b> {age}
        </li>
        <li>
          <b>Country:</b> {country}
        </li>
        <li>
          <b>Language:</b> {lang}
        </li>
      </div>
      <div>
        <p style={{ fontSize: "22px", fontWeight: "800" }}>Cost: ${cost}</p>
        <button className="btn btn-info" onClick={() => okClick(props.data)}>
          Order Now
        </button>
      </div>
      <div className="icons">
        <i className="p-2 h3 fab fa-facebook-square"></i>
        <i className="p-2 h3 fab fa-twitter"></i>
      </div>
    </div>
  );
}

export default Author;