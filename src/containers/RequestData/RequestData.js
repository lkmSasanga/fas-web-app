import React, { Component } from 'react';
import axios from 'axios';

import Spinner from '../../components/UI/Spinner/Spinner';

class RequestData extends Component {

        state = {
            name: '',
            items: [],
            selectedItem: {},
            loading: false
        };


    componentDidMount(props) {
        this.setState({loading: true})

        // url which is node output the data

        const selectedItemName = this.props.name

        axios.get('https://malindu-fas.herokuapp.com/')
            .then(response => {
                // filtering
                const outputArrayObject = response.data
                const filteredArray = outputArrayObject.find(nameOfItem => nameOfItem.item === selectedItemName)
                console.log(filteredArray)

                this.setState({loading: false})

                this.setState({
                    items: response.data,
                    selectedItem: filteredArray
                })
                console.log(this.state.selectedItem.positive)
            })

            .catch((error) => {
                console.log(error);
            })

    }

    render(props) {


        let form = (
            <div>
                <p>Item: {this.state.selectedItem.item}</p>
                <p>Negative: {this.state.selectedItem.negative}</p>
                <p>Positive: {this.state.selectedItem.positive}</p>
            </div>
            );

        if (this.state.loading) {
            form = <Spinner/>
        }

        return (
            <React.Fragment>
                {form}
            </React.Fragment>

        )
    }
}

export default RequestData;
