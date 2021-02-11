import React, { Component } from "react";
// import { Link } from 'react-router-dom'

import Classes from './Login.module.css';
import Signup from "./SignUp/Signup";
import InputControl from "../InputControl/InputControl";

class Login extends Component {
    state = {
        clicked: false,
        email: '',
        password: '',
        signUpError: '',
        isLoading: false
    }
    onChangeEmail = (e) => {
        e.preventDefault()
        this.setState({email: e.target.value})
    }
    onChangePassword = (e) => {
        e.preventDefault()
        this.setState({password: e.target.value})
    }
    // onFormSubmit = (e) => {
    //     // e.preventDefault()
    //     const data = new FormData(e.target)
    //     fetch('http://localhost:5000/api/login', {
    //         method: 'POST',
    //         body: {
    //             email: this.state.email,
    //             password: this.state.password
    //         }
    //     }).then(result => console.log('form submit successful'))
    // }

    SignUpClickHandler = () => {
        return <Signup/>
    }

    onClickHandler = (e) => {
        e.preventDefault()
        console.log('clicked')
        this.setState({ clicked: true, isLoading: true })

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
                        // signUpError: json.message,
                        // isLoading: false,
                        email: '',
                        password: '',
                    });
                }
                else {
                    this.setState({
                        signUpError: json.message,
                        isLoading: false,
                    });
                }
            });



        // this.props.history.push('/search');
        // return <Signup/>
    }

    render() {
        console.log(this.state.email)
        console.log(this.state.password)

        return (
            <React.Fragment>
                { !this.state.clicked ?
                <div className={Classes.FormBody}>
                    <div className={Classes.wrapper}>
                        <div className={Classes.title}>
                            Welcome
                        </div>
                        <form action="#" onSubmit={this.onFormSubmit}>
                            <div className={Classes.field}>
                                <input type="text" required name="email" onChange={e => this.onChangeEmail(e)}/>
                                <label>Email Address</label>
                            </div>
                            <div className={Classes.field}>
                                <input type="password" required name="password" onChange={e => this.onChangePassword(e)}/>
                                <label>Password</label>
                            </div>
                            <div className={Classes.content}>
                                <div className={Classes.checkbox}>
                                    <input type="checkbox" id="remember-me"/>
                                    <label htmlFor="remember-me" className={Classes.RememberMe}>Remember me</label>
                                </div>
                                <div className={Classes.passLink}>
                                    <a href="/">Forgot password?</a></div>
                            </div>

                            {/*<Link to={'/search'}>*/}
                            <div className={Classes.field}>
                                <input type="submit" value="Login" onClick={e => this.onClickHandler(e)}/>
                            </div>
                            {/*</Link>*/}

                            <div className={Classes.signupLink}>
                                Not a member? <a href="/signup" onClick={this.SignUpClickHandler}>Signup now</a></div>
                        </form>
                        {this.state.isLoading ? <p>Loading...</p>: null}
                        {this.state.signUpError ?
                            console.log('login error'): null
                        }
                        {this.onSubmitHandler}
                    </div>
                </div>  : <InputControl/>}

            </React.Fragment>


        )
    }
}

export default Login
