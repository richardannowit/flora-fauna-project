import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import Product from '../Product/Product';
import Search from '../Search/Search';
import Social from '../Social/Social';

class Products extends Component {

    render() {
        return (
            <>
                <Search></Search>
                <Product></Product>
                <Social></Social>
                <Footer></Footer>
            </>
        );
    }
}

export default Products;