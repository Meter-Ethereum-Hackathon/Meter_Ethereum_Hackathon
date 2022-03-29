import React, { useState, useEffect } from "react";
import CardItem from "./CardItem";
import "./card.css";


const CardList = () => {
  
  return (
    <div className="card-deck">
      <CardItem/>
      <CardItem/>
      <CardItem/>
    </div>
  )
}
export default CardList;
