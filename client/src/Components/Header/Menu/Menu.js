import React, { Component } from 'react';
import {Link} from "react-router-dom";
import $ from 'jquery';
import './Menu.scss'

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nav: null,
            line: null,
            active: null,
            pos: null,
            wid: null
        }
    }

    componentDidMount() {
        //Initiate Aniamtion for Menu
        var nav = $('nav');
        var line = $('<div />').addClass('line');

        line.appendTo(nav);

        var active = nav.find('.active');
        var pos = 0;
        var wid = 0;

        if (active.length) {
            pos = active.position().left;
            wid = active.width();
            line.css({
                left: pos,
                width: wid
            });
        }
        //store attribute to state
        this.setState({
            nav: nav,
            line: line,
            active: active,
            pos: pos,
            wid: wid
        });
        //End Initiate Animation for Menu
    }

    AnimationClickTabItem(e) {
        //get attribute for aniamtion
        let nav = this.state.nav;
        let line = this.state.line;
        let pos = this.state.pos;
        let wid = this.state.wid;
        //Animation for Menu
        nav.find('ul li a').hover(function (e) {
            e.preventDefault();
            if (!$(this).parent().hasClass('active') && !nav.hasClass('animate')) {

                nav.addClass('animate');

                var _this = $(this);

                nav.find('ul li').removeClass('active');

                var position = _this.parent().position();
                var width = _this.parent().width();

                if (position.left >= pos) {
                    line.animate({
                        width: ((position.left - pos) + width)
                    }, 300, function () {
                        line.animate({
                            width: width,
                            left: position.left
                        }, 150, function () {
                            nav.removeClass('animate');
                        });
                        _this.parent().addClass('active');
                    });
                } else {
                    line.animate({
                        left: position.left,
                        width: ((pos - position.left) + wid)
                    }, 300, function () {
                        line.animate({
                            width: width
                        }, 150, function () {
                            nav.removeClass('animate');
                        });
                        _this.parent().addClass('active');
                    });
                }

                pos = position.left;
                wid = width;
            }
        });
    }

    render() {
        return (
            <nav className="menu text-right">
                <ul>
                    <li className="active">
                        <Link to="/"
                            onMouseEnter={() => this.AnimationClickTabItem()}
                        >Home</Link></li>
                    <li><Link to="/categories" onMouseEnter={(e) => this.AnimationClickTabItem(e)}>Catagories</Link></li>
                    <li><Link to="/products" onMouseEnter={(e) => this.AnimationClickTabItem(e)}>Food</Link></li>
                    <li><Link to="/contract" onMouseEnter={(e) => this.AnimationClickTabItem(e)}>Contract</Link></li>
                    <li><Link to="/login" onMouseEnter={(e) => this.AnimationClickTabItem(e)}>Login</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Menu;