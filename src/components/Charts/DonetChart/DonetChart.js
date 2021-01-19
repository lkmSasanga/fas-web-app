import React, {Component} from 'react';

import classes from './DonetChart.module.css';

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

class DonetChart extends Component{
    state = {
        dataRecieved: false,
        chartSize: 50
    }


    componentDidMount() {
        // this.runChart();
        // let chartView = (<HighchartsReact
        //     highcharts = { Highcharts }
        //     options = { this.chartComponent }
        // />)
        this.setState({dataRecieved: true})
    }

    componentWillUnmount() {
        this.setState({dataRecieved: false})
    }

    // runChart = () => {
    //     return (<HighchartsReact
    //         highcharts = { Highcharts }
    //         options = { this.chartComponent }
    //     />)
    // }

    render (props) {

        var pos = parseInt(this.props.itemDetails.positive)
        var neg = parseInt(this.props.itemDetails.negative)
        const chartComponent = {
        chart: {
            plotBackgroundColor: '#c0ffff',
                plotBorderWidth: null,
                plotShadow: false,
                type: "pie",
            style: {
                'float': 'right'
            }

        },
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
                },
                size: `${this.state.chartSize}%`
            }
        },
        series: [{
            name: 'Sentiment',
            colorByPoint: true,
            data: [{
                name: 'Positive',
                y: pos
            },
                {
                    name: 'Negative',
                    y: neg
                }
            ]
        }],
            title: {
            text: `Sentiment Analyzed data of ${this.props.itemDetails.item}`
        },
        subtitle: {
            text: pos + '%' ,
                style: {
                fontSize: 14,
                    fontWeight: "bold",
                    align: 'center',
                    floating: true,
                    color: "#000000"
            },
            y: 200
        },
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 499
                    },
                    chartOptions: {
                        align: 'center',
                        size: '40%',
                    },
                    plotOptions: {
                        pie: {
                            size: '40%'
                        }
                    },
                }]
            }

    }

    // let chartView = this.props.itemDetails ?
    //
    // if (this.props.itemDetails) {
    //     chartView = (
    //         <HighchartsReact
    //         highcharts = { Highcharts }
    //         options = { this.chartComponent }
    //     />
    //     )
    // }

    // console.log('from donetChart ', this.props.itemDetails.item)


        let chartsStock = (
            <div className={classes.DonetChart}>
                <HighchartsReact

                    highcharts={Highcharts}
                    options={chartComponent}
                />
            </div>
        )

        return (
            <React.Fragment>
                <div >
                    {chartsStock}
                    {chartsStock}
                </div>

            </React.Fragment>
        )
    };






}

export default DonetChart;