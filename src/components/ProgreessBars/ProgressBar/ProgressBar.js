import classes from './ProgressBar.module.css'
import React, { Component } from "react";

class ProgressBar extends Component{
    // const [style, setStyle] = useState({});

    // setTimeout(() => {
    //     const newStyle = {
    //         opacity: 1,
    //         width: `${props.battery}%`
    //     }
    //
    //     setStyle(newStyle);
    // }, );
    state = {
        newPosStyle: {},
        newNegStyle: {}
    }

    componentDidMount() {
        const posStyleAdd = {
            opacity: 1,
            width: `${this.props.percentage.positive}%`
        }
        const negStyleAdd = {
            opacity: 1,
            width: `${this.props.percentage.negative}%`
        }
        this.setState({newPosStyle: posStyleAdd, newNegStyle: negStyleAdd})
    }

    render() {
        return (
            <React.Fragment>
                <div className={classes.progress}>
                    <div className={classes.positiveProgress} style={this.state.newPosStyle}>
                        <div style={{fontSize:'15px'}}>
                            {this.props.percentage.positive}%
                        </div>
                    </div>

                </div>
                <div className={classes.progress}>
                    <div className={classes.negativeProgress} style={this.state.newNegStyle}>
                        <div style={{fontSize:'15px'}}>
                            {this.props.percentage.negative}%
                        </div>
                    </div>
                </div>
            </React.Fragment>

        )
    }


}

export default ProgressBar
