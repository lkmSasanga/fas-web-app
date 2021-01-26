import React, { Component } from 'react';
import axios from 'axios';

import Spinner from '../../components/UI/Spinner/Spinner';
// import ChartDashboard from "../../components/Charts/ChartDashboard/ChartDashboard";
import DonetChart from '../../components/Charts/DonetChart/DonetChart';
import Cards from '../../components/Charts/Cards/Cards';

// import Highcharts from 'highcharts'
// import HighchartsReact from 'highcharts-react-official'

// import DataProcessing, {
//     overallItem,
//     featureOne,
//     featureTwo,
//     featureThree
// } from "../../components/Charts/DataProcessing";
// import Dashboard from "../Dashboard/Dashboard";

class RequestData extends Component {

        state = {
            name: '',
            items: [],
            selectedItem: {},
            loading: false,
            showChart: true,
            featuresArray: [],
            // overallItem: [
            //     { name: "negative", y: parseInt(this.state.selectedItem.negative) },
            //     { name: "positive", y: parseInt(this.state.selectedItem.positive) }
            //     ],
            // featureOne: [
            //     { name: "negative", y: 20 },
            //     { name: "positive", y: 80 }
            // ],
            // featureTwo: [
            //     { name: "negative", y: 45 },
            //     { name: "positive", y: 55 }
            // ],
            // featureThree: [
            //     { name: "negative", y: 90 },
            //     { name: "positive", y: 10 }
            // ]
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

    // defineData = () => {
    //     console.log('selected item : chartData',this.state.selectedItem.negative)
    //
    //     let pos = parseInt(this.state.selectedItem.positive)
    //     let neg = parseInt(this.state.selectedItem.negative)

        // let overallItem = [
        //     { name: "negative", y: neg },
        //     { name: "positive", y: pos }
        // ];
        //
        // let featureOne = [
        //     { name: "negative", y: 20 },
        //     { name: "positive", y: 80 }
        // ];
        //
        // let featureTwo = [
        //     { name: "negative", y: 45 },
        //     { name: "positive", y: 55 }
        // ];
        //
        // let featureThree = [
        //     { name: "negative", y: 90 },
        //     { name: "positive", y: 10 }
        // ];

    // }

    // copyDataSeries = (obj = {}) => {
    //     this.setState({
    //         charts: [
    //             { serie: this.state.overallItem, title: `Overall ${this.props.name}`},
    //             { serie: this.state.featureOne, title: `${this.props.name}: battery` },
    //             { serie: this.state.featureTwo, title: `${this.props.name}: display` },
    //             { serie: this.state.featureThree, title: `Gender` }
    //         ],
    //         chartData: this.state.selectedItem
    //     });
    // };

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

        // console.log('req......', this.state.selectedItem.features )
        // console.log('req......', this.state.selectedItem.features.featureOne )

        let form = (
            <div>
                <br/>
                <Cards itemDetails={this.state.selectedItem}/>
                <DonetChart className="col-md-6" itemDetails={this.state.selectedItem}/>
                {/*{this.extractFeatures}*/}


            </div>
            );

        if (this.state.loading) {
            form = <Spinner/>
        }

        // let showingChart = (
        //     <HighchartsReact className = "col-md-6"
        //                      highcharts = { Highcharts }
        //         // options = { batteryOptions }
        //     />
        // )
        //
        // if(this.state.showChart) {
        //    showingChart =
        // }

        return (
            <React.Fragment>

                {!this.state.loading ? form : null}
                {/*{*/}
                {/*    this.state.showChart ?  <ChartDashboard/> : null*/}
                {/*}*/}

                {/*<HighchartsReact highcharts = { Highcharts }*/}
                {/*                 options = { itemOptions }*/}
                {/*/>*/}
                <br/>

                { this.state.showChart ?
                    <div className="row">
                        {/*<HighchartsReact*/}
                        {/*    className="col-md-6"*/}
                        {/*    highcharts={Highcharts}*/}
                        {/*    options = { itemOptions }*/}
                        {/*/>*/}

                        {/*<DonetChart className="col-md-6" itemDetails={this.state.selectedItem}/>*/}


                    </div> : null
                }

                {/*<ChartDashboard charts={this.state.charts} chartData={this.state.selectedItem}/>*/}

            </React.Fragment>

        )
    }
}

export default RequestData;
