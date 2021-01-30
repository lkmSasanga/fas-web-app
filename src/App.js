import React, {Component} from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";

import './App.css';
import Layout from './containers/Layout/Layout';
import InputControl from './containers/InputControl/InputControl';
import Dashboard from "./containers/Dashboard/Dashboard";

class App extends Component{
    render() {
        return (
            <BrowserRouter>
                <Route>
                    <div className="App">
                        <Layout>
                            <Switch>
                                {/*<Route path="/dashboard" component={Dashboard}/>*/}
                                <Route path="/" component={InputControl}/>
                            </Switch>
                        </Layout>
                    </div>


                </Route>

            </BrowserRouter>

        );
    }


}

export default App;
