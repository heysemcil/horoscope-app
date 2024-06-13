import React from "react";

const Card = ({ card }) => {
  
  return (
    <div className="card-container">
      {card.map((card)=>(
        <div className="cards">
        <div className="title">
          <h1>{card.title}</h1>
        </div>
        <img src={card.image} alt="" />

        <div className="card-over">
          <p>{card.desc}</p>
        </div>
      </div>
      ))}
      
    </div>
  );
};

export default Card;
