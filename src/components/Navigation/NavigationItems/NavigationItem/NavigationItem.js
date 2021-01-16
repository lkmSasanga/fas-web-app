import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './NavigationItem.module.css';

const navigationItem = (props) => {
    return (
            <li className={classes.NavigationItem}>
                <a
                    // to={props.link}
                    exact={props.exact}
                    activeClassName={classes.active}>
                    {props.children}
                </a>
            </li>
    )

};

export default navigationItem;