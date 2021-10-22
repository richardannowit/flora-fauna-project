import React, { Component } from 'react';
import Order from '../Order/Order';
import { getProductsById } from '../API/Connect-API';
import Notification from '../Order/notification/notification';

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
            status_notification: "hide",
            notification: null,
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

    ShowNotification = (check, notification, order_details) => {
        //send data to notification component
        if (check) {
            this.setState({
                status_notification: "",
                notification: notification,
                order_details: order_details
            });
        }
    }

    render() {
        return (
            <>
                <Notification 
                    status_notification={this.state.status_notification}
                    order_details={this.state.order_details}
                    notification={this.state.notification}
                ></Notification>
                <Order
                    product={this.state.product}
                    ShowNotification={this.ShowNotification}
                ></Order>
            </>
        );
    }
}

export default OrderPage;