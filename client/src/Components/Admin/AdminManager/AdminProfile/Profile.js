import React from 'react'
import './Profile.scss'
class Profile extends React.Component {
    render() {
        return (
            <div className='admin-profile'>
                <p className='text profile-title'>Login Information</p>
                <p className='text profile-username'>Username: {'hee'}</p>
                <p className='text profile-name'>Full name: </p>
                <p className='text profile-phone'>Phone number: </p>
                <p className='text profile-phone'>Email: </p>
                <div className='profile-action'>
                    <button className='profile-btn'><i className="fas fa-pen"></i> Update Profile</button>
                    <button className='profile-btn'><i className="fas fa-pen"></i> Change Password</button>
                    <button className='profile-btn'><i className="fas fa-eraser"></i> Delete Account</button>
                </div>
            </div>
        )
    }
}

export default Profile