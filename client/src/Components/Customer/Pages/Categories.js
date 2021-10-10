import React, { Component } from 'react';
import { getCategories } from '../API/Connect-API';
import Category from '../Category/Category';
import Search from '../Search/Search';

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
                <Search
                HandleSearch={this.props.HandleSearch}
                ></Search>
                <Category
                Categories={this.state.Categories}
                ClickCategoryItem={this.props.ClickCategoryItem}
                ></Category>
            </>
        );
    }
}

export default Categories;