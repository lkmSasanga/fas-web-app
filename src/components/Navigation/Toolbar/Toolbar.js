import React from 'react';

import classes from './Toolbar.module.css';


const toolbar = (props) => {
    return(
        <header className={classes.Toolbar}>
            {/*<DrawerToggle clicked={props.drawerToggleClicked}/>*/}
            {/*<Logo height="80%"/>*/}
            {/*<nav className={classes.DesktopOnly}>*/}
            {/*    <NavigationItems/>*/}
            {/*</nav>*/}
        </header>
    )
};

export default toolbar;
