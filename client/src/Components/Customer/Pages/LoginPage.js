import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Social from '../Social/Social';

class LoginPage extends Component {

    render() {
        return (
            <>
                <Login></Login>
                <Social></Social>
                <Footer></Footer>
            </>
        );
    }
}

export default LoginPage;