import React from "react";
import Carousel from "../carousel/Carousel";
import "./card.css";

const Card = ({ room }) => {
  return (
    <div className="card">
      <div className="img_container">
        <Carousel images={room.images} />
      </div>
      <div className="body_container">
        <h5 className="capitalize">{room.tittle}</h5>
        <p>{room.description.slice(0, 50) + "..."}</p>
        <p>{`Precio: ${room.price}`}</p>
      </div>
    </div>
  );
};

export default Card;
