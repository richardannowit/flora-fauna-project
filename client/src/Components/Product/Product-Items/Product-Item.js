import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Product-Item.scss'

class ProductItem extends Component {
    render() {
        return (
            <div className="product-menu-box">
                <div className="product-menu-img">
                    <img src={this.props.Information.PathImage} alt="Chicke Hawain Pizza" className="img-responsive img-curve" />
                </div>
                <div className="product-menu-desc">
                    <h4>{this.props.Information.NameProduct}</h4>
                    <p className="product-price">${this.props.Information.Price}</p>
                    <p className="product-detail">{this.props.Information.Description}</p>
                    <br />
                    <Link to="/" className="btn btn-primary">Order Now</Link>
                </div>
            </div>
        );
    }
}



export default ProductItem;