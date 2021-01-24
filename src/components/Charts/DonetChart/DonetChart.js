import React, {Component} from 'react';

import classes from './DonetChart.module.css';

import ProgressBar from '../../ProgressBar/ProgressBar'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

class DonetChart extends Component{
    state = {
        dataRecieved: false,
        chartSize: 80,
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
        features: ''
    }



    componentDidMount() {
        // this.runChart();
        // let chartView = (<HighchartsReact
        //     highcharts = { Highcharts }
        //     options = { this.chartComponent }
        // />)
        // this.extractFeatureData();
        this.setState({dataRecieved: true})
        this.setState({features: this.props.itemDetails.features})

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
            marginTop: 0,
            marginBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            height: 330,
            width: 300,
            // plotBackgroundColor: '#e1ffff',
                plotBorderWidth: null,
                plotShadow: false,
                type: "pie",
            style: {
                'float': 'right',
                // 'font-family': 'Poppins, sans serif',
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
            // text: `Sentiment Analyzed data of ${this.props.itemDetails.item}`
            text: ``
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
            y: 150
        },
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 499
                    },
                    // chartOptions: {
                    //     align: 'center',
                    //     size: '90%',
                    // },
                    plotOptions: {
                        pie: {
                            size: '90%'
                        }
                    },
                }]
            }

    }

        // const featureOneChartComponent = {
        //     chart: {
        //         plotBackgroundColor: '#e1ffff',
        //         plotBorderWidth: null,
        //         plotShadow: false,
        //         type: "pie",
        //         style: {
        //             'float': 'right'
        //         }
        //
        //     },
        //     tooltip: {
        //         pointFormat: "<b>{point.y} %</b>"
        //     },
        //     plotOptions: {
        //         pie: {
        //             showInLegend: true,
        //             innerSize: "60%",
        //             dataLabels: {
        //                 enabled: false,
        //                 distance: -14,
        //                 color: "white",
        //                 style: {
        //                     fontWeight: "bold",
        //                     fontsize: 50
        //                 }
        //             },
        //             size: `${this.state.chartSize}%`
        //         }
        //     },
        //     series: [{
        //         name: 'Sentiment',
        //         colorByPoint: true,
        //         data: [{
        //             name: 'Positive',
        //             y: pos,
        //             color: '#40A4C8'
        //         },
        //             {
        //                 name: 'Negative',
        //                 y: neg
        //             }
        //         ]
        //     }],
        //     title: {
        //         text: `Sentiment Analyzed data of ${this.props.itemDetails.item}`
        //     },
        //     subtitle: {
        //         text: pos + '%' ,
        //         style: {
        //             fontSize: 14,
        //             fontWeight: "bold",
        //             align: 'center',
        //             floating: true,
        //             color: "#000000"
        //         },
        //         y: 200
        //     },
        //     responsive: {
        //         rules: [{
        //             condition: {
        //                 maxWidth: 499
        //             },
        //             chartOptions: {
        //                 align: 'center',
        //                 size: '40%',
        //             },
        //             plotOptions: {
        //                 pie: {
        //                     size: '40%'
        //                 }
        //             },
        //         }]
        //     }
        //
        // }

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
                {/*<p>`Sentiment Analyzed data of ${this.props.itemDetails.item}`</p>*/}

                <div className={classes.ChartsRow}>
                    <div className={classes.Cards}>
                        <p className={classes.PieChartTitle}>Overall Report</p>
                        <p className={classes.PieChartItemName}>I Phone 7</p>
                        <div className={classes.PieChart}>{chartsStock}</div>

                    </div>
                    {/*<div className={classes.Charts}>*/}
                    {/*    {chartsStock}*/}
                    {/*</div>*/}
                    <div className={classes.Cards}>
                        <p className={classes.PieChartTitle}>Feature Report</p>
                        <br/>
                        <div>
                            <p className={classes.FeatureLabel}>Battery</p>
                            <div className={classes.ProgressBar}>
                                <ProgressBar battery="79" />
                            </div>
                        </div>

                        <div>
                            <p className={classes.FeatureLabel}>Display</p>
                            <div className={classes.ProgressBar}>
                                <ProgressBar battery="65" />
                            </div>
                        </div>

                        <div>
                            <p className={classes.FeatureLabel}>Display</p>
                            <div className={classes.ProgressBar}>
                                <ProgressBar battery="89" />
                            </div>
                        </div>

                    </div>
                </div>


            </React.Fragment>
        )
    };






}

export default DonetChart;
