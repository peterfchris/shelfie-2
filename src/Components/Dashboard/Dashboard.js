import React, { Component } from 'react'
import Product from '../Product/Product'

export class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [],
            url: '',
            name: '',
            price: 0
        }
    }
    render() {
        return (
            <div>
                <div className="product-container">
                    {this.props.products.map(product => {
                        console.log(product)
                        return(
                            <Product
                            key={product.id}
                            url={product.url}
                            name={product.name}
                            price={product.price}
                             /> 
                        )
                    })}
                </div>
            </div>
        ) 
    }
}

export default Dashboard
