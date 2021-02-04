import React, { Component } from "react";
import Classes from './Login.module.css';

class Login extends Component {

    SignUpClickHandler = () => {

    }

    render() {
        return (
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
                    <div className={Classes.field}>
                        <input type="submit" value="Login"/>
                    </div>
                    <div className={Classes.signupLink}>
                        Not a member? <a href="/signup" onClick={this.SignUpClickHandler}>Signup now</a></div>
                </form>
            </div>
        )
    }
}

export default Login
