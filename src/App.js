import React, {Component} from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";

import './App.css';
import InputControl from './containers/InputControl/InputControl';
import Login from "./containers/Login/Login";

class App extends Component{
    render() {
        return (
            <BrowserRouter>
                <Route>
                    <div className="App">
                            <Switch>
                                <Route path="/" component={Login}/>
                                <Route path="/search" component={InputControl}/>
                            </Switch>
                    </div>
                </Route>
            </BrowserRouter>

        );
    }

}

export default App;
