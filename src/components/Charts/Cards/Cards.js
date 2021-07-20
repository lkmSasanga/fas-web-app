import React from "react";
import Card from "./Card/Card";

import classes from "./Cards.module.css";

const Cards = (props) => {
  return (
    <div className={classes.Cards}>
      <Card data={props.itemDetails} />
    </div>
  );
};

export default Cards;
