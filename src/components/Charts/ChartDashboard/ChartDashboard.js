import React, { Component } from "react";
import Chart from "../Chart/Chart";

// import classes from './ChartDashboard.module.css';

class ChartDashboard extends Component {
    render() {
        // const classList = classNames({
        //
        // })

        return (
            <div className="row">
                {this.props.charts &&
                this.props.charts.map((chart, i) => {
                    return (
                        <div className="col-xs-12 col-sm-6 mb-2" key={i}>
                            <Chart
                                data={chart.serie}
                                userConfig={this.props.userConfig}
                                titleName={chart.title}
                                chartData={this.props.chartData}
                            />
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default ChartDashboard;
