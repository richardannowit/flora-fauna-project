import React, { Component } from 'react';
import Category from '../Category/Category';
import Footer from '../Footer/Footer';
import Search from '../Search/Search';
import Social from '../Social/Social';

class Categories extends Component {

    render() {
        return (
            <>
                <Search></Search>
                <Category></Category>
                <Social></Social>
                <Footer></Footer>
            </>
        );
    }
}

export default Categories;