import React, {Component} from "react";
import classes from "../Charts/DonetChart/DonetChart.module.css";
import ProgressBar from "./ProgressBar/ProgressBar";

class ProgressBars extends Component {
    render() {

        return(
            <div>
                <div className={classes.Cards}>
                    <p className={classes.PieChartTitle}>Feature Report</p>
                    <br/>
                    <div>
                        <p className={classes.FeatureLabel}>Battery</p>
                        <div className={classes.ProgressBar}>
                            <ProgressBar battery={'43'}/>
                        </div>
                    </div>

                    <div>
                        <p className={classes.FeatureLabel}>Display</p>
                        <div className={classes.ProgressBar}>
                            <ProgressBar battery="65"/>
                        </div>
                    </div>

                    <div>
                        <p className={classes.FeatureLabel}>Display</p>
                        <div className={classes.ProgressBar}>
                            <ProgressBar battery="89"/>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ProgressBars
