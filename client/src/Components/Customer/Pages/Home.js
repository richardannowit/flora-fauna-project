import React, { Component } from 'react';
import { getProducts, getCategories } from '../API/Connect-API';
import Search from '../Search/Search';
import Category from '../Category/Category';
import Product from '../Product/Product';
import Social from '../Social/Social';
import Footer from '../Footer/Footer';

class Home extends Component {

    constructor (props) {
        super(props);
        this.state = {
            Categories: [],
            Products: []
        };
    }

    async componentDidMount () {
        //beacase iamge name not have path, so must add path
        //handle categories load in here
        const limit_categories = 3;
        const categories = await getCategories(limit_categories);  
        //handle products load in here
        const limit_products = 6;
        const products = await getProducts(limit_products);  
        //set path image for categories

        //set path image for producds


        this.setState({
            Categories: categories.data,
            Products: products.data
        });
    }

    render() {
        return (
            <>
                <Search
                HandleSearch={this.props.HandleSearch}
                ></Search>
                <Category 
                ClickCategoryItem={this.props.ClickCategoryItem}
                Categories={this.state.Categories}
                ></Category>
                <Product
                Products={this.state.Products}
                ClickDetails={this.props.ClickDetails}
                ></Product>
            </>
        );
    }
}

export default Home;