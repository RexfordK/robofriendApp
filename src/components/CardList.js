import React from "react";
import Card from "./Card";

const CardList = ({ robots, cardClick}) => {
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
            cardClick={cardClick}
          />
        );
      })}
    </div>
  );
};

export default CardList;
