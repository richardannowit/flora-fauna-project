import React from 'react'
import Menu from './Menu/Menu'
import './Header.scss'
class Header extends React.Component {
    render() {
        return (
            <div className="header-menu">
                <div className="header-admin-logo">
                    <img className='logo' src= '/Images/Logo/logo.png' alt=''/>
                </div>
                <Menu/>
            </div>
        )
    }
}

export default Header