import React, { Component } from 'react';
import './Social.scss';

class Social extends Component {

    render() {
        return (
            <div>
                <section className="social">
                    <div className="container text-center">
                        <ul>
                            <li>
                                <a href="/"><img width="50px" src="/Images/Logo/Logo-facebook.png" alt="Facebook"/></a>
                            </li>
                            <li>
                                <a href="/"><img width="50px" src="/Images/Logo/Logo-Instagram.png" alt="Instagram"/></a>
                            </li>
                            <li>
                                <a href="/"><img width="50px" src="/Images/Logo/Logo-Tiwtter.png" alt="Tiwtter"/></a>
                            </li>
                        </ul>
                    </div>
                </section>

            </div>
        );
    }
}

export default Social;