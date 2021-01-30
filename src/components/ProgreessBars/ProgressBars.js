import React, {Component} from "react";
import classes from "../Charts/DonetChart/DonetChart.module.css";
import ProgressBar from "./ProgressBar/ProgressBar";

class ProgressBars extends Component {
    state = {
        loaded: false,
    }
    componentDidMount() {
        if (this.props.features) {
            this.setState({loaded: true})
        }
    }

    render() {
        // console.log('loading...', this.state.loaded)

        return(
            <div>
                {this.props.features ?
                    <div className={classes.Cards}>
                    <p className={classes.PieChartTitle}>Feature Report</p>
                    <br/>
                    <div>
                        <p className={classes.FeatureLabel}>{
                            String(this.props.features.featureOne.name).charAt(0).toUpperCase() +
                            String(this.props.features.featureOne.name).slice(1)
                        }</p>
                        <div className={classes.ProgressBar}>
                            <ProgressBar battery={this.props.features.featureOne.positive}/>
                        </div>
                    </div>

                    <div>
                        <p className={classes.FeatureLabel}>{
                            String(this.props.features.featureTwo.name).charAt(0).toUpperCase() +
                            String(this.props.features.featureTwo.name).slice(1)
                        }</p>
                        <div className={classes.ProgressBar}>
                            <ProgressBar battery={this.props.features.featureTwo.positive}/>
                        </div>
                    </div>

                    <div>
                        <p className={classes.FeatureLabel}>{
                            String(this.props.features.featureThree.name).charAt(0).toUpperCase() +
                            String(this.props.features.featureThree.name).slice(1)
                        }</p>
                        <div className={classes.ProgressBar}>
                            <ProgressBar battery={this.props.features.featureThree.positive}/>
                        </div>
                    </div>

                </div>
                : null}
            </div>
        )
    }
}

export default ProgressBars
