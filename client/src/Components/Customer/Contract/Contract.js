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
            error: ""
        };
    }

    HandleInputName = (e) => {
        const name = e.target.value;
        this.setState({
            name: name
        });
    }

    HandleInputEmail = (e) => {
        const email = e.target.value;
        this.setState({
            email: email
        });
    }

    HandleInputPhone = (e) => {
        const phone = e.target.value;
        this.setState({
            phone: phone
        });
    }

    HandleInputMessage = (e) => {
        const message = e.target.value;
        this.setState({
            message: message
        });
    }

    async HandleSubmit (e) {
        e.preventDefault();   
        
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
                <h1>CONTRACT US</h1>
                <p className='description-contract'><i>Let us know your opinion</i></p>
                <form onSubmit={e => this.HandleSubmit(e)}>
                    <h3 className="text-center error">{this.state.error}</h3>
                    <div className='contract-input'>
                        <div className='col-information'>
                            <input
                                className='input-contract'
                                type='text'
                                name='name'
                                required
                                placeholder='Your Name *'
                                onChange={e => this.HandleInputName(e)}
                            ></input>
                            <input
                                className='input-contract'
                                type='email' name='email'
                                required
                                placeholder='Your Email *'
                                onChange={e => this.HandleInputEmail(e)}
                            ></input>
                            <input
                                className='input-contract'
                                type='text'
                                name='Phone'
                                required
                                placeholder='Your Phone *'
                                pattern="0[0-9]{9}"
                                onChange={e => this.HandleInputPhone(e)}
                            ></input>
                        </div>
                        <div className='col-message'>
                            <textarea
                                className="input-message"
                                placeholder="Your Message *"
                                data-sb-validations="required"
                                data-sb-can-submit="no"
                                required
                                onChange={e => this.HandleInputMessage(e)}
                            ></textarea>
                        </div>
                    </div>
                    <div className='center'>
                        <input 
                            className='btn-primary btn-contract' 
                            type='submit' 
                            name="submit" 
                            value="submit"
                        ></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default Contract;