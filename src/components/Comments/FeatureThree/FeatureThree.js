import React, {Component} from 'react';

import classes from './FeatureThree.module.css';

class FeatureThree extends Component {
    render() {
        return (
            <div>
                {this.props.comments ?
                    <div>
                        <>
                            <h2 className={classes.FeatureName}>{this.props.comments.featureThree.name}</h2>
                            <div>
                                <p className={classes.CommentsType}>Positive Feedbacks</p>
                                <div className={classes.Comments}>
                                    <p style={{marginBottom: "3px"}}>{this.props.comments.featureOne.posComments[0]}</p>
                                    <p>{this.props.comments.featureOne.posComments[1]}</p>
                                </div>
                            </div>
                            <div>
                                <p className={classes.CommentsType}>Negative Feedbacks</p>
                                <div className={classes.Comments}>
                                    <p style={{marginBottom: "3px"}}>{this.props.comments.featureOne.negComments[0]}</p>
                                    <p>{this.props.comments.featureOne.negComments[1]}</p>
                                </div>
                            </div>
                        </>

                    </div>
                    : null
                }
            </div>
        )
    }

}

export default FeatureThree;
