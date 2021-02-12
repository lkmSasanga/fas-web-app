import React, { Component } from 'react';
import axios from 'axios';

import Spinner from '../../components/UI/Spinner/Spinner';
import DonetChart from '../../components/Charts/DonetChart/DonetChart';
import Cards from '../../components/Charts/Cards/Cards';

class RequestData extends Component {

        state = {
            name: '',
            items: [],
            selectedItem: '',
            loading: false,
            showChart: false,
            featuresArray: [],
            itemNotFound: false
        };

    componentDidMount() {
        console.log('....request data mounted...')
        this.setState({loading: true})
        console.log('...from request data.....', this.props.name)
        // url which is node output the data
        // const selectedItemName = this.props.name
        this.setState({selectedItem: this.props.name})

        axios.get('https://malindu-fas.herokuapp.com/sentiment')
            .then(response => {
                // filtering
                const outputArrayObject = response.data

                const filteredArray = outputArrayObject.find(nameOfItem => nameOfItem.item === this.state.selectedItem.toLowerCase())
                console.log(filteredArray)
                if (filteredArray) {
                    this.setState({loading: false, showChart: true})
                    // const runChart = () => {return }
                    this.setState({
                        items: response.data,
                        selectedItem: filteredArray,
                    })
                    console.log(this.state.selectedItem.name)
                } else {
                    this.setState({loading: false, showChart: false, itemNotFound: true})
                    console.log('item not found')
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    extractFeatures = () => {
        // if (this.state.loading) {
            for (let feature in this.props.itemDetails.features) {
                this.state.featuresArray.push({
                    name: this.state.selectedItem.features[feature].name,
                    pos: this.state.selectedItem.features[feature].positive,
                    neg: this.state.selectedItem.features[feature].negative
                })
            }
            // console.log('fetures array ', this.state.selectedItem.features[0])
            // console.log('fetures ....... ', this.state.featuresArray)

        // }
    }

    render() {
        let form = null

        if (this.state.loading) {
            form = <Spinner/>
        } else if(!this.state.loading && this.state.showChart){
            form = (
                <div>
                    <br/>
                    <Cards itemDetails={this.state.selectedItem}/>
                    <DonetChart className="col-md-6" itemDetails={this.state.selectedItem}/>
                </div>
            );
        }

        return (
            <React.Fragment>
                {form}
                <br/>

                { this.state.itemNotFound ?
                    <div className="">
                       <p>Sorry!.. This item currently unavailable!</p>
                    </div> : null
                }

            </React.Fragment>
        )
    }
}

export default RequestData;
