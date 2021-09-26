import React, { Component } from 'react';
import './Order.scss';

class Order extends Component {
    render() {
        return (
            <section className="product-order">
                <div className="container">
                    <h2 className="text-center text-white">Fill this form to confirm your order</h2>
                    <form action="true" className="order" method="POST">
                        <fieldset>
                            <legend>Selected Food</legend>
                            <div className="product-menu-img">
                                <img src="/Images/Products/menu-burger.jpg" alt="Chicke Hawain Pizza" className="img-responsive img-curve" />
                            </div>
                            <div className="product-menu-desc">
                                <div className="row">
                                    <div className="clearfix">
                                        <h3>
                                            Product
                                        </h3>
                                        <p className="product-price">
                                            $100.00
                                        </p>
                                        <input type="hidden" name="food" defaultValue="Product" />
                                        <input type="hidden" id="pr" name="price" defaultValue={100} />
                                    </div>
                                    <div className="clearfix total-container">
                                        <h3>Total</h3>
                                        <p className="product-price" id="rt"> $11</p>
                                    </div>
                                </div>
                                <div className="order-label">Quantity</div>
                                <input type="number" id="ipn" name="qty" className="input-responsive" defaultValue={1} required />
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>Delivery Details</legend>
                            <div className="order-label">Phone Number</div>
                            <input type="tel" name="contact" placeholder="E.g. 9843xxxxxx" className="input-responsive" required />
                            <div className="order-label">Name</div>
                            <input type="email" name="name" placeholder="E.g. Mai Trong Nhan" className="input-responsive" required />
                            <div className="order-label">Email</div>
                            <input type="email" name="email" placeholder="E.g. Maitrongnhan@gmail.com" className="input-responsive" required />
                            <div className="order-label">Address</div>
                            <textarea name="address" rows={10} placeholder="E.g. Street, City, Country" className="input-responsive" required defaultValue={""} />
                            <input type="submit" name="submit" value="Confirm Order" className="btn btn-primary" />
                        </fieldset>
                    </form>
                </div>
            </section>
        );
    }
}

export default Order;