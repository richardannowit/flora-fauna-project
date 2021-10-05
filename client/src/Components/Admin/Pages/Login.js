import React, { Component } from 'react';
import LoginComponent from '../Login/Login';
import {Redirect} from 'react-router-dom';
class Login extends Component {

    render() {
        if(localStorage.removeItem('accessToken')){
            return (<Redirect to='/admin'/>)
        }
        return (
            <>
                <LoginComponent></LoginComponent>
            </>
        );
    }
}

export default Login;