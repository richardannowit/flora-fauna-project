import React, { Component } from 'react';
import ProductDetails from '../Product-Details/ProductDetails';
import Social from '../Social/Social';
import Footer from '../Footer/Footer';

class OrderPage extends Component {
    render() {
        return (
            <>
                <ProductDetails></ProductDetails>
                <Social></Social>
                <Footer></Footer>
            </>
        );
    }
}

export default OrderPage;