import React, {Component} from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";

import './App.css';
// import Layout from './containers/Layout/Layout';
import InputControl from './containers/InputControl/InputControl';
import Login from "./containers/Login/Login";
import SignUp from "./containers/Login/SignUp/Signup";

class App extends Component{
    render() {
        return (
            <BrowserRouter>
                <Route>
                    <div className="App">
                        {/*<Layout>*/}
                            <Switch>
                                <Route path="/" component={Login}/>
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
