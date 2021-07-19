import React, { Component } from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// let overallItem = [],
//     featureOne = [],
//     featureTwo = [],
//     featureThree = [];

class Chart extends Component {
    state = {
        chartData: {
            chart: {
                type: "pie",
                marginBottom: 100
            },
            title: {
                text: this.props.titleName
            },
            subtitle: {
                text: '60%',
                style: {
                    fontSize: 14,
                    fontWeight: "bold",
                    align: 'center',
                    floating: true,
                    color: "#000000"
                },
                y: 175
            },
            series: [
                {
                    data: this.props.data,
                }
            ],

            tooltip: {
                pointFormat: "<b>{point.y} %</b>"
            },
            plotOptions: {
                pie: {
                    showInLegend: true,
                    innerSize: "60%",
                    dataLabels: {
                        enabled: false,
                        distance: -14,
                        color: "white",
                        style: {
                            fontWeight: "bold",
                            fontsize: 50
                        }
                    }
                }
            },


            ...this.props.userConfig
        }

    };

    componentDidMount() {
        this.copyDataSeries();
    }

    // from dataProcessing

    copyDataSeries = (obj = {}) => {
        this.setState({
            charts: [
                { serie: this.state.overallItem, title: `Overall ${this.props.chartData.item}`},
                { serie: this.state.featureOne, title: `: battery` },
                { serie: this.state.featureTwo, title: `: display` },
                { serie: this.state.featureThree, title: `Gender` }
            ],
            chartData: this.state.selectedItem
        });
    };

    // dataProcessing = (props) => {
    //     overallItem = [
    //         { name: "negative", y: 50 },
    //         { name: "positive", y: 50 }
    //     ];
    //
    //     featureOne = [
    //         { name: "negative", y: 20 },
    //         { name: "positive", y: 80 }
    //     ];
    //
    //     featureTwo = [
    //         { name: "negative", y: 45 },
    //         { name: "positive", y: 55 }
    //     ];
    //
    //     featureThree = [
    //         { name: "negative", y: 90 },
    //         { name: "positive", y: 10 }
    //     ];
    // };


    render() {
        console.log('From chart ' , this.props.chartData.item)
        return (
            <React.Fragment>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={this.state.chartData}
                />
            </React.Fragment>
        );
    }
}

export default Chart;
