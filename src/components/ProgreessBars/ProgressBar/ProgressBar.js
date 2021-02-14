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
        newStyle: {}
    }

    componentDidMount() {
        const styleAdd = {
            opacity: 1,
            width: `${this.props.percentage}%`
        }
        this.setState({newStyle: styleAdd})
    }

    render() {
        return (
            <React.Fragment>
                <div className={classes.progress}>
                    <div className={classes.positiveProgress} style={this.state.newStyle}>
                        <div style={{fontSize:'15px'}}>
                            {this.props.percentage}%
                        </div>
                    </div>

                </div>
                {/*<div className={classes.progress}>*/}
                {/*    <div className={classes.negativeProgress} style={this.state.newStyle}>*/}
                {/*        <div style={{fontSize:'15px'}}>*/}
                {/*            {this.props.battery}%*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </React.Fragment>

        )
    }


}

export default ProgressBar
