import React from "react";

import { TraderCard } from "../trader-card/trader-card";
import "./trader-list.css";

export const TraderList = props => {
  return (
    <div className="trader-list">
          {props.traders.map(trader => (
            <TraderCard trader={trader} />
          ))}
    </div>
  );
};
