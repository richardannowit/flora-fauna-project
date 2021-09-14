import React, { Component } from 'react';
import './Contract.scss';

class Contract extends Component {

    render() {
        return (
            <div className='contract'>
                <h1>CONTRACT US</h1>
                <p className='description-contract'><i>Let us know your opinion</i></p>
                <div className='contract-input'>
                    <div className='col-information'>
                        <input className='input-contract' type='text' name='name' required placeholder='Your Name *'></input>
                        <input className='input-contract' type='mail' name='mail' required placeholder='Your Email *'></input>
                        <input className='input-contract' type='text' name='Phone' required placeholder='Your Phone *'></input>
                    </div>
                    <div className='col-message'>
                        <textarea className="input-message" placeholder="Your Message *" data-sb-validations="required" data-sb-can-submit="no"></textarea>
                    </div>
                </div>
                <div className='center'>
                    <button className='btn-primary btn-contract' type='submit'>Submit</button>
                </div>
            </div>
        );
    }
}

export default Contract;