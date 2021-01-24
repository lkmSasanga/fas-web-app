import classes from './ProgressBar.module.css'
import React, { useState } from "react";

const ProgressBar = (props) => {
    const [style, setStyle] = useState({});

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${props.battery}%`
        }

        setStyle(newStyle);
    }, );

    return (
        <div className={classes.progress}>
            <div className={classes.progressDone} style={style}>
                <div style={{fontSize:'15px'}}>
                    {props.battery}%
                </div>

            </div>
        </div>
    )
}

export default ProgressBar
