import React from "react";

import "./trader-card.css";

export const TraderCard = props => {
  return (
    <div className='card-container'>
        <img className='avatar' alt='trader' src={props.trader.picture.large} />
        <h1> {props.trader.name.first} <br></br> {props.trader.name.last} </h1>
        <p>{props.trader.location.city}, {props.trader.location.state}</p>
        <p>{props.trader.email}</p>

    </div>
  );
}
