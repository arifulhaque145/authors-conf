import React from "react";
import "./Author.css";

function Author(props) {
  const { key, name, birth_day, age, country, lang, cost, img } = props.data;
  const okClick = props.newClick;

  const onTimeClick = (key) => {
    okClick(props.data);
    document.getElementById(key).disabled = true;
  };

  return (
    <div className="col-3 card__container shadow-sm p-3 mb-5 bg-white rounded">
      <div>
        <img src={img} alt={name} />
      </div>
      <div className="full_details">
        <div style={{ textAlign: "right", fontWeight: "bold" }}>
          <ul className="detailsList">
            <li>Name:</li>
            <li>Birthday:</li>
            <li>Age:</li>
            <li>Country:</li>
            <li>Language:</li>
          </ul>
        </div>
        <div style={{ textAlign: "left" }}>
          <ul className="detailsList" style={{ paddingLeft: "10px" }}>
            <li>{name}</li>
            <li>{birth_day}</li>
            <li>{age}</li>
            <li>{country}</li>
            <li>{lang}</li>
          </ul>
        </div>
      </div>
      <div>
        <p style={{ fontSize: "22px", fontWeight: "800" }}>Cost: ${cost}</p>
        <button
          id={key}
          className="btn btn-info text-uppercase"
          style={{ fontWeight: "500" }}
          onClick={() => onTimeClick(key)}
        >
          <i className="fas fa-shopping-cart"></i> Order Now
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
