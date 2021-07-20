import React, { Component } from "react";
import classes from "./InputControl.module.css";

import ItemNameOutput from "../RequestData/RequestData";
import Layout from "../Layout/Layout";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class InputControl extends Component {
  state = {
    itemName: "",
    loweCaseItem: "",
    staticName: "",
    matchFound: false,
    buttonClicked: false,
    inputClicked: false,
    requestDataMounted: false,
    itemNamePlaceholder: "Enter item Name",
  };

  onChangeItemName = (e) => {
    // e.preventDefault()
    if (!e.target.value) console.log("Enter a item name");
    this.setState({
      itemName: e.target.value,
    });
    this.runSentimentDataComponent();
  };

  onClickHandler = () => {
    this.setState({ inputClicked: true });
  };
  onButtonClick = (e) => {
    e.preventDefault();

    if (!this.state.itemName) {
      return this.setState({ itemNamePlaceholder: "Please enter a item name" });
    }
    this.setState({
      buttonClicked: !this.state.buttonClicked,
    });
  };

  runSentimentDataComponent = () => {
    return (
      <div>
        <ItemNameOutput name={this.state.itemName} />
      </div>
    );
  };

  render() {
    const element = (
      <FontAwesomeIcon className={classes.SearchIcon} icon={faSearch} />
    );
    return (
      <React.Fragment>
        <Layout>
          <div className={classes.Content}>
            <div>
              <h2 className={classes.Heading}>Search Anything</h2>
              <h3 className={classes.SubHeading}>We Read For You</h3>
            </div>

            <form onSubmit={this.onChangeItemName}>
              {/*<p>Items available: tv, phone </p>*/}
              <input
                type="text"
                name="inputString"
                autoFocus
                required="required"
                placeholder={this.state.itemNamePlaceholder}
                autoComplete="off"
                // name='itemName'
                className={classes.TextInput}
                // defaultValue={this.state.itemName}
                onChange={this.onChangeItemName}
                onClick={this.onClickHandler}
              />

              <button
                className={classes.Button}
                onClick={(e) => this.onButtonClick(e)}
              >
                {element}
              </button>
            </form>

            {this.state.buttonClicked ? this.runSentimentDataComponent() : null}

            {/*{this.runSentimentDataComponent()}*/}
          </div>
        </Layout>
      </React.Fragment>
    );
  }
}

export default InputControl;
