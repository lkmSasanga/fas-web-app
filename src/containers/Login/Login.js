import React, { Component } from "react";
import { Link } from 'react-router-dom'

import Classes from './Login.module.css';
import Signup from "./SignUp/Signup";
import InputControl from "../InputControl/InputControl";

class Login extends Component {
    state = {
        clicked: false
    }

    SignUpClickHandler = () => {
        return <Signup/>
    }

    onClickHandler = (e) => {
        e.preventDefault()
        console.log('clicked')
        this.setState({ clicked: true })
        // this.props.history.push('/search');
        // return <Signup/>
    }

    render() {
        return (
            <div> { !this.state.clicked ?
                <div className={Classes.wrapper}>
                    <div className={Classes.title}>
                        Welcome
                    </div>
                    <form action="#">
                        <div className={Classes.field}>
                            <input type="text" required/>
                            <label>Email Address</label>
                        </div>
                        <div className={Classes.field}>
                            <input type="password" required/>
                            <label>Password</label>
                        </div>
                        <div className={Classes.content}>
                            <div className={Classes.checkbox}>
                                <input type="checkbox" id="remember-me"/>
                                <label htmlFor="remember-me" className={Classes.RememberMe}>Remember me</label>
                            </div>
                            <div className={Classes.passLink}>
                                <a href="#">Forgot password?</a></div>
                        </div>

                        {/*<Link to={'/search'}>*/}
                        <div className={Classes.field}>
                            <input type="submit" value="Login" onClick={e => this.onClickHandler(e)}/>
                        </div>
                        {/*</Link>*/}

                        <div className={Classes.signupLink}>
                            Not a member? <a href="/signup" onClick={this.SignUpClickHandler}>Signup now</a></div>
                    </form>
                    {this.onSubmitHandler}
                </div> : <InputControl/>}
            </div>


        )
    }
}

export default Login
