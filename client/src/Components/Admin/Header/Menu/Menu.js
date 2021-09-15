import React from 'react'
import {Link} from 'react-router-dom' 
import './Menu.scss'
class Menu extends React.Component {
    render() {
        return (
            <div className="menu-admin">
                <ul>
                    <li>
                        <Link to='/admin/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/admin/admin-manager'>Admin Manager</Link>
                    </li>
                    <li>
                        <Link to='/admin/categories'>Categories</Link>
                    </li>
                    <li>
                        <Link to='/admin/foods'>Foods</Link>
                    </li>
                    <li>
                        <Link to='/admin/order'>Order</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Menu