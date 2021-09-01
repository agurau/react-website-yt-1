import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Recent Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/British-museum.JPG"
              text="Explore the British Museum this autumn"
              label="Culture"
              path="/services"
            />
            <CardItem
              src="images/Zagreb.jpg"
              text="Backpacking around Croatia with friends"
              label="Adventure"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/Cies.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/Louvre.JPG"
              text="Why not visiting La Gioconda next summer?"
              label="Culture"
              path="/products"
            />
            <CardItem
              src="images/Butterfly.jpg"
              text="Discover the most exotic animals from the Amazonas"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
