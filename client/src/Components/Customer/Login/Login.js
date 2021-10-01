import React, { useState } from 'react';
import "./Login.scss";
import axios from 'axios'
import cookie from 'react-cookies'
import { useHistory } from 'react-router-dom'

export default function Login(props){
    const [user, setUser] = useState({username:'', password:''})
    const [token, setToken] = useState('') 
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
        console.log(user.username, user.password)
        const api = await axios({
            method: 'POST',
            url: 'http://localhost:8000/api/auth/login',
            data: user
        })
        .then(res=>res.data)
        .catch(err=>err.status)
        if(api) {
            cookie.save('token', api.data.token)
            console.log(history)
            setToken(api.data.token)
            history.replace('/admin')
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

// class Login extends Component {

//     constructor(props){
//         super(props)
//         this.state = {
//             user: {
//                 username: '',
//                 password: ''
//             },
//             token: ''
//         }
//     }

//     handleChange = async (e)=>{
//         const {name, value} = e.target
//         let {user}= this.state
//         user = {
//             ...user,
//             [name]: value
//         }
//         await this.setState({user})
//     }

//     handleSubmit = async(e)=>{
//         e.preventDefault()
//         console.log(this.state.user.username, this.state.user.password)
//         const api = await axios({
//             method: 'POST',
//             url: 'http://localhost:8000/api/auth/login',
//             data: this.state.user
//         })
//         .then(res=>res.data)
//         .catch(err=>err.status)
//         if(api) {
//             cookie.save('token', api.data.token)
//             this.setState({token: api.data.token})
//         }
//     }

//     render() {
//         return (
//             <>
//                 <div className="background-login">
//                     <h1 className="text-center login-header">ONLINE LOGIN FORM</h1>
//                     <div className="login">
//                         <div className="form-login">
//                             <h2>LOGIN FORM</h2>
//                             <form onSubmit={this.handleSubmit}>
//                                 <input className="form-group" type="text" name="username" placeholder="Enter Username" onChange={this.handleChange}/>
//                                 <br />
//                                 <input className="form-group" type="password" name="password" placeholder="Enter Password" onChange={this.handleChange}/>
//                                 <br />
//                                 <input className="submit-login btn-primary" type="submit" name="submit" value="Login" />
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </>
//         );
//     }
// }


// export default Login;