import React, { Component } from 'react';
import axios from 'axios';

import Spinner from '../../components/UI/Spinner/Spinner';
import ChartDashboard from "../../components/Charts/ChartDashboard/ChartDashboard";

import DataProcessing, {
    overallItem,
    featureOne,
    featureTwo,
    featureThree
} from "../../components/Charts/DataProcessing";

class RequestData extends Component {

        state = {
            name: '',
            items: [],
            selectedItem: {},
            loading: false,
            showChart: true
        };


    componentDidMount(props) {
        this.setState({loading: true})

        // url which is node output the data

        const selectedItemName = this.props.name

        axios.get('https://malindu-fas.herokuapp.com/')
            .then(response => {
                // filtering
                const outputArrayObject = response.data
                const filteredArray = outputArrayObject.find(nameOfItem => nameOfItem.item === selectedItemName)
                console.log(filteredArray)

                this.setState({loading: false, showChart: true})

                this.setState({
                    items: response.data,
                    selectedItem: filteredArray
                })
                console.log(this.state.selectedItem.positive)
            })

            .catch((error) => {
                console.log(error);
            })

        // from charts
        DataProcessing();
        this.copyDataSeries();
    }

    copyDataSeries = (obj = {}) => {
        this.setState({
            charts: [
                { serie: overallItem, title: `Overall ${this.props.name}`},
                { serie: featureOne, title: `I phone 7 :Battery` },
                { serie: featureTwo, title: `I phone 7: Display` },
                { serie: featureThree, title: `Gender` }
            ]
        });
    };

    render(props) {
        // if (this.state.showChart) {
        //     let dashboard =<ChartDashboard/>
        // }

        // console.log('selected item ',this.state.selectedItem)

        let form = (
            <div>
                <br/>
                <p>Item: {this.state.selectedItem.item}</p>
                <p>Negative: {this.state.selectedItem.negative}</p>
                <p>Positive: {this.state.selectedItem.positive}</p>
            </div>
            );

        if (this.state.loading) {
            form = <Spinner/>
        }

        return (
            <React.Fragment>
                {form}
                {/*{*/}
                {/*    this.state.showChart ?  <ChartDashboard/> : null*/}
                {/*}*/}
                <ChartDashboard charts={this.state.charts} chartData={this.state.selectedItem}/>
            </React.Fragment>

        )
    }
}

export default RequestData;
