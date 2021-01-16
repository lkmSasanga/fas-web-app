import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" exact >Home</NavigationItem>
            <NavigationItem link="/dashboard">Dashboard</NavigationItem>

        </ul>
    )
};

export default navigationItems;