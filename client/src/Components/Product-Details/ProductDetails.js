import React, { Component } from 'react';
import './ProductDetails.scss';

class ProductDetails extends Component {
    render() {
        return (
            <>
                <section className="product-details">
                    <div className="container">
                        <h2 className="text-center text-white">Food Details</h2>
                        <div className='details'>
                            <div className='col-img'>
                                <img src="/Images/Products/menu-burger.jpg" alt="Chicke Hawain Pizza" className="img-curve" />
                            </div>
                            <div className='col-information'>
                                <h3 className='center'>Buger</h3>
                                <br></br>
                                <p><b>Category:</b> Burger</p>
                                <br></br>
                                <p><b>Price:</b> $10.00</p>
                                <br></br>
                                <p><b>Description:</b> A hamburger (or burger for short) is a food, typically considered a sandwich, consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried, grilled, smoked or flame broiled.
                                A hamburger (or burger for short) is a food, typically considered a sandwich, consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried, grilled, smoked or flame broiled.
                                A hamburger (or burger for short) is a food, typically considered a sandwich, consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried, grilled, smoked or flame broiled.
                                A hamburger (or burger for short) is a food, typically considered a sandwich, consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried, grilled, smoked or flame broiled.
                                </p>
                                <br></br>
                                <div className='center'>
                                    <button className='btn-primary btn-contract' type='submit'>Order Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default ProductDetails;
