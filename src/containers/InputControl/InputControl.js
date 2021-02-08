import React, {Component, useEffect } from "react";
import classes from './InputControl.module.css';

import ItemNameOutput from '../RequestData/RequestData';
import Layout from '../Layout/Layout';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class InputControl extends Component {
    state = {
        itemName: '',
        loweCaseItem: '',
        staticName: '',
        matchFound: false,
        buttonClicked: false,
        requestDataMounted: false
    }

    onChangeItemName = (e) =>{
        // e.preventDefault()
        this.setState({
            itemName: e.target.value
        })
    }

    // componentShouldUpdate = (nextProps, nextState, nextContext) => {
    //     return nextProps.itemName !== this.state.itemName
    // }

    // componentDidUpdate(prevProps, prevState,snapshot){
    //     if (this.state.buttonClicked && (prevState.itemName !== this.props.itemName) ){
    //         this.setState({itemName: ''})
    //     }
    // }

    onClickHandler = () => {
        this.setState({clicked: true})
    }
    onButtonClick = (e) => {
        e.preventDefault()

        console.log('button click')
        this.setState({
            buttonClicked: true,
            // requestDataMounted: true
        })
        this.runSentimentDataComponent()
        // this.setState({itemName: ''})
        // this.resetState()
        console.log('on button click...', this.state.itemName)
        this.setState({buttonClicked: false})
    }

    runSentimentDataComponent = () => {
        // const itemNameCheck = this.state.itemName
        if (this.state.itemName) {
            // this.setState({buttonClicked: false})

            return (
                <div>
                    {/*{this.setState({matchFound: true})}*/}
                    <ItemNameOutput name={this.state.itemName}/>
                </div>
            )
        }
        else {
            return (
                <>
                    {this.state.clicked ?
                        <p className={classes.InputValidation}>Please enter valid item name</p> : null
                    }
                </>

            )
        }

    }

    resetState = () => {
        this.setState({
            itemName: ''.toLowerCase(),
            matchFound: false,
            buttonClicked: false
        })
    }

    render() {
        // if (this.state.requestDataMounted) {
        //     this.setState({bu})
        // }
        console.log('itemname.......', this.state.itemName)
        const element = <FontAwesomeIcon className={classes.SearchIcon} icon={faSearch} />
        console.log('from input control')
        return (
            <React.Fragment>
                <Layout>
                    <div className={classes.Content}>
                        <div>
                            <h2  className={classes.Heading}>Search Anything</h2>
                            <h3 className={classes.SubHeading}>We Read For You</h3>
                        </div>

                        <form onSubmit={this.onChangeItemName}>
                            {/*<p>Items available: tv, phone </p>*/}
                            <input  type="text"
                                    name="inputString"
                                    autoFocus
                                    required
                                    placeholder="Enter item Name"
                                    autoComplete="off"
                                // name='itemName'
                                    className={classes.TextInput}
                                // defaultValue={this.state.itemName}
                                    onChange={this.onChangeItemName}
                                    onClick={this.onClickHandler}
                            />

                            <button
                                className={classes.Button}
                                onClick={e => this.onButtonClick(e)}
                            >{element}
                            </button>

                        </form>

                        {/*{ this.state.requestDataMounted  ?*/}
                        {/*    <ItemNameOutput name={this.state.itemName}/> : null*/}
                        {/*}*/}
                        {this.runSentimentDataComponent()}
                    </div>
                </Layout>+
            </React.Fragment>
        )
    }
};

export default InputControl;

