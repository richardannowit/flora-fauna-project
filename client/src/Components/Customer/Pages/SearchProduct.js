import React, { Component } from 'react';
import { getProductsByName } from '../API/Connect-API';
import Product from '../Product/Product';
import Search from '../Search/Search';

class SearchProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ContentSearch: "",
            Products: []
        };
    }

    async componentDidMount () {
        //run when use function search in order page
        //get list product
        const name_product = this.props.ContentSearch;
        const products = await getProductsByName(name_product);
        this.setState({
            ContentSearch: name_product,
            Products: products.data
        });
    }

    async componentDidUpdate (prevProps) {
        //run when use function search in here
        //get list product
        const name_product = this.props.ContentSearch;
        const products = await getProductsByName(name_product);
        if (prevProps.ContentSearch !== this.props.ContentSearch) {
            this.setState({
                ContentSearch: name_product,
                Products: products.data
            });
        }
    }

    render() {
        return (
            <>
                <Search
                    HandleSearch={this.props.HandleSearch}
                    ContentSearch={this.state.ContentSearch}
                ></Search>
                <Product 
                Products={this.state.Products}
                ClickDetails={this.props.ClickDetails}
                ></Product>
            </>
        );
    }
}

export default SearchProduct;