import React, { Component } from "react";
import { Link } from 'react-router-dom'

import Classes from './Login/Login.module.css';
import Signup from "./SignUp/Signup";
import Login from "./Login/Login";
import InputControl from "../InputControl/InputControl";

class LoginHandler extends Component {

    render() {
        return (
            <React.Fragment>
                <Login/>

            </React.Fragment>


        )
    }
}

export default LoginHandler

