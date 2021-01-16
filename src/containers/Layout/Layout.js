import React, { Component } from "react";

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends Component {


    render() {
        return (
            <React.Fragment>
                <Toolbar/>
                <p>Toolbar, SideDrawer</p>
                <main>
                    {this.props.children}
                </main>
            </React.Fragment>
        )
    }
};

export default Layout;