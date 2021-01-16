import React, { Component } from 'react';
import axios from 'axios';

class RequestData extends Component {

        state = {
            name: '',
            items: [],
            selectedItem: {},
        };


    componentDidMount(props) {
        const selectedItemName = this.props.name

        // url which is node output the data
        axios.get('https://malindu-fas.herokuapp.com/')
            .then(response => {
                // filtering
                const outputArrayObject = response.data
                const filteredArray = outputArrayObject.find(nameOfItem => nameOfItem.item === selectedItemName)
                console.log(filteredArray)

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
        return (
            <React.Fragment>
                <p>Item: {this.state.selectedItem.item}</p>
                <p>Negative: {this.state.selectedItem.negative}</p>
                <p>Positive: {this.state.selectedItem.positive}</p>
            </React.Fragment>

        )
    }
}

export default RequestData;
