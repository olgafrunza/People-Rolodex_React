import React from "react";
import Card from "./Card";

function CardList({ cards }) {
  return (
    <div className="card-list">
      {cards.map((person, idx) => {
        return <Card key={idx} person={person} />;
      })}
    </div>
  );
}

export default CardList;
