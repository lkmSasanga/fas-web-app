import React, {Component} from "react";
import classes from "../Charts/DonetChart/DonetChart.module.css";
import ProgressBar from "./ProgressBar/ProgressBar";

class ProgressBars extends Component {
    state = {
        loaded: false,
        capitalizedFeatureOne: '',
        capitalizedFeatureTwo: '',
        capitalizedFeatureThree: ''
    }
    componentDidMount() {
        if (this.props.features) {
            this.setState({loaded: true})
        }
    }

    capitalizeHandler = () => {
        console.log('from progress bars',this.props.features.featureOne.name)

        let featureOne = String(this.props.features.featureOne.name)
        let capitalizedFeatureOne = featureOne.charAt(0).toUpperCase() + featureOne.slice(1)


        const featureTwo = String(this.props.features.featureTwo.name)
        const capitalizedFeatureTwo = featureTwo.charAt(0).toUpperCase() + featureTwo.slice(1)

        const featureThree = String(this.props.features.featureThree.name)
        const capitalizedFeatureThree = featureThree.charAt(0).toUpperCase() + featureThree.slice(1)

        this.setState({
            capitalizedFeatureOne: capitalizedFeatureOne,
            capitalizedFeatureTwo: capitalizedFeatureTwo,
            capitalizedFeatureThree: capitalizedFeatureThree
        })

        console.log('testing..', this.state.capitalizedFeatureOne)
    }

    render() {
        console.log('loading...', this.state.loaded)

        return(
            <div>
                {this.props.features ?
                    <div className={classes.Cards}>
                    <p className={classes.PieChartTitle}>Feature Report</p>
                    <br/>
                    <div>
                        <p className={classes.FeatureLabel}>{this.props.features.featureOne.name}</p>
                        <div className={classes.ProgressBar}>
                            <ProgressBar battery={this.props.features.featureOne.positive}/>
                        </div>
                    </div>

                    <div>
                        <p className={classes.FeatureLabel}>{this.props.features.featureTwo.name}</p>
                        <div className={classes.ProgressBar}>
                            <ProgressBar battery={this.props.features.featureTwo.positive}/>
                        </div>
                    </div>

                    <div>
                        <p className={classes.FeatureLabel}>{this.props.features.featureThree.name}</p>
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
