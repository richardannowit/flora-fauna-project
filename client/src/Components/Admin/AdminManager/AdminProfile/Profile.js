import React from 'react'
import './Profile.scss'
import cookie from 'react-cookies'
import {useHistory} from 'react-router-dom'

export default function Profile(props) {

    const history = useHistory()

    const handleDelete = ()=>{
        cookie.remove('token')
        history.push('/login')
    }
    return (
        <div className='admin-profile'>
            <p className='text profile-title'>Login Information</p>
            <p className='text profile-username'>Username: {props.user.username}</p>
            <p className='text profile-name'>Full name: {props.user.first_name + ' ' + props.user.last_name}</p>
            <p className='text profile-phone'>Phone number: {props.user.phone}</p>
            <p className='text profile-phone'>Email: {props.user.email}</p>
            <div className='profile-action'>
                <button className='profile-btn'><i className="fas fa-pen"></i> Update Profile</button>
                <button className='profile-btn'><i className="fas fa-pen"></i> Change Password</button>
                <button className='profile-btn profile-btn-delete' onClick={handleDelete}><i className="fas fa-eraser"></i> Delete Account</button>
            </div>
        </div>
    )
}
