import React, { Component } from 'react';
import "./Product.scss";
import ProductItem from './Product-Items/Product-Item';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Products: [],
        };
    }

    static getDerivedStateFromProps(nextProps) {
        if (nextProps.Products) {
            //this method run when click to category
            
            //load product in category name
            return {
                Products: nextProps.Products
            }
        }
        return {undefined}
    }

    render() {
        return (
            <section className="product-menu">
                <div className="container">
                    <h2 className="text-center">Foods Menu</h2>
                    {this.state.Products.map((Element, Index) => {
                        //render row
                        return (
                            <div className="row" key={Index}>
                                {Element.map((ChildElement, ChildIndex) => {
                                    //render item
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