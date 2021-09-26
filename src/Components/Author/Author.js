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
      <div>
        <p>name: {name}</p>
        <p>birthday: {birth_day}</p>
        <p>age: {age}</p>
        <p>country: {country}</p>
        <p>language: {lang}</p>
      </div>
      <div>
        <p>Cost: {cost}</p>
        <button className="btn btn-info" onClick={() => okClick(name)}>
          Add to Cart
        </button>
      </div>
      <div className="icons">
        <i className="fab fa-facebook-square"></i>
        <i className="fab fa-twitter"></i>
      </div>
    </div>
  );
}

export default Author;
