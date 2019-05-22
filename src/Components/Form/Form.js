import React, { Component } from 'react'

export class Form extends Component {
    constructor(){
        super()

        this.state = {
            url: '',
            name: '',
            price: 0
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleCancel = () => {
        this.formObject.reset()
    }

    render() {
        return (
            <div className="Form">
                <div className="url-container"></div>
                <form className="input-fields">
                    <p>Image URL:</p>
                    <input
                    type="text"
                    name="url"
                    value={this.state.url}
                    onChange={this.handleChange} />
                    <p>Product Name:</p>
                    <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange} />
                    <p> Price:</p>
                    <input
                    type="text"
                    name="price"
                    value={this.state.price}
                    onChange={this.handleChange} />
                </form>
                <div className="buttons">
                    <button onClick={this.handleCancel} className="form-button">Cancel</button>
                    <button className="form-button">Add to Inventory</button>
                </div>
            </div>
        )
    }
}

export default Form
