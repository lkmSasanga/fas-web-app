// import classes from './Card.module.css'
import React from "react";
// import ProgressBar from "../../ProgressBar/ProgressBar";
import Card from './Card/Card'

import classes from './Cards.module.css'

const Cards = (props) => {
    console.log('from cards')
    return (
        <div className={classes.Cards}>
            {/*<Card>*/}
            {/*    <p>Total Read</p>*/}
            {/*</Card>*/}
            <Card data={props.itemDetails}/>

        </div>
    )
};

export default Cards;
