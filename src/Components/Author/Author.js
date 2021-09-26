import React from "react";
import "./Author.css";

function Author(props) {
  const { name, birth_day, age, country, lang, cost, img } = props.data;
  return (
    <div className="card__container">
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
        <button className="btn btn-info">Add to Cart</button>
      </div>
      <div className="icons">
        <i class="fab fa-facebook-square"></i>
        <i class="fab fa-twitter"></i>
      </div>
    </div>
  );
}

export default Author;
