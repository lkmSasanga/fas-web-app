import React, {Component} from 'react';

import classes from './DonetChart.module.css';

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

class DonetChart extends Component{
    state = {
        dataRecieved: false,
        chartSize: 50,
        mainChartData: {
            pos: this.props.itemDetails.positive,
            neg: this.props.itemDetails.negative
        },
        featureOne: {
            name: '',
            pos: null,
            neg: null
        },
        featureTwo: {
            name: '',
            pos: null,
            neg: null
        },
        featuresArray: [],
        features: this.props.itemDetails.features
    }



    componentDidMount() {
        // this.runChart();
        // let chartView = (<HighchartsReact
        //     highcharts = { Highcharts }
        //     options = { this.chartComponent }
        // />)
        // this.extractFeatureData();
        this.setState({dataRecieved: true})

        // const featuresArray = [];
        for (let feature in this.props.itemDetails.features) {
            this.state.featuresArray.push({
                name: this.props.itemDetails.features[feature].name,
                pos: this.props.itemDetails.features[feature].positive,
                neg: this.props.itemDetails.features[feature].negative
            })
        }

        console.log('fetures array ', this.state.featuresArray)
        // this.setState({
        //     featureOne: {
        //         name: this.state.featuresArray[0].name,
        //         pos: this.state.featuresArray[0].pos
        //     },

        // })
        // console.log(this.state.featuresArray[0].name)
        // console.log(this.state.featuresArray[0].pos)

    }

    componentWillUnmount() {
        this.setState({dataRecieved: false})
    }

    mainChart = () => {

    }

    extractFeatureData = (props) => {

    }

    render (props) {

        var pos = parseInt(this.props.itemDetails.positive)
        var neg = parseInt(this.props.itemDetails.negative)

        const chartComponent = {
        chart: {
            plotBackgroundColor: '#e1ffff',
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
                y: pos,
                color: '#40A4C8'
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

        const featureOneChartComponent = {
            chart: {
                plotBackgroundColor: '#e1ffff',
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
                    y: pos,
                    color: '#40A4C8'
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

        let featureCharts = (
            <div className={classes.DonetChart}>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={chartComponent}
                />
            </div>
        )



        console.log(this.props.itemDetails)





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