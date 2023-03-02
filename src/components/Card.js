import React from "react";

function Card({ person }) {
  const { picture, name, email } = person;
  return (
    <div className="card-container">
      <img src={picture.large} alt={name.first} />
      <h2>
        {name.title}. {name.first} {name.last}
      </h2>
      <p>{email}</p>
    </div>
  );
}

export default Card;
