import React from "react";
import classes from './Card.module.css'
import Chart from '../../../Charts/DonetChart/DonetChart'
import DonetChart from "../../../Charts/DonetChart/DonetChart";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { f036 } from '@fortawesome/free-solid-svg-icons'

const Card = () => {
  return (
      <>
          <div className={classes.Card}>
              {/*<i className="fas fa-align-left"></i>*/}
              {/*<FontAwesomeIcon icon={f036} />*/}
              <p className={classes.Title}>Feedbacks</p>
              <p className={classes.Value}>10 456</p>
          </div>

          <div className={classes.Card} >
              <p className={classes.Title} >Positive</p>
              <p className={classes.Value} style={{color: "#38e1b0"}}>4 656</p>
          </div>

          <div className={classes.Card}>
              <p className={classes.Title} >Negative</p>
              <p className={classes.Value} style={{color: "#f65a6f"}}>3 456</p>
          </div>

          <div className={classes.Card}>
              <p className={classes.Title}>Features</p>
              <p className={classes.Value} style={{color: "#efa40f"}}>5</p>
          </div>

          <div>
              {/*<Chart/>*/}
              {/*<Chart className="col-md-6" itemDetails={this.state.selectedItem}/>*/}

          </div>

      </>

  )
};

export default Card;
