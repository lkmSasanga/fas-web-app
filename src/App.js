import React, {Component} from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";

import './App.css';
// import Layout from './containers/Layout/Layout';
import InputControl from './containers/InputControl/InputControl';
import LoginHandler from "./containers/Login/LoginHandler";
import SignUp from "./containers/Login/SignUp/Signup";

class App extends Component{
    render() {
        return (
            <BrowserRouter
                // basename="/"
            >
                <Route>
                    <div className="App">
                        {/*<Layout>*/}
                            <Switch>
                                <Route path="/" component={LoginHandler}/>
                                <Route path="/signup" component={SignUp}/>
                                <Route path="/search" component={InputControl}/>
                            </Switch>
                        {/*</Layout>*/}
                    </div>
                </Route>
            </BrowserRouter>

        );
    }


}

export default App;
