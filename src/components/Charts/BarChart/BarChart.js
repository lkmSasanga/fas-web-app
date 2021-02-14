import React, {Component} from 'react';

import classes from './BarChart.module.css';

import Highcharts from 'highcharts'
import HighchartsReact from "highcharts-react-official";
// import HighchartsReact from 'highcharts-react-official'

class BarChart extends Component{


    render () {

        const chartComponent = {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'I Phone 6 Read feature wise Counts'
            },
            subtitle: {
                text: 'subtitle'
            },
            xAxis: {
                categories: ['Display', 'Battery', 'Speakers'],
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total Read Feedbacks',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valueSuffix: ' millions'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -40,
                y: 120,
                floating: true,
                borderWidth: 1,
                backgroundColor:
                    Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
                shadow: true
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Positive',
                data: [65, 55, 70],
                color: '#ee5d72'
            }, {
                name: 'Negative',
                data: [35, 45, 30],
                color: '#1fd985'
            }]
        };

        return (
            <React.Fragment>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={chartComponent}
                />
            </React.Fragment>
        )
    };






}

export default BarChart;
