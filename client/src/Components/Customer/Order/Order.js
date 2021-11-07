import React, { Component } from 'react';
import { postOrder } from '../API/Connect-API';
import './Order.scss';

class Order extends Component {

    constructor(props) {
        super(props);

        this.state = {
            product: null,
            total: 0,
            qty: 1,
            customer_name: "",
            customer_phone_number: "",
            customer_email: "",
            customer_address: "",
            classDeleteQty: "disable-button",
            message: ""
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        //update state when have new props
        const product = nextProps.product;
        //update total
        const total = product.price;
        if (product !== prevState.product) {
            return ({
                product: product,
                total: total
            });
        }
        return { undefined };
    }

    handleNoImage = (e) => {
        //function run when load image error
        e.target.src = "/Images/Categories/no-image.png"
        e.onerror = null
    }

    HandleQuality = (e) => {
        //get qty
        let qty = e.target.value;
        try {
            qty = parseInt(qty);
            if (isNaN(qty)) {
                return;
            }
        } catch (e) {
            return;
        }

        //update total
        const price = this.state.product.price;
        const total = qty * price;

        this.setState({
            qty: qty,
            total: total
        });
    }

    HandleClickBtnQuality = (key) => {
        let qty = this.state.qty;
        let total = this.state.total;
        const price = this.state.product.price;
        if (key) {
            //add qty 1 unit
            qty++;
            total = qty * price;
            this.setState({
                qty: qty,
                total: total,
                classDeleteQty: "enable-button"
            });
            return;
        }
        //delete qty 1 unit
        if (qty === 1) {
            return;
        }
        qty--;
        const classDeleteQty = (qty === 1) ? "disable-button" : "enable-button";
        total = qty * price;
        this.setState({
            qty: qty,
            total: total,
            classDeleteQty: classDeleteQty
        });
    }

    HandleInputName = (e) => {
        const customer_name = e.target.value;
        this.setState({
            customer_name: customer_name
        });
    }

    HandleInputPhone = (e) => {
        const customer_phone_number = e.target.value;
        this.setState({
            customer_phone_number: customer_phone_number
        });
    }

    HandleInputEmail = (e) => {
        const customer_email = e.target.value;
        this.setState({
            customer_email: customer_email
        });
    }

    HandleInputAddress = (e) => {
        const customer_address = e.target.value;
        this.setState({
            customer_address: customer_address
        });
    }

    async HandleSubmit(e) {
        e.preventDefault();
        //set data
        const food_id = this.state.product.id;
        const quantity = this.state.qty;
        const customer_name = this.state.customer_name;
        const customer_phone_number = this.state.customer_phone_number;
        const customer_email = this.state.customer_email;
        const customer_address = this.state.customer_address;
        let data = {
            food_id: food_id,
            quantity: quantity,
            customer_name: customer_name,
            customer_phone_number: customer_phone_number,
            customer_email: customer_email,
            customer_address: customer_address
        }
        const result = await postOrder(data);
        if (result) {
            //set data notification
            data['image_name'] = this.state.product.image_name;
            data['food_name'] = this.state.product.food_name;
            data['total'] = this.state.total;
            this.props.ShowNotification(true,"Order Successfully", data);
        } else {
            this.setState({
                message: "Order failed"
            });
        }
    }

    render() {
        return (
            <section className="product-order">
                <div className="container">
                    <h2 className="text-center text-white">Fill this form to confirm your order</h2>
                    <form className="order" onSubmit={e => this.HandleSubmit(e)}>
                        <h3 className="text-center error">{this.state.message}</h3>
                        <fieldset>
                            <legend>Selected Food</legend>
                            <div className="product-menu-img">
                                <img
                                    src={`http://localhost:8000/uploads/${this.state.product.image_name}`}
                                    alt={this.state.product.food_name}
                                    onError={e => { this.handleNoImage(e) }}
                                    className="img-responsive img-curve" />
                            </div>
                            <div className="product-menu-desc">
                                <div className="row">
                                    <div className="clearfix">
                                        <h3>
                                            {this.state.product.food_name}
                                        </h3>
                                        <p className="product-price" id="price-food">
                                            {this.state.product.price}
                                        </p>
                                    </div>
                                    <div className="clearfix total-container">
                                        <h3>Total</h3>
                                        <p className="product-price" id="rt"> ${this.state.total}</p>
                                    </div>
                                </div>
                                <div className="order-label">Quantity</div>
                                <div className="format-quality">
                                    <div
                                        className={`btn-update-qty ${this.state.classDeleteQty}`}
                                        onClick={() => { this.HandleClickBtnQuality(false) }}
                                    >
                                        <font size="+2">-</font>
                                    </div>
                                    <input
                                        type="text"
                                        id="ipn"
                                        value={this.state.qty}
                                        onChange={e => this.HandleQuality(e)}
                                        required
                                    ></input>
                                    <div
                                        className="btn-update-qty enable-button"
                                        onClick={() => { this.HandleClickBtnQuality(true) }}
                                    >
                                        <font size="+2">+</font>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>Delivery Details</legend>
                            <div className="order-label">Name</div>
                            <input type="text"
                                name="name"
                                placeholder="E.g. Mai Trong Nhan"
                                className="input-responsive"
                                value={this.state.customer_name}
                                onChange={e => this.HandleInputName(e)}
                                required />
                            <div className="order-label">Phone Number</div>
                            <input
                                type="tel"
                                name="contact"
                                placeholder="E.g. 9843xxxxxx"
                                className="input-responsive"
                                pattern="0[0-9]{9}"
                                value={this.state.customer_phone_number}
                                onChange={e => this.HandleInputPhone(e)}
                                required />
                            <div className="order-label">Email</div>
                            <input
                                type="email"
                                name="email"
                                placeholder="E.g. Maitrongnhan@gmail.com"
                                className="input-responsive"
                                value={this.state.customer_email}
                                onChange={e => this.HandleInputEmail(e)}
                                required />
                            <div className="order-label">Address</div>
                            <textarea
                                name="address"
                                rows={10}
                                placeholder="E.g. Street, City, Country"
                                className="input-responsive"
                                value={this.state.customer_address}
                                onChange={e => this.HandleInputAddress(e)}
                                required
                            />
                            <input
                                    name="submit"
                                    type="submit"
                                    value="Confirm Order"
                                    className="btn btn-primary"
                            />
                        </fieldset>
                    </form>
                </div>
            </section>
        );
    }
}

export default Order;