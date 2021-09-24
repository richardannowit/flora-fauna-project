import React from 'react'
import {Link} from 'react-router-dom' 
import './Menu.scss'
class Menu extends React.Component {
    render() {
        return (
            <div className="menu-admin">
                <ul>
                    <li>
                        <Link to='/admin/'>Statistic Manage</Link>
                    </li>
                    <li>
                        <Link to='/admin/admin-manager'>Member Manage</Link>
                    </li>
                    <li>
                        <Link to='/admin/categories'>Categories Manage</Link>
                    </li>
                    <li>
                        <Link to='/admin/foods'>Foods Manage</Link>
                    </li>
                    <li>
                        <Link to='/admin/order'>Order Manage</Link>
                    </li>
                    <li>
                        <Link to=''>Logout</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Menu