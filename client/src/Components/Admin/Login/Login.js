import React, { useState, useRef } from 'react'
import "./Login.scss";
import {userLogin} from '../API/ConnectAPI'
import { useHistory } from 'react-router-dom'

export default function Login(props){
    const [user, setUser] = useState({username:'', password:''})

    const error_message = useRef(null)

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
            localStorage.setItem('id', login.data.id)
            history.push({pathname:'/admin'})
        }else {
            error_message.current.innerHTML = 'Invalid username or password.'
        }
    }

    return (
        <>
            <div className="background-image-login"/>
            <div className="background-login">
                <div className="login">
                    <div className="form-login">
                        <p className="form-login-title"><img src="/Images/Logo/login.png" alt=""/></p>
                        <form onSubmit={handleSubmit} className="form-submit">
                            <div className="form-group">
                                <input className="form-elm" required type="text" name="username" placeholder="Enter Username" onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <input className="form-elm" required type="password" name="password" placeholder="Enter Password" onChange={handleChange}/>
                                <p className="form-err" ref={error_message}></p>
                            </div>
                            <input className="submit-login btn-primary" type="submit" name="submit" value="Login" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
