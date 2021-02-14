import React, {Component} from 'react';

import classes from './NegComments.module.css';

class NegComments extends Component {
    render() {
        return (
            <div>
                {this.props ?
                    <div>
                        <h2 className={classes.FeatureName}>{this.props.comments.featureOne.name}</h2>
                        <p className={classes.CommentsType}>Negative Feedbacks</p>
                        <div className={classes.Comments}>
                            <p>{this.props.comments.featureOne.negComments[0]}</p>
                            <p>{this.props.comments.featureOne.negComments[1]}</p>
                        </div>

                    </div>
                    : null
                }
            </div>
        )
    }

}

export default NegComments;
