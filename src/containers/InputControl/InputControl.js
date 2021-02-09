import React, {Component } from "react";
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
        inputClicked: false,
        requestDataMounted: false
    }

    onChangeItemName = (e) =>{
        // e.preventDefault()
        this.setState({
            itemName: e.target.value
        })
        this.runSentimentDataComponent()

    }

    onClickHandler = () => {
        this.setState({inputClicked: true})
    }
    onButtonClick = (e) => {
        e.preventDefault()

        console.log('button click')
        // if (!this.state.buttonClicked) {
            this.setState({
                buttonClicked: !this.state.buttonClicked,
                // buttonClicked: true,
            })
        // }

        // this.runSentimentDataComponent()

        console.log('on button click...', this.state.itemName)
        // this.setState({buttonClicked: false})
    }
    // componentWillUnmount() {
    //     this.setState({buttonClicked: false})
    // }

    runSentimentDataComponent = () => {
        // const itemNameCheck = this.state.itemName
        // if (this.state.itemName) {
        //     this.setState({buttonClicked: false})

            return (
                <div>
                    {/*{this.setState({matchFound: true})}*/}
                    <ItemNameOutput name={this.state.itemName}/>
                    {/*{this.setState({requestDataMounted: true})}*/}
                </div>
            )
        // }
        // else {
        //     return (
        //         <>
        //             {this.state.inputClicked ?
        //                 <p className={classes.InputValidation}>Please enter valid item name</p> : null
        //             }
        //         </>
        //
        //     )
        // }

    }

    // resetState = () => {
    //     this.setState({
    //         itemName: ''.toLowerCase(),
    //         matchFound: false,
    //         buttonClicked: false
    //     })
    // }

    render() {
        // this.setState({buttonClicked: false})
        // if (this.state.requestDataMounted) {
        //     console.log('...request data mounted...')
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

                        {this.state.buttonClicked ? this.runSentimentDataComponent() : null}

                        {/*{this.runSentimentDataComponent()}*/}
                    </div>
                </Layout>
            </React.Fragment>
        )
    }
};

export default InputControl;

