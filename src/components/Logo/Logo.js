import React from 'react';

import jetLogo from '../../assets/images/logo.png';
import classes from './Logo.module.css';

const logo = (props) => {
    return (
        <div className={classes.Logo} style={{height: props.height}}>
            <img src={jetLogo} alt="MyLogo"/>
        </div>
    )
};

export default logo;