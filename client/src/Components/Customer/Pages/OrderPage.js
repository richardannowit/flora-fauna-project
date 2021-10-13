import React, { Component } from 'react';
import Order from '../Order/Order';
import { getProductsById } from '../API/Connect-API';

class OrderPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            product: {
                id: null,
                food_name: null,
                price: null,
                description: null,
                image_name: null,
                active: null,
                category_id: null,
                category_name: null
            }
        };
    }

    async componentDidMount() {
        //load information of product
        const local_id_product = localStorage.getItem('product');
        if (local_id_product) {
            const product = await getProductsById(local_id_product);
            this.setState({
                product: product.data[0]
            });
            return;
        }
        const id_product = this.props.id_product;
        const product = await getProductsById(id_product);
        this.setState({
            product: product.data[0]
        });
        localStorage.setItem('product', id_product);
    }

    render() {
        return (
            <>
                <Order
                    product={this.state.product}
                ></Order>
            </>
        );
    }
}

export default OrderPage;