import React, { Component } from 'react';
import "./Product.scss";
import ProductItem from './Product-Items/Product-Item';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //create sample data
            sample_data: [
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
        };
    }

    render() {
        return (
            <section className="product-menu">
                <div className="container">
                    <h2 className="text-center">Products Menu</h2>
                    {this.state.sample_data.map((Element, Index) => {
                        return (
                            <div className="row" key={Index}>
                                {Element.map((ChildElement, ChildIndex) => {
                                    return (
                                        <ProductItem
                                            key={ChildIndex}
                                            Information={ChildElement}
                                        ></ProductItem>
                                    );
                                })}
                                <div className="clearfix" />
                            </div>
                        );
                    })}
                </div>
                <p className="text-center">
                    <span className="pink">See All Foods</span>
                </p>
            </section>

        );
    }
}

export default Product;