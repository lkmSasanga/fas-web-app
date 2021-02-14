import React, {Component} from "react";
// import donutClasses from "../Charts/DonetChart/DonetChart.module.css";
import classes from './ProgressBars.module.css'
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
                    <p className={classes.ChartTitle}>Feature Report</p>
                    <br/>
                    <div>
                        <p className={classes.FeatureLabel}>{
                            String(this.props.features.featureOne.name).charAt(0).toUpperCase() +
                            String(this.props.features.featureOne.name).slice(1)
                        }</p>
                        <div >
                            <div className={classes.ProgressBar}>
                                <ProgressBar percentage={this.props.features.featureOne} />
                            </div>

                        </div>
                    </div>

                    <div>
                        <p className={classes.FeatureLabel}>{
                            String(this.props.features.featureTwo.name).charAt(0).toUpperCase() +
                            String(this.props.features.featureTwo.name).slice(1)
                        }</p>
                        <div className={classes.ProgressBar}>
                            <ProgressBar percentage={this.props.features.featureTwo}/>
                        </div>
                    </div>

                    <div>
                        <p className={classes.FeatureLabel}>{
                            String(this.props.features.featureThree.name).charAt(0).toUpperCase() +
                            String(this.props.features.featureThree.name).slice(1)
                        }</p>
                        <div className={classes.ProgressBar}>
                            <ProgressBar percentage={this.props.features.featureThree}/>
                        </div>
                    </div>

                </div>
                : null}
            </div>
        )
    }
}

export default ProgressBars
