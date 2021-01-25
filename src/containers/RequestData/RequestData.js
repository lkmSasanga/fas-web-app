import React, { Component } from 'react';
import axios from 'axios';

import Spinner from '../../components/UI/Spinner/Spinner';
import ChartDashboard from "../../components/Charts/ChartDashboard/ChartDashboard";
import DonetChart from '../../components/Charts/DonetChart/DonetChart';
import Cards from '../../components/Charts/Cards/Cards';

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

// import DataProcessing, {
//     overallItem,
//     featureOne,
//     featureTwo,
//     featureThree
// } from "../../components/Charts/DataProcessing";
import Dashboard from "../Dashboard/Dashboard";

class RequestData extends Component {

        state = {
            name: '',
            items: [],
            selectedItem: {},
            loading: false,
            showChart: true,
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
                // const runChart = () => {return }
                this.setState({
                    items: response.data,
                    selectedItem: filteredArray
                })
                console.log(this.state.selectedItem.positive)
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

    render(props) {
        // this.defineData();

        console.log('req......', this.state.selectedItem.totalCount )
        console.log('req......', this.state.selectedItem.features )

        let form = (
            <div>
                <br/>
                {/*<p>Item: {this.state.selectedItem.item}</p>*/}
                {/*<p>Negative: {this.state.selectedItem.negative}</p>*/}
                {/*<p>Positive: {this.state.selectedItem.positive}</p>*/}
                <Cards itemDetails={this.state.selectedItem}/>
                <DonetChart className="col-md-6" itemDetails={this.state.selectedItem}/>

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

                {form}
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
