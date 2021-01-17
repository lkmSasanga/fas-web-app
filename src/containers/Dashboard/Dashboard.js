import React, {Component} from 'react';
import {} from 'react-router-dom';

import classes from './Dashboard.module.css';

class Dashboard extends Component {
    render() {
        return (
            <React.Fragment>
                <div className={classes.Dashboard}>
                    <h1>Dashboard</h1>
                </div>

            </React.Fragment>
        )
    }
};

export default Dashboard;