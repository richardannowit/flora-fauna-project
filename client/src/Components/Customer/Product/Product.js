import React, { Component } from 'react';
import { getProducts } from '../API/Connect-API';
import "./Product.scss";
import ProductItem from './Product-Items/Product-Item';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Products: [],
            position: 0
        };
    }

    static getDerivedStateFromProps(nextProps) {
        if (nextProps.Products) {
            //get position
            const position = nextProps.Products.length;
            //load product in category name
            return {
                Products: nextProps.Products,
                position: position
            }
        }
        return { undefined }
    }

    LoadMoreProduct = async () => {
        //function load more product
        const limit = 6;
        const position = this.state.position;
        const list_products = await getProducts(limit, position);

        let new_list_products = this.state.Products;
        new_list_products.push(...list_products.data);

        this.setState({
            Products: new_list_products,
            position: position
        });
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
                    <span className="pink pointer" onClick={this.LoadMoreProduct}>See All Foods</span>
                </p>
            </section>

        );
    }
}

export default Product;