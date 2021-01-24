import React, {Component} from "react";
import classes from './InputControl.module.css';

import ItemNameOutput from '../RequestData/RequestData';
// import Spinner from '../../components/UI/Spinner/Spinner';

class InputControl extends Component {
    state = {
        itemName: '',
        staticName: '',
        // loading: false
    }

    onChangeItemName = (e) =>{
        e.preventDefault()
        // console.log("target value:",e.target.value)
        this.setState({
            itemName: e.target.value

        })
    }

    // onSubmit = (e) => {
    //     e.preventDefault();
    //
    //     console.log('on submit : ',this.state)
    //
    //     const data = this.state
    //     console.log("Final data is : ",data)
    //     return (<p>Item name is: {this.state.itemName}</p>)
    // }

    componentDidMount() {
        // this.setState({
        //     itemName: ''
        // })
        // return ( <ItemNameOutput name={this.state.itemName}/>)
    }

    runSentimentDataComponent = () => {
        const itemNameCheck = this.state.itemName
        if(itemNameCheck === 'tv' || itemNameCheck === 'phone' || itemNameCheck === 'laptop'){
            // this.setState({staticName: itemNameCheck})
            // console.log('Static name : ' , this.state.staticName)
            return (
                <div>
                    {/*{this.setState({loading: true})}*/}
                    <ItemNameOutput name={this.state.itemName}/>
                </div>
                )
        } else {
            // return <p>Enter 'tv' or 'phone'</p>
            console.log('Please enter valid item')
            return <p className={classes.InputValidation}>Please enter valid item name</p>
        }
    }


    render() {
        // if (this.state.loading) {
        //     const spinner = <Spinner/>
        // }
        return (
            <React.Fragment>
                <div className={classes.Content}>
                    <div>
                        <h2  className={classes.Heading}>Search Anything</h2>
                        <h3 className={classes.SubHeading}>We Read For You</h3>
                    </div>

                    <form onSubmit={this.onChangeItemName}>
                            {/*<p>Items available: tv, phone </p>*/}
                            <input  type="text"
                                    required
                                    placeholder="Enter item Name"
                                    // name='itemName'
                                    className={classes.TextInput}
                                    // defaultValue={this.state.itemName}
                                    onChange={this.onChangeItemName}/>

                        {/*<button className={classes.Button}>Search</button>*/}
                    </form>
                    {/*<p>{this.state.itemName}</p>*/}
                    { this.runSentimentDataComponent() }
                </div>
            </React.Fragment>
        )
    }
};

export default InputControl;
