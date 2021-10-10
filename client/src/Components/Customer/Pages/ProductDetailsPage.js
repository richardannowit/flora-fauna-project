import React, { Component } from 'react';
import ProductDetails from '../Product-Details/ProductDetails';

class OrderPage extends Component {
    render() {
        return (
            <>
                <ProductDetails
                ProductDetails={this.props.ProductDetails}
                ></ProductDetails>
            </>
        );
    }
}

export default OrderPage;