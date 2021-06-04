import React from "react";
import Card from './Card'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Stack() {
  const { title, cards } = useSelector((state) => state.stack);
  return (
    <div>
      <Link className="link-home" to="/">
        <h4>Home</h4>
      </Link>
      <h3>{title}</h3>
      {cards.map((card) => {
        return <Card key={card.id} card={card} />;
      })}
    </div>
  );
}

export default Stack;
