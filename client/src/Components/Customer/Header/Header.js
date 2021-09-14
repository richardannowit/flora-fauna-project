import React, { Component } from 'react';
import './Header.scss';
import Menu from './Menu/Menu';

class Header extends Component {


    render() {
        return (
            <section className="navbar">
                <div className="container">
                    <div className="logo">
                        <a href="/" title="Logo">
                            <img src="/Images/Logo/logo.png" alt="Restaurant Logo" className="img-responsive" />
                        </a>
                    </div>
                    <Menu></Menu>
                    <div className="clearfix" />
                </div>
            </section>
        );
    }
}

export default Header;