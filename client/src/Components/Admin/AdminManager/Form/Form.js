import React from 'react'
import './Form.scss'
import API from '../../../../API/ConnectAPI'
class Form extends React.Component {

    constructor(props) {
        super(props)
        this.state ={
            user: {
                id: '',
                username: '',
                password: '',
                first_name: '',
                last_name: '',
                email:'',
                phone_number: ''
            },
            confirm_password: '',
            isInvalid: 1
        }
        this.error_confirm_password = React.createRef()
        this.error_username = React.createRef()
        this.error_password = React.createRef()
        this.error_email = React.createRef()
        this.error_phone_number = React.createRef()
    }

    async componentDidMount() {
        let {user} = this.state
        if(this.props.data_user)
            user = this.props.data_user
        await this.setState({user})
    }

    HandleHideMemberForm = ()=> {
        this.props.onHideMemberForm()
    }

    handleChange=  async (e) =>{
        const {name, value} = e.target
        const regexp_username = /[a-zA-Z0-9]{7}/
        const regexp_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])([A-Za-z0-9]{10,20})$/
        const regexp_email = /^([A-Za-z0-9]+)@([A-Za-z0-9]+)\.([A-Za-z0-9]+)$/
        const regexp_phone =/^\d{10}$/
        let user = {
            ...this.state.user,
            [name]: value
        }
        await this.setState({user})
        let validUsername = 0, validPassword = 0, validEmail = 0, validPhone = 0, validConfirm = 0
        const existUser = await API('Get', `http://localhost:4000/users?username=${this.state.username}`)
        if(!regexp_username.test(this.state.user.username)){
            if(name === 'username'){
                validUsername = 0
                this.error_username.current.innerHTML = 'Invalid username'
            }
        }else if(existUser.length > 0) {
                validUsername = 0
                this.error_username.current.innerHTML = 'Username is Existed'
            }
        else {
                validUsername = 1
                this.error_username.current.innerHTML = ''
        }

        if(!regexp_password.test(this.state.user.password)){
            if(name === 'password'){
                validPassword = 0
                this.error_password.current.innerHTML = 'Invalid password'
            }
        }else {
            validPassword = 1
            this.error_password.current.innerHTML = ''
        }

        if(!regexp_email.test(this.state.user.email)){
            if(name === 'email'){
                validEmail = 0
                this.error_email.current.innerHTML = 'Invalid email'
            }
        }else {
            validEmail = 1
            this.error_email.current.innerHTML = ''
        }

        if(!regexp_phone.test(this.state.user.phone_number)){
            if(name === 'phone_number'){
                validPhone = 0
                this.error_phone_number.current.innerHTML = 'Invalid phone number'
            }
        }else {
            validPhone = 1
            this.error_phone_number.current.innerHTML = ''
        }

        if(validEmail && validPassword && validPhone && validUsername)
            this.setState({isInvalid: 1})
        else {
            this.setState({isInvalid: 0})
        }
    }

    handleChangeConfirmPassword= async (e)=>{
        const {name, value} = e.target
        await this.setState({[name]: value})
    }

    handleSubmit = async (e)=>{
        e.preventDefault()
        let {method} = this.props
        let url
        let object = {                
            id: '',
            username: '',
            password: '',
            first_name: '',
            last_name: '',
            email:'',
            phone_number: ''
        }
        if(this.state.isInvalid){
            if(this.state.user.password === this.state.confirm_password)
            {
                url= method.match(/POST/i) && 'http://localhost:4000/users'
                const data = await API(method, url, this.state.user)
                this.props.onSubmit(data, method)
                alert('Add Successfully')
                this.setState({user: object})
                this.setState({confirm_password: ''})
            }else {
                this.error_confirm_password.current.innerHTML = 'Password do not match'
            }

        }
    }

    PasswordComponent = ()=>{
        return (
            <>
                <div className='elm'>
                    <p>Password:</p>
                    <input type='password' name='password' required value={this.state.user.password} onChange={this.handleChange} placeholder='The length is from 10-20 chars:  number, upper & lower.'/>
                    <p className='error-message' ref={this.error_password}></p>
                </div>
                <div className='elm'>
                    <p>Confirm Password:</p>
                    <input type='password' name='confirm_password' required value={this.state.confirm_password} onChange={this.handleChangeConfirmPassword} placeholder='Confirm password.'/>
                    <p className='error-message error-message-re-password' ref={this.error_confirm_password}></p>
                </div>
            </>
        )
    }

    render() {
        return (
            <div className='add-member-background'>
                <div className='add-member' style={{height: this.state.user.id !== '' && '350px', margin: this.state.user.id !== '' && '200px auto'}}>
                    <p className='banner'>{this.state.user.id === '' ? 'Add Member' : 'Update Member'}</p>
                    <div className='body'>
                        <form onSubmit={this.handleSubmit} encType='multipart/form-data'>
                            <div className='elm'>
                                <p>Username:</p>
                                <input type='text' name='username' required value={this.state.user.username} onChange={this.handleChange} placeholder='The length is from 10 characters.'/>
                                <p className='error-message' ref={this.error_username}></p>
                            </div>
                            {this.state.user.id === '' && this.PasswordComponent()}
                            <div className='elm'>
                                <p>Phone number:</p>
                                <input type='text' name='phone_number' required value={this.state.user.phone_number} onChange={this.handleChange} placeholder='The number phone is consist of 10-11 numbers.'/>
                                <p className='error-message' ref={this.error_phone_number}></p>
                            </div>
                            <div className='elm'>
                                <p>Email:</p>
                                <input type='text' name='email' required value={this.state.user.email} onChange={this.handleChange} placeholder='example@gmail.com'/>
                                <p className='error-message' ref={this.error_email}></p>
                            </div>
                            <div className='elm elm-col'>
                                <div className='col'>
                                    <p>First name:</p>
                                    <input type='text' name='first_name' required value={this.state.user.first_name} onChange={this.handleChange} placeholder='example: John'/>
                                </div>
                                <div className='col'>
                                    <p>Last name:</p>
                                    <input type='text' name='last_name' required value={this.state.user.last_name} onChange={this.handleChange} placeholder='example: Smith'/>
                                </div>
                            </div>
                            <div className='elm elm-col'>
                                <input type='submit' className='btn' value={this.state.user.id === '' ? 'Add':'Update'} style={{margin:this.state.user.id !== '' && '35px 5px'}}/>
                                <input type='button' className='btn btn-primary' style={{margin:this.state.user.id !== '' && '35px 5px'}} value='Cancel' onClick={this.HandleHideMemberForm}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form