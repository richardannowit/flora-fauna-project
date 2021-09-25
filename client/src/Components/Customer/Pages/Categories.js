import React, { Component } from 'react';
import axios from 'axios';
import Category from '../Category/Category';
import Footer from '../Footer/Footer';
import Search from '../Search/Search';
import Social from '../Social/Social';

class Categories extends Component {

    constructor (props) {
        super (props);
        this.state = {
            Categories: []
        }
    }

    async componentDidMount () {
        //handle categories load in here
        const ResultCategories = await axios.get('http://localhost:8000/categories');
        const categories = ResultCategories.data.data;
        
        //set path image


        this.setState({
            Categories: categories
        });
    }

    render() {
        return (
            <>
                <Search></Search>
                <Category
                Categories={this.state.Categories}
                ClickCategoryItem={this.props.ClickCategoryItem}
                ></Category>
                <Social></Social>
                <Footer></Footer>
            </>
        );
    }
}

export default Categories;