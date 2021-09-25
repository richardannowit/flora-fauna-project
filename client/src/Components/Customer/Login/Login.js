import React, { Component } from 'react';
import "./Login.scss";
import axios from 'axios'
class Login extends Component {

    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (e)=>{
        const {name, value} = this.state
        this.setState({
            [name]: value
        })
    }

    handleSubmit = async  (e)=>{
        e.preventDefault()
        const data = await axios({
            method: 'POST',
            url: 'http://localhost:8000/login',
            data: {username: this.state.username, password: this.state.password}
        }).then(res=>res.data)
        console.log(data)
    }

    render() {
        return (
            <>
                <div className="background-login">
                    <h1 className="text-center login-header">ONLINE LOGIN FORM</h1>
                    <div className="login">
                        <div className="form-login">
                            <h2>LOGIN FORM</h2>
                            <form onSubmit={this.handleSubmit}>
                                <input className="form-group" type="text" name="username" placeholder="Enter Username" onChange={this.handleChange}/>
                                <br />
                                <input className="form-group" type="password" name="password" placeholder="Enter Password" onChange={this.handleChange}/>
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