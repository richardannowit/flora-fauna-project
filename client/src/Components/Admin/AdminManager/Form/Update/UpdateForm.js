import React from 'react'
import axios from 'axios'
import './UpdateForm.scss'

class UpdateForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                phone_number: '',
                last_name: '',
                first_name: '',
                last_name: '',
                email: '',
            },
            invalid: 0
        }

        this.error_phone_number = React.createRef()
        this.error_email = React.createRef()
    }

    componentDidMount() {
        this.setState({user: this.props.data_user})
    }

    //Submit form
    handleSubmit = (e)=>{
        e.preventDefault()
    }

    //Hide updated form
    onHideMemberForm = ()=>{
        this.props.onHideMemberForm()
    }

    //Update input items
    handleChange = async (e)=>{
        const {name, value} = e.target
        const regexp_email = /^([A-Za-z0-9.]+)@([A-Za-z0-9]+)\.([A-Za-z0-9]+)$/
        const regexp_phone =/^\d{10,11}$/
        let validEmail = 0, validPhone = 0
        await this.setState(pre=>({user: {...pre.user, [name]: value}}))
        console.log(this.state.user.phone_number)
        if(!regexp_email.test(this.state.user.email)){
            if(name === 'email'){
                validEmail = 0
                this.error_email.current.innerHTML = 'example@gmail.com'
            }
        }else {
            validEmail = 1
            this.error_email.current.innerHTML = ''
        }

        if(!regexp_phone.test(this.state.user.phone_number)){
            if(name === 'phone_number'){
                validPhone = 0
                this.error_phone_number.current.innerHTML = 'The number phone is consist of 10-11 numbers.'
            }
        }else {
            validPhone = 1
            this.error_phone_number.current.innerHTML = ''
        }

        if(validEmail && validPhone){
            this.setState({invalid: 0})
        }else{
            this.setState({invalid: 1})
        }
    }

    render(){
        return (
            <div className='update-user-background'>
                <div className='update-user'>
                    <p className='banner'>Update User</p>
                    <div className='body'>
                        <form onSubmit={this.handleSubmit} encType='multipart/form-data'>
                            <div className='elm'>
                                <p>Phone number:</p>
                                <input type='text' name='phone_number' required value={this.state.user.phone_number} onChange={this.handleChange}/>
                                <p className='error-message' ref={this.error_phone_number}></p>
                            </div>
                            <div className='elm'>
                                <p>Email:</p>
                                <input type='text' name='email' required value={this.state.user.email} onChange={this.handleChange}/>
                                <p className='error-message' ref={this.error_email}></p>
                            </div>
                            <div className='elm elm-col'>
                                <div className='col'>
                                    <p>First name:</p>
                                    <input type='text' name='first_name' required value={this.state.user.first_name} onChange={this.handleChange}/>
                                </div>
                                <div className='col'>
                                    <p>Last name:</p>
                                    <input type='text' name='last_name' required value={this.state.user.last_name} onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className='elm elm-col'>
                                <input type='submit' className='btn' value='Update'/>
                                <input type='button' className='btn btn-primary' value='Cancel' onClick={this.onHideMemberForm}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateForm
