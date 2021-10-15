import React, { Component } from 'react';
import ProductDetails from '../Product-Details/ProductDetails';

class OrderPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product_details: null
        }
    }

    static getDerivedStateFromProps (nextProps) {
        if (!nextProps.ProductDetails) {
            const product_details = localStorage.getItem('product_details');
            if (product_details) {
                //run when reload web
                return ({
                    product_details: JSON.parse(product_details)
                });
            }
        } else {
            const product_details = nextProps.ProductDetails;

            //store data to localstore, beacause when reload web then data on state will be remove
            localStorage.setItem('product_details', JSON.stringify(product_details));

            return ({
                product_details: product_details
            });
        }
    }

    render() {
        return (
            <>
                <ProductDetails
                    ProductDetails={this.state.product_details}
                    HandleOrder={this.props.HandleOrder}
                ></ProductDetails>
            </>
        );
    }
}

export default OrderPage;