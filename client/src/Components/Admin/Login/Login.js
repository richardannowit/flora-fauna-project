import React, { useState } from 'react';
import "./Login.scss";
import {userLogin} from '../API/ConnectAPI'
import { useHistory } from 'react-router-dom'

export default function Login(props){
    const [user, setUser] = useState({username:'', password:''})
    let history = useHistory()

    const handleChange = (e)=>{
        const {name, value} = e.target
        let data = user
        data = {
            ...user,
            [name]: value
        }
        setUser(data)
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        const login = await userLogin(user)
        if(login) {
            localStorage.setItem('accessToken', login.data.token)
            history.push('/admin')
        }
    }

    return (
        <>
            <div className="background-login">
                <h1 className="text-center login-header">ONLINE LOGIN FORM</h1>
                <div className="login">
                    <div className="form-login">
                        <h2>LOGIN FORM</h2>
                        <form onSubmit={handleSubmit}>
                            <input className="form-group" type="text" name="username" placeholder="Enter Username" onChange={handleChange}/>
                            <br />
                            <input className="form-group" type="password" name="password" placeholder="Enter Password" onChange={handleChange}/>
                            <br />
                            <input className="submit-login btn-primary" type="submit" name="submit" value="Login" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
