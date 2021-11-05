import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './notification.scss';

class Notification extends Component {

    render() {
        return (
            <div className={`background ${this.props.status_notification}`}>
                <div className="notification message-notification">
                    <h1 className="banner text-center">
                        Notification
                    </h1>
                    <div className="notification-main text-center">
                        <fieldset>
                            <legend>Message</legend>
                            <p>
                                Thank you contributed your opinion.
                            </p>
                            <p>We will continue improve to bring to for you best services.</p>
                        </fieldset>
                        <div className="group-btn">
                            <Link 
                                className="btn btn-primary"
                                to="/"
                            >Cancel</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Notification;
