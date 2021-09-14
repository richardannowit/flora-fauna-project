import React, { Component } from 'react';
import "./Login.scss";

class Login extends Component {

    render() {
        return (
            <>
                <div className="background-login">
                    <h1 className="text-center login-header">ONLINE LOGIN FORM</h1>
                    <div className="login">
                        <div className="form-login">
                            <h2>LOGIN FORM</h2>
                            <form action="true" method="POST">
                                <input className="form-group" type="text" name="username" placeholder="Enter Username" />
                                <br />
                                <input className="form-group" type="password" name="password" placeholder="Enter Password" />
                                <br />
                                <input className="submit-login btn-primary" type="submit" name="submit" value="Login" />
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


export default Login;