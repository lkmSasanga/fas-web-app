import React, {Component} from 'react';

import classes from './FeatureTwo.module.css';

class FeatureTwo extends Component {
    render() {
        return (
            <div>
                {this.props.comments ?
                    <div>
                        <>
                            <h2 className={classes.FeatureName}>{this.props.comments.featureTwo.name}</h2>
                            <div>
                                <p className={classes.CommentsType}>Positive Feedbacks</p>
                                <div className={classes.Comments}>
                                    <p style={{marginBottom: "3px"}}>{this.props.comments.featureTwo.posComments[0]}</p>
                                    <p>{this.props.comments.featureTwo.posComments[1]}</p>
                                </div>
                            </div>
                            <div>
                                <p className={classes.CommentsType}>Negative Feedbacks</p>
                                <div className={classes.Comments}>
                                    <p style={{marginBottom: "3px"}}>{this.props.comments.featureTwo.negComments[0]}</p>
                                    <p>{this.props.comments.featureTwo.negComments[1]}</p>
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

export default FeatureTwo;
