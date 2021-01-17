import React, { Component } from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

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

    render() {
        return (
            <>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={this.state.chartData}
                />
            </>
        );
    }
}

export default Chart;
