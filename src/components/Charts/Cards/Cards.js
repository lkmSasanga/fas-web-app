// import classes from './Card.module.css'
import React from "react";
// import ProgressBar from "../../ProgressBar/ProgressBar";
import Card from './Card/Card'

import classes from './Cards.module.css'

const Cards = () => {
    return (
        <div className={classes.Cards}>
            {/*<Card>*/}
            {/*    <p>Total Read</p>*/}
            {/*</Card>*/}
            <Card/>

        </div>
    )
};

export default Cards;
