import React, { Component } from 'react';
import { getProducts,getProductsByIdCategory } from '../API/Connect-API';
import Product from '../Product/Product';
import Search from '../Search/Search';
class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Products: []
        };
    }

    async componentDidMount() {
        //get list product by id category
        const id_category = this.props.IdCategory;
        if (id_category) {
            const products = await getProductsByIdCategory(id_category);
            this.setState({
                Products: products.data
            });
            //die process
            return;
        }
        //get list product limit 6 element
        const limit = 6;
        const products = await getProducts(limit);
        this.setState({
            Products: products.data
        });
    }

    render() {
        return (
            <>
                <Search
                HandleSearch={this.props.HandleSearch}
                ></Search>
                <Product 
                Products={this.state.Products}
                ClickDetails={this.props.ClickDetails}
                ></Product>
            </>
        );
    }
}

export default Products;