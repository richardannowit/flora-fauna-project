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
            //load product in category name
            return {
                Products: nextProps.Products
            }
        }
        return { undefined }
    }

    render() {
        return (
            <section className="product-menu">
                <div className="container">
                    <h2 className="text-center">Foods Menu</h2>
                    {this.state.Products.map((Element, Index) => {
                        //render row
                        return (
                            <div className="product-reposive" key={Index}>
                                <ProductItem
                                    key={Index}
                                    Information={Element}
                                    ClickDetails={this.props.ClickDetails}
                                    HandleOrder={this.props.HandleOrder}
                                ></ProductItem>
                            </div>
                        );
                    })}
                </div>
                <div className="clearfix" />
                <p className="text-center">
                    <span className="pink">See All Foods</span>
                </p>
            </section>

        );
    }
}

export default Product;