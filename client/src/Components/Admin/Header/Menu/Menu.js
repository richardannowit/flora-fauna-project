import React from 'react'
import {Link, useHistory} from 'react-router-dom' 
import './Menu.scss'
import axios from 'axios'
import cookie from 'react-cookies'


export default function Menu(props){
    const history = useHistory()
    const handleLogout = (e)=>{
        cookie.remove('token')
        history.push('/login')
    }
    return (
            <div className="menu-admin">
                <ul>
                    <li>
                        <Link className='menu-elm' to='/admin'>Home</Link>
                    </li>
                    <li>
                        <Link className='menu-elm' to='/admin/admin-manager'>Member Manage</Link>
                    </li>
                    <li>
                        <Link className='menu-elm' to='/admin/categories'>Categories Manage</Link>
                    </li>
                    <li>
                        <Link className='menu-elm' to='/admin/foods'>Foods Manage</Link>
                    </li>
                    <li>
                        <Link className='menu-elm' to='/admin/order'>Order Manage</Link>
                    </li>
                    <li>
                        <p className='menu-elm' onClick={handleLogout}>Logout</p>
                    </li>
                </ul>
            </div>
        )
}