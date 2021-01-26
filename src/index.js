import React from 'react';
import ReactDOM from 'react-dom';
import classes from './index.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.Fragment>
        <div className={classes.body}>
            <App />
        </div>
    </React.Fragment>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
