import React, { Component } from "react";

import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !this.state.showSideDrawer };
        });
    }


    render() {
        return (
            <React.Fragment>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                {/*<SideDrawer*/}
                {/*    open={this.state.showSideDrawer}*/}
                {/*    closed={this.sideDrawerClosedHandler}/>*/}
                <main className={classes.Content}>
                    {this.props.children}
                </main>
                {/*<hr style={{marginTop: "100vh", opacity: "0"}}/>*/}
            </React.Fragment>
        )
    }
};

export default Layout;
