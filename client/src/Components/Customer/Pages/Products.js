import React, { Component } from 'react';
import { getProducts, getProductsByName, getProductsByIdCategory } from '../API/Connect-API';
import Product from '../Product/Product';
import Search from '../Search/Search';
class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ContentSearch: "",
            Products: []
        };
    }

    async componentDidMount() {
        if (!(this.props.IdCategory || this.props.ContentSearch)) {
            //run when reload web
            const name_product = localStorage.getItem('name_product');
            if (name_product) {
                const products = await getProductsByName(name_product);
                this.setState({
                    ContentSearch: name_product,
                    Products: products.data
                });
                //die process
                return;
            }

            const id_category = localStorage.getItem('id_category');
            if (id_category) {
                const products = await getProductsByIdCategory(id_category);
                this.setState({
                    Products: products.data
                });
                //die process
                return;
            }
            return;
        }
        //run when use function search in order page
        //get list product
        const name_product = this.props.ContentSearch;

        //store data to localstore, beacause when reload web then data on state will be remove
        localStorage.setItem('name_product', name_product);
        //because each until store a item
        try {
            localStorage.removeItem("id_category");
        } catch (e) { }

        if (name_product) {
            const products = await getProductsByName(name_product);
            this.setState({
                ContentSearch: name_product,
                Products: products.data
            });
            //die process
            return;
        }

        //get list product by id category
        const id_category = this.props.IdCategory;

        //store data to localstore, beacause when reload web then data on state will be remove
        localStorage.setItem('id_category', id_category);
        //because each until store a item
        try {
            localStorage.removeItem("name_product");
        } catch (e) { }

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

    async componentDidUpdate(prevProps) {
        //run when use function search in here
        //get list product
        const name_product = this.props.ContentSearch;

        const products = await getProductsByName(name_product);
        if (prevProps.ContentSearch !== this.props.ContentSearch) {
            //store data to localstorage

            //store data to localstore, beacause when reload web then data on state will be remove
            localStorage.setItem('name_product', name_product);
            //because each until store a item
            try {
                localStorage.removeItem("id_category");
            } catch (e) { }

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

export default Products;