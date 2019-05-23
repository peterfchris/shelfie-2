import React, { Component } from 'react'

export class Product extends Component {
    render() {
        return (
            <div className="dashboard-product">
                <p>{this.props.name}<br/>
                {this.props.price}<br/>
                {this.props.url}</p>
            </div>
        )
    }
}

export default Product
