import React, { Component } from 'react';
import axios from 'axios';

import Spinner from '../../components/UI/Spinner/Spinner';
// import ChartDashboard from "../../components/Charts/ChartDashboard/ChartDashboard";
import DonetChart from '../../components/Charts/DonetChart/DonetChart';
import Cards from '../../components/Charts/Cards/Cards';

// import Highcharts from 'highcharts'
// import HighchartsReact from 'highcharts-react-official'

class RequestData extends Component {

        state = {
            name: '',
            items: [],
            selectedItem: {},
            loading: false,
            showChart: true,
            featuresArray: [],
        };

    componentDidMount() {
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
                // const runChart = () => {return }
                this.setState({
                    items: response.data,
                    selectedItem: filteredArray
                })
                console.log(this.state.selectedItem.name)
                // console.log(this.state.featuresArray)

                // this.defineData();
            })

            .catch((error) => {
                console.log(error);
            })

        // from charts
        // DataProcessing();
        // this.copyDataSeries();
    }

    extractFeatures = () => {
        // if (this.state.loading) {
            for (let feature in this.props.itemDetails.features) {
                this.state.featuresArray.push({
                    name: this.state.selectedItem.features[feature].name,
                    pos: this.state.selectedItem.features[feature].positive,
                    neg: this.state.selectedItem.features[feature].negative
                })
            }
            console.log('fetures array ', this.state.selectedItem.features[0])
            console.log('fetures ....... ', this.state.featuresArray)

        // }
    }

    render() {
        let form = null

        if (this.state.loading) {
            form = <Spinner/>
        } else if(!this.state.loading){
            form = (
                <div>
                    <br/>
                    <Cards itemDetails={this.state.selectedItem}/>
                    <DonetChart className="col-md-6" itemDetails={this.state.selectedItem}/>
                </div>
            );
        }

        return (
            <React.Fragment>
                {form}
                <br/>

                { this.state.showChart ?
                    <div className="row">
                        {/*<DonetChart className="col-md-6" itemDetails={this.state.selectedItem}/>*/}
                    </div> : null
                }
                {/*<ChartDashboard charts={this.state.charts} chartData={this.state.selectedItem}/>*/}
            </React.Fragment>
        )
    }
}

export default RequestData;
