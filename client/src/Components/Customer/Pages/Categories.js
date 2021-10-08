import React, { Component } from 'react';
import { getCategories } from '../API/Connect-API';
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
        const limit = 6;
        const categories = await getCategories(limit);  

        this.setState({
            Categories: categories.data
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