import React, { Component } from 'react';
import axios from 'axios';
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
        const ResultCategories = await axios.get('http://localhost:8000/api/categories?limit=3');
        const categories = ResultCategories.data.data;
        //handle products load in here
        const ResultProducts = await axios.get('http://localhost:8000/api/foods?limit=6');
        const products = ResultProducts.data.data;
        //set path image for categories

        //set path image for producds


        this.setState({
            Categories: categories,
            Products: products
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
                ></Product>
                <Social></Social>
                <Footer></Footer>
            </>
        );
    }
}

export default Home;