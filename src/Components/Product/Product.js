import React, { Component } from 'react'

export class Product extends Component {
    render() {
        return (
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.price}</p>
                <p>{this.props.url}</p>
            </div>
        )
    }
}

export default Product
