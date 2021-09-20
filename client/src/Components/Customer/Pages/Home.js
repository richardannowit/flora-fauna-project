import React, { Component } from 'react';
import Search from '../Search/Search';
import Category from '../Category/Category';
import Product from '../Product/Product';
import Social from '../Social/Social';
import Footer from '../Footer/Footer';

class Home extends Component {


    componentDidMount () {
        //handle categories load in here
        //handle products load in here
    }

    render() {
        return (
            <>
                <Search></Search>
                <Category 
                ClickCategoryItem={this.props.ClickCategoryItem}
                ></Category>
                <Product></Product>
                <Social></Social>
                <Footer></Footer>
            </>
        );
    }
}

export default Home;