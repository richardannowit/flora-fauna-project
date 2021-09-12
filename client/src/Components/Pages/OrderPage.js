import React, { Component } from 'react';
import Order from '../Order/Order';
import Social from '../Social/Social';
import Footer from '../Footer/Footer';

class OrderPage extends Component {
    render() {
        return (
            <>
                <Order></Order>
                <Social></Social>
                <Footer></Footer>
            </>
        );
    }
}

export default OrderPage;