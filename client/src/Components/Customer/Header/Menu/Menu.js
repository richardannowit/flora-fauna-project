import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Route } from 'react-router';
import $ from 'jquery';
import './Menu.scss'

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            line: null,
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
            line: line,
            pos: pos,
            wid: wid
        });
        //End Initiate Animation for Menu
    }

    RenderItemMenu = (to, exact, name) => {
        return (
            <Route
                path={to}
                exact={exact}
                children={({ match }) => {
                    return (
                        <li 
                        className={match ? "active" : ""}
                        >
                            <Link
                                to={to}
                            >{name}</Link>
                        </li>
                    );
                }}
            >

            </Route>
        )
    }

    componentDidUpdate() {
        //get attribute for aniamtion
        let nav = $('nav');
        let line = this.state.line;
        let pos = this.state.pos;
        let wid = this.state.wid;
        let active = nav.find('.active');
        let position = active.position();

        if (active.length && pos !== position.left) {
                let width = active.width();

                nav.addClass('animate');

                if (position.left > pos) {
                    line.animate({
                        width: ((position.left - pos) + width)
                    }, 300, () => {
                        line.animate({
                            width: width,
                            left: position.left
                        }, 150, () => {
                            nav.removeClass('animate');
                        })
                    });
                } else {
                    line.animate({
                        left: position.left,
                        width: ((pos - position.left) + wid)
                    }, 300, () => {
                        line.animate({
                            width: width
                        }, 150, () => {
                            nav.removeClass('animate');
                        })
                    })
                }

                this.setState({
                    pos: position.left,
                    wid: width
                });
        }
    }



    render() {
        return (
            <nav className="menu text-right">
                <ul>
                    {this.RenderItemMenu("/contract", false, "Contract")}
                    {this.RenderItemMenu("/products", false, "Foods")}
                    {this.RenderItemMenu("/categories", false, "Categories")}
                    {this.RenderItemMenu("/", true, "Home")}
                    <div className="clearfix"></div>
                </ul>
            </nav>
        );
    }
}

export default Menu;