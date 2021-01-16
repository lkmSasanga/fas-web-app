import React, {Component} from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';
import InputControl from './containers/InputControl/InputControl';
class App extends Component{
    render() {
        return (
            <div className="App">
                <Layout>
                    <InputControl/>
                </Layout>
            </div>
        );
    }


}

export default App;
