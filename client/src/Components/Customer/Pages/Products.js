import React, { Component } from 'react';
import axios from 'axios';
import Footer from '../Footer/Footer';
import Product from '../Product/Product';
import Search from '../Search/Search';
import Social from '../Social/Social';

class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Products: []
        };
    }

    async componentDidMount() {
        //handle products load in here
        const ResultProducts = await axios.get('http://localhost:8000/api/foods?limit=6');
        const products = ResultProducts.data.data;

        this.setState({
            Products: products
        });
    }

    static async getDerivedStateFromProps(nextProps) {
        if (nextProps.ClickProductsItem) {
            //Load data
            const ResultProducts = await axios.get('http://localhost:8000/api/foods?limit=6');
            const products = ResultProducts.data.data;

            return {
                Products: products
            };
        }
        if (nextProps.NameCategoryWillLoad) {
            //this method run when click to category
            //load product in category name
            const ResultProducts = await axios.get('http://localhost:8000/api/foods');
            const products = ResultProducts.data.data;

            return {
                Products: products
            };
        }
        return { undefined };
    }

    render() {
        return (
            <>
                <Search></Search>
                <Product Products={this.state.Products}></Product>
                <Social></Social>
                <Footer></Footer>
            </>
        );
    }
}

export default Products;