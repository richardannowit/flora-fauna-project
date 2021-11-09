import React, { Component } from 'react';
import { postMessage } from '../API/Connect-API';
import './Contract.scss';

class Contract extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            message: "",
            error: "",
            error_name: "",
            error_email: "",
            error_phone: "",
            error_message: ""
        };
    }

    HandleInputName = (e) => {
        const name = e.target.value;
        this.setState({
            name: name,
            error_name: ""
        });
    }

    HandleInputEmail = (e) => {
        const email = e.target.value;
        this.setState({
            email: email,
            error_email: ""
        });
    }

    HandleInputPhone = (e) => {
        const phone = e.target.value;
        this.setState({
            phone: phone,
            error_phone: ""
        });
    }

    HandleInputMessage = (e) => {
        const message = e.target.value;
        this.setState({
            message: message,
            error_message: ""
        });
    }

    check_error = () => {
        let result = true;

        //check error
        var error_name
        if (!(this.state.name.length > 0)) {
            error_name = "please fill your name";
            result = false;
        }

        //check error
        var error_phone;
        if (!(/^0\d{9,10}$/.test(this.state.phone))) {
            error_phone = "Please fill valid phone. Eg: 0942222222";
            result = false;
        }

        //check error
        var error_email;
        if (!(/.+@gmail.com/.test(this.state.email))) {
            error_email = "Please fill valid email. Eg: your_name@gmail.cpm";
            result = false;
        }

        //check error
        var error_message
        if (!(this.state.message.length > 0)) {
            error_message = "please fill your message";
            result = false;
        }

        this.setState ({
            error_name: error_name,
            error_phone: error_phone,
            error_email: error_email,
            error_message: error_message
        });

        return result;
    }

    async HandleSubmit (e) {
        e.preventDefault();   

        //check error
        if (!this.check_error()) {
            return;
        }
        
        //set data and submit to server
        const data = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            message: this.state.message
        }
        const result = await postMessage(data);
        if (result) {
            this.props.updateStatusNotification(true);
        } else {
            this.setState({
                error: "submit failed"
            });
        }
    }

    render() {
        return (
            <div className='contract'>
                <h1>CONTACT US</h1>
                <p className='description-contract'><i>Let us know your opinion</i></p>
                <form onSubmit={e => this.HandleSubmit(e)}>
                    <h3 className="text-center error">{this.state.error}</h3>
                    <div className='contract-input'>
                        <div className='col-information'>
                            <input
                                className='input-contract'
                                type='text'
                                name='name'
                                placeholder='Your Name *'
                                onChange={e => this.HandleInputName(e)}
                            ></input>
                             <div className="error format-order">{this.state.error_name}</div>
                            <input
                                className='input-contract'
                                type='email' name='email'
                                placeholder='Your Email *'
                                onChange={e => this.HandleInputEmail(e)}
                            ></input>
                             <div className="error format-order">{this.state.error_email}</div>
                            <input
                                className='input-contract'
                                type='text'
                                name='Phone'
                                placeholder='Your Phone *'
                                onChange={e => this.HandleInputPhone(e)}
                            ></input>
                             <div className="error format-order">{this.state.error_phone}</div>
                        </div>
                        <div className='col-message'>
                            <textarea
                                className="input-message"
                                placeholder="Your Message *"
                                data-sb-validations="required"
                                data-sb-can-submit="no"
                                onChange={e => this.HandleInputMessage(e)}
                            ></textarea>
                             <div className="error format-order">{this.state.error_message}</div>
                        </div>
                    </div>
                    <div className='center'>
                        <input 
                            className='btn-primary btn-contract' 
                            type='submit' 
                            name="submit" 
                            value="Submit"
                        ></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default Contract;