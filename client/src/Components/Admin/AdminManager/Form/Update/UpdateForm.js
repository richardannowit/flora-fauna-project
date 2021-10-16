import React from 'react'
import './UpdateForm.scss'
import  {putUser} from '../../../API/ConnectAPI'
class UpdateForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                phone: '',
                last_name: '',
                first_name: '',
                email: '',
            },
            invalid: 0
        }

        this.error_phone = React.createRef()
        this.error_email = React.createRef()
    }

    componentDidMount() {
        this.setState({user: this.props.data_user})
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
        if(!regexp_email.test(this.state.user.email)){
            if(name === 'email'){
                validEmail = 0
                this.error_email.current.innerHTML = 'example@gmail.com'
            }
        }else {
            validEmail = 1
            this.error_email.current.innerHTML = ''
        }

        if(!regexp_phone.test(this.state.user.phone)){
            if(name === 'phone'){
                validPhone = 0
                this.error_phone.current.innerHTML = 'The phone number is consist of 10-11 numbers.'
            }
        }else {
            validPhone = 1
            this.error_phone.current.innerHTML = ''
        }

        if(validEmail && validPhone){
            this.setState({invalid: 1})
        }else{
            this.setState({invalid: 0})
        }
    }

    //Submit form
    handleSubmit = async (e)=>{
        e.preventDefault()
        if(this.state.invalid){
            const put = await putUser(localStorage.getItem('id'), this.state.user, localStorage.getItem('accessToken')) 
            console.log(put.message)
        }
        const user = {
            phone: '',
            last_name: '',
            first_name: '',
            email: '',
        }
        await this.setState({user})

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
                                <input type='text' name='phone' required value={this.state.user.phone} onChange={this.handleChange}/>
                                <p className='error-message' ref={this.error_phone}></p>
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
