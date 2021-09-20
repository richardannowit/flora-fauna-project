import React, { Component } from 'react';
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

    LoadDataCategory = () => {
        //Load data from server
            //sample
            this.setState({
                Categories: [
                    {
                        PathImage: "/Images/Categories/burger.jpg",
                        NameCategory: "Burger"
                    },
                    {
                        PathImage: "/Images/Categories/momo.jpg",
                        NameCategory: "Momo"
                    },
                    {
                        PathImage: "/Images/Categories/pizza.jpg",
                        NameCategory: "Pizza"
                    },
                    {
                        PathImage: "/Images/Categories/burger.jpg",
                        NameCategory: "Burger"
                    },
                    {
                        PathImage: "/Images/Categories/momo.jpg",
                        NameCategory: "Momo"
                    },
                    {
                        PathImage: "/Images/Categories/pizza.jpg",
                        NameCategory: "Pizza"
                    },
                    {
                        PathImage: "/Images/Categories/burger.jpg",
                        NameCategory: "Burger"
                    },
                    {
                        PathImage: "/Images/Categories/momo.jpg",
                        NameCategory: "Momo"
                    },
                    {
                        PathImage: "/Images/Categories/pizza.jpg",
                        NameCategory: "Pizza"
                    }
                ]
            });
    }

    componentDidMount () {
        //Load data from server
            //sample
        this.LoadDataCategory();
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