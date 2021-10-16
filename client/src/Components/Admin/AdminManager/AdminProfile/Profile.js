import React from 'react'
import './Profile.scss'
import {useHistory} from 'react-router-dom'
import { deleteUser } from '../../API/ConnectAPI'

export default function Profile(props) {

    const history = useHistory()

    //Delete user
    const handleDelete = async ()=>{
        const bool = window.confirm('Are you sure you want to delete?')
        if(bool){
            const data = await deleteUser(localStorage.getItem('id'), localStorage.getItem('accessToken')) 
            alert(data.message)
            localStorage.removeItem('accessToken')
            history.push('/login')
        }
    }

    //Show user's updated form
    const handleShowUpdateMemberForm = ()=>{
        props.onShowUpdateMemberForm()
    }
    
    //Show  user's changed password form
    const handleShowChangePasswordForm = ()=>{
        props.onShowChangePasswordForm()
    }

    return (
        <div className='admin-profile'>
            <p className='text profile-title'>Login Information</p>
            <p className='text profile-username'>Username: {props.user.username}</p>
            <p className='text profile-name'>Full name: {props.user.first_name + ' ' + props.user.last_name}</p>
            <p className='text profile-phone'>Phone number: {props.user.phone}</p>
            <p className='text profile-phone'>Email: {props.user.email}</p>
            <div className='profile-action'>
                <button className='profile-btn' onClick={handleShowUpdateMemberForm}><i className="fas fa-pen"></i> Update Profile</button>
                <button className='profile-btn' onClick={handleShowChangePasswordForm}><i className="fas fa-pen"></i> Change Password</button>
                <button className='profile-btn profile-btn-delete' onClick={handleDelete}><i className="fas fa-eraser"></i> Delete Account</button>
            </div>
        </div>
    )
}
