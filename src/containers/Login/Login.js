import React, { Component } from "react";
import { Link } from 'react-router-dom'

import Classes from './Login.module.css';
// import Signup from "./SignUp/Signup";
import InputControl from "../InputControl/InputControl";
import ThreeDots from '../../components/UI/ThreeDots/ThreeDots';

class Login extends Component {
    state = {
        clicked: false,
        username: '',
        email: '',
        password: '',
        signUpError: '',
        isLoading: false,
        errorOccurs: false,
        loginSuccess: false,
        loadSignup: false,
        submitButtonName: 'Login',
        errMsg: '',
        invalidEmail: false
    }

    onChangeUsername = (e) => {
        e.preventDefault()
        this.setState({username: e.target.value})
    }

    onChangeEmail = (e) => {
        e.preventDefault()
        this.setState({email: e.target.value})
    }
    onChangePassword = (e) => {
        e.preventDefault()
        this.setState({password: e.target.value})
    }


    SignUpClickHandler = () => {
        this.setState({loadSignup: true, submitButtonName: 'Signup', errorOccurs: false})
    }

    onClickHandler = (e) => {
        e.preventDefault()
        console.log('clicked')
        this.setState({ clicked: true, isLoading: true, errorOccurs: false })

        if (!this.state.loadSignup){
            console.log('loadSignup...', this.state.loadSignup)

            fetch('https://malindu-fas.herokuapp.com/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password,
                }),
            }).then(res => res.json())
                .then(json => {
                    console.log('json', json);
                    if (json.success) {
                        this.setState({
                            email: '',
                            password: '',
                            isLoading: false,
                            signUpError: '',
                            errorOccurs: false,
                            loginSuccess: true
                        });
                    }
                    else {
                        if(json.message === 'Invalid Email!') {
                            this.setState({invalidEmail: true})
                        }

                        this.setState({
                            signUpError: json.message,
                            email: '',
                            password: '',
                            isLoading: false,
                            errorOccurs: true
                        });
                    }
                });

        } else if (this.state.loadSignup) {
            console.log('loadSignup...', this.state.loadSignup)
            fetch('https://malindu-fas.herokuapp.com/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify({
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password,
                }),
            }).then(res => res.json())
                .then(json => {
                    console.log('json', json);
                    if (json.success) {
                        this.setState({
                            // signUpError: json.message,
                            // isLoading: false,
                            username: '',
                            email: '',
                            password: '',
                            isLoading: false,
                            signUpError: '',
                            errorOccurs: false,
                            loginSuccess: true,
                        });
                    }
                    else {
                        this.setState({
                            signUpError: json.message,
                            username: '',
                            email: '',
                            password: '',
                            isLoading: false,
                            errorOccurs: true,
                            errMsg: json.data

                        });
                    }
                });
        }


        if (this.state.loginSuccess) {
            return <Link to="/search" replace />
        }

        // this.props.history.push('/search');
        // return <Signup/>
    }

    render() {
        console.log(this.state.errMsg)
        return (
            <React.Fragment>
                { !this.state.loginSuccess ?
                    <>
                        <div className={Classes.FormBody}>
                            <div className={Classes.wrapper }>
                                <div className={Classes.title}>
                                    Welcome
                                </div>
                                <form action="#" onSubmit={this.onFormSubmit}>

                                    {!this.state.loadSignup ?
                                        <React.Fragment>
                                            <div className={Classes.field}>
                                                <input
                                                    type="text"
                                                    required name="email"
                                                    style={this.state.invalidEmail ?
                                                        {borderColor: "red", boxShadow:  "5px 5px 5px #FF7F7F .6"}
                                                        : null} onChange={e => this.onChangeEmail(e)}/>
                                                {this.state.invalidEmail ?
                                                    <label style={{color: "red"}}>Invalid Email Address</label>
                                                    :<label>Invalid Email Address</label> }
                                            </div>
                                            <div className={Classes.field}>
                                                <input type="password" required="required" name="password" autoComplete="on" onChange={e => this.onChangePassword(e)}/>
                                                <label>Password</label>
                                            </div>
                                        </React.Fragment>
                                        : null }
                                    {this.state.loadSignup ?
                                        <React.Fragment>
                                            <div className={Classes.field}>
                                                <input type="text" required="required" name="username" autoComplete="on" onChange={e => this.onChangeUsername(e)}/>
                                                <label>Username</label>
                                            </div>
                                            <div className={Classes.field}>
                                                <input type="text" required="required" name="email" onChange={e => this.onChangeEmail(e)}/>
                                                <label>Email Address</label>
                                            </div>
                                            <div className={Classes.field}>
                                                <input type="password" required="required" name="password" autoComplete="on" onChange={e => this.onChangePassword(e)}/>
                                                <label>Password</label>
                                            </div>
                                        </React.Fragment> : null
                                    }

                                    <div className={Classes.content}>
                                        <div className={Classes.checkbox}>
                                            <input type="checkbox" id="remember-me"/>
                                            <label htmlFor="remember-me" className={Classes.RememberMe}>Remember me</label>
                                        </div>
                                        <div className={Classes.passLink}>
                                            <a href="/">Forgot password?</a></div>
                                    </div>

                                    <div className={Classes.field}>
                                        <input type="submit" value={this.state.submitButtonName} onClick={e => this.onClickHandler(e)}/>
                                    </div>
                                    {!this.state.loadSignup ?
                                        <div className={Classes.signupLink}>
                                            Not a member? <a href="#" onClick={this.SignUpClickHandler}>Signup now</a>
                                        </div> : null
                                    }

                                </form>
                                {this.state.errorOccurs ?
                                    <p style={{ color: "#c70303"}}>Login Failed</p>
                                    : null}

                                {this.state.signUpError ?
                                    console.log('login error'): null
                                }
                                {/*{this.onSubmitHandler}*/}
                            </div>
                        </div>
                        {this.state.isLoading ? <ThreeDots/>: null}
                    </>
                    : <InputControl/>
                }

            </React.Fragment>


        )
    }
}

export default Login
