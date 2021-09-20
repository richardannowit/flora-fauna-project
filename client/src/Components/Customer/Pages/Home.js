import React, { Component } from 'react';
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

    componentDidMount () {
        //handle categories load in here
        //handle products load in here
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
                }
            ],
            Products: [
                [
                    {
                        PathImage: "/Images/Products/menu-burger.jpg",
                        NameProduct: "Burger",
                        Price: 10.00,
                        Description: "A hamburger (also burger for short) is a food, typically considered a sandwich, consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried, grilled, smoked or flame broiled."
                    },
                    {
                        PathImage: "/Images/Products/menu-momo.jpg",
                        NameProduct: "Momo",
                        Price: 20.00,
                        Description: "Momo is a type of steamed dumpling with some form of filling. Momo has become a traditional delicacy in Nepal, Tibet and among the Nepalese and Tibetan communities in Bhutan"
                    }
                ],
                [
                    {
                        PathImage: "/Images/Products/menu-pizza.jpg",
                        NameProduct: "Pizza",
                        Price: 30.00,
                        Description: "Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other"

                    },
                    {
                        PathImage: "/Images/Products/menu-burger.jpg",
                        NameProduct: "Burger",
                        Price: 40.00,
                        Description: "A hamburger (also burger for short) is a food, typically considered a sandwich."
                    }
                ],
                [
                    {
                        PathImage: "/Images/Products/menu-momo.jpg",
                        NameProduct: "Momo",
                        Price: 50.00,
                        Description: "Momo is a type of steamed dumpling with some form of filling."
                    },
                    {
                        PathImage: "/Images/Products/menu-pizza.jpg",
                        NameProduct: "Pizza",
                        Price: 60.00,
                        Description: "Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped."
                    }
                ]
            ]
        });
    }

    render() {
        return (
            <>
                <Search></Search>
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