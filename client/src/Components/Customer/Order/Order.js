import React, { Component } from 'react';
import './Order.scss';

class Order extends Component {

    constructor (props) {
        super(props);

        this.state = {
            product: null,
            total: 0,
            qty: 1
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        //update state when have new props
        const product = nextProps.product;
        if (product !== prevState.product) {
            return ({
                product: product
            });
        }
        return {undefined};
    }

    handleNoImage = (e) => {
        //function run when load image error
        e.target.src = "/Images/Categories/no-image.png"
        e.onerror = null
    }

    render() {
        return (
            <section className="product-order">
                <div className="container">
                    <h2 className="text-center text-white">Fill this form to confirm your order</h2>
                    <form action="true" className="order" method="POST">
                        <fieldset>
                            <legend>Selected Food</legend>
                            <div className="product-menu-img">
                                <img 
                                    src={this.state.product.image_name} 
                                    alt={this.state.product.food_name} 
                                    onError={e => {this.handleNoImage(e)}}
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
                                        <p className="product-price" id="rt"> $11</p>
                                    </div>
                                </div>
                                <div className="order-label">Quantity</div>
                                <input 
                                    type="number" 
                                    id="ipn" 
                                    name="qty" 
                                    className="input-responsive" 
                                    defaultValue={1} 
                                    required />
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>Delivery Details</legend>
                            <div className="order-label">Name</div>
                            <input type="text"
                                name="name"
                                placeholder="E.g. Mai Trong Nhan" 
                                className="input-responsive"
                                required />
                            <div className="order-label">Phone Number</div>
                            <input 
                                type="tel" 
                                name="contact" 
                                placeholder="E.g. 9843xxxxxx" 
                                className="input-responsive" 
                                pattern="0[0-9]{9}" 
                                required />
                            <div className="order-label">Email</div>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="E.g. Maitrongnhan@gmail.com" 
                                className="input-responsive" 
                                required />
                            <div className="order-label">Address</div>
                            <textarea 
                                name="address" 
                                rows={10} 
                                placeholder="E.g. Street, City, Country" 
                                className="input-responsive" 
                                required 
                                defaultValue={""} />
                            <input type="submit" name="submit" value="Confirm Order" className="btn btn-primary" />
                        </fieldset>
                    </form>
                </div>
            </section>
        );
    }
}

export default Order;