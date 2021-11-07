import React from 'react'
import {Link, useHistory, Route} from 'react-router-dom' 
import './Menu.scss'

export default function Menu(props){
    const history = useHistory()

    //Handel logout
    const handleLogout = (e)=>{
        localStorage.removeItem('accessToken')
        history.push('/login')
    }

    //Match router with item menu
    const ListItemLink = (to, exact, label) =>{
        return (
          <Route
            path={to}
            exact={exact}
            children={({ match }) => (
              <li>
                <Link className={match ? "menu-elm active" : "menu-elm"} to={to}>{label}</Link>
              </li>
            )}
          />
        );
      }

    return (
            <div className="menu-admin">
                <ul>
                    {ListItemLink('/admin',true, 'Home')}
                    {ListItemLink('/admin/admin-manager', false, 'Member Manage')}
                    {ListItemLink('/admin/categories', false, 'Categories Manage')}
                    {ListItemLink('/admin/foods', false, 'Foods Manage')}
                    {ListItemLink('/admin/contracts', false, 'Contacts Manage')}
                    {ListItemLink('/admin/orders', false, 'Orders Manage')}
                    <li>
                        <p className='menu-elm' onClick={handleLogout}>Logout</p>
                    </li>
                </ul>
            </div>
        )
}