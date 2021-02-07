import React, {Component} from "react";
import classes from './InputControl.module.css';

import ItemNameOutput from '../RequestData/RequestData';
import Layout from '../Layout/Layout';

class InputControl extends Component {
    state = {
        itemName: '',
        staticName: '',
        matchFound: false,
        clicked: false
    }

    onChangeItemName = (e) =>{
        e.preventDefault()
        this.setState({
            itemName: e.target.value
        })
    }

    componentDidMount() {
    }

    onClickHandler = () => {
        this.setState({clicked: true})
    }
    onButtonClick = (e) => {
        console.log('button click')
        if (this.state.itemName) {
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

    runSentimentDataComponent = () => {
        const itemNameCheck = this.state.itemName
        // if(itemNameCheck === 'tv' || itemNameCheck === 'phone' || itemNameCheck === 'laptop' || itemNameCheck === 'HP i7'){

            // return (
            //     <div>
            //         {/*{this.setState({matchFound: true})}*/}
            //         <ItemNameOutput name={this.state.itemName}/>
            //     </div>
            // )
        // }
        // else {
        //     return (
        //         <>
        //             {this.state.clicked ?
        //                 <p className={classes.InputValidation}>Please enter valid item name</p> : null
        //             }
        //         </>
        //
        //     )
        // }

    }

    render() {
        console.log('from input control')
        return (
            <React.Fragment>
                <Layout>
                    <div className={classes.Content}>
                        {/*{!this.state.itemName ?*/}
                        <div>
                            <h2  className={classes.Heading}>Search Anything</h2>
                            <h3 className={classes.SubHeading}>We Read For You</h3>
                        </div>

                        <form onSubmit={this.onChangeItemName}>
                            {/*<p>Items available: tv, phone </p>*/}
                            <input  type="text"
                                    autoFocus
                                    required
                                    placeholder="Enter item Name"
                                // name='itemName'
                                    className={classes.TextInput}
                                // defaultValue={this.state.itemName}
                                    onChange={this.onChangeItemName}
                                    onClick={this.onClickHandler}
                            />

                            <button className={classes.Button} onClick={e => this.onButtonClick(e)}>Search</button>
                            {/*{this.state.clicked ? <p>Clcdfhg</p> : null}*/}
                        </form>
                        {/*<p>{this.state.itemName}</p>*/}
                        {/*{  this.runSentimentDataComponent()}*/}
                        {/*{ this.runSentimentDataComponent}*/}

                        { this.onButtonClick() }
                    </div>
                </Layout>
            </React.Fragment>
        )
    }
};

export default InputControl;
