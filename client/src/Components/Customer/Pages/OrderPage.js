import React, { Component } from 'react';
import Order from '../Order/Order';
import { getProductsById } from '../API/Connect-API';
import Nofication from '../Order/nofication/nofication';

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
            },
            status_nofication: "hide",
            nofication: null,
            order_details: {
                food_name: ""
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

    ShowNofication = (check, nofication, order_details) => {
        //send data to nofication component
        if (check) {
            this.setState({
                status_nofication: "",
                nofication: nofication,
                order_details: order_details
            });
        }
    }

    render() {
        return (
            <>
                <Nofication 
                    status_nofication={this.state.status_nofication}
                    order_details={this.state.order_details}
                    nofication={this.state.nofication}
                ></Nofication>
                <Order
                    product={this.state.product}
                    ShowNofication={this.ShowNofication}
                ></Order>
            </>
        );
    }
}

export default OrderPage;