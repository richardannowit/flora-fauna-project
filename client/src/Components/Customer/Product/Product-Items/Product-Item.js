import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Product-Item.scss'

class ProductItem extends Component {

    handleClickProduct = () => {
        this.props.ClickDetails(this.props.Information);
    }

    handleNoImage = (e) => {
        //function run when load image error
        e.target.src = "/Images/Categories/no-image.png"
        e.onerror = null
    }

    ClickOrder = () => {
        //handle order product
        const id_product = this.props.Information.id;
        this.props.HandleOrder(id_product);
    }

    render() {
        return (
            <div className="product-menu-box">
                <div className="product-menu-img">
                    <Link to='/productDetails'
                        onClick={this.handleClickProduct}
                    >
                        <img
                            src={`http://localhost:8000/uploads/${this.props.Information.image_name}`}
                            alt="Chicke Hawain Pizza"
                            className="img-responsive img-curve"
                            onError={e => { this.handleNoImage(e) }}
                        />
                    </Link>
                </div>
                <div className="product-menu-desc">
                    <Link to='/productDetails'
                        onClick={this.handleClickProduct}
                    >
                        <h4>{this.props.Information.food_name}</h4>
                    </Link>
                    <p className="product-price">${this.props.Information.price}</p>
                    <p className="product-detail">{this.props.Information.description}</p>
                    <br />
                    <Link to="/order" onClick={() => {this.ClickOrder()}} className="btn btn-primary">Order Now</Link>
                </div>
            </div>
        );
    }
}



export default ProductItem;