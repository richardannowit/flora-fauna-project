import React, {useState, useRef} from 'react'
import axios from 'axios'
import './UpdateForm.scss'

export default function UpdateForm(props) {

    const [user, setUser] = useState({phone_number: 0, email: '', first_name: '', last_name: ''})
    const error_phone_number = useRef(null)
    const error_email = useRef(null)
    const handleSubmit = ()=>{

    }

    const onHideMemberForm = ()=>{

    }

    const handleChange = ()=>{

    }

    return (
        <div className='update-user-background'>
            <div className='update-user'>
                <p className='banner'>Update User</p>
                <div className='body'>
                    <form onSubmit={handleSubmit} encType='multipart/form-data'>
                        <div className='elm'>
                            <p>Phone number:</p>
                            <input type='text' name='phone_number' required value={user.phone_number} onChange={handleChange} placeholder='The number phone is consist of 10-11 numbers.'/>
                            <p className='error-message' ref={error_phone_number}></p>
                        </div>
                        <div className='elm'>
                            <p>Email:</p>
                            <input type='text' name='email' required value={user.email} onChange={handleChange} placeholder='example@gmail.com'/>
                            <p className='error-message' ref={error_email}></p>
                        </div>
                        <div className='elm elm-col'>
                            <div className='col'>
                                <p>First name:</p>
                                <input type='text' name='first_name' required value={user.first_name} onChange={handleChange} placeholder='example: John'/>
                            </div>
                            <div className='col'>
                                <p>Last name:</p>
                                <input type='text' name='last_name' required value={user.last_name} onChange={handleChange} placeholder='example: Smith'/>
                            </div>
                        </div>
                        <div className='elm elm-col'>
                            <input type='submit' className='btn' value='Update'/>
                            <input type='button' className='btn btn-primary' value='Cancel' onClick={onHideMemberForm}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
