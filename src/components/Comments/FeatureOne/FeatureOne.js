import React, {Component} from 'react';

import classes from './FeatureOne.module.css';

class FeatureOne extends Component {
    render() {
        return (
            <div>
                {this.props.comments ?
                    <div>
                        <>
                            <h2 className={classes.FeatureName}>{this.props.comments.featureOne.name}</h2>
                            <div>
                                <p className={classes.CommentsType}>Positive Feedbacks</p>
                                <div className={classes.Comments}>
                                    {this.props.comments.length !== 0 ?
                                        <div>
                                            <p style={{marginBottom: "3px"}}>{this.props.comments.featureOne.posComments[0]}</p>
                                            <p>{this.props.comments.featureOne.posComments[1]}</p>
                                        </div> : null
                                    }

                                </div>
                            </div>
                            <div>
                                <p className={classes.CommentsType}>Negative Feedbacks</p>
                                <div className={classes.Comments}>
                                    {this.props.comments.length !== 0 ?
                                        <div>
                                            <p style={{marginBottom: "3px"}}>{this.props.comments.featureOne.negComments[0]}</p>
                                            <p>{this.props.comments.featureOne.negComments[1]}</p>
                                        </div> : null

                                    }

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

export default FeatureOne;
