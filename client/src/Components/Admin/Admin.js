import React from 'react'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import AdminManager from './Pages/AdminManager'
import Categories from './Pages/Categories'
import Home from './Pages/Home'
import Foods from './Pages/Foods'
import Order from './Pages/Order'
import NotFound from './Pages/NotFound'
import Header from './Header/Header'
class Admin extends React.Component {
    render() {
        return (
            <Router>
                <Header></Header>
                <div style={{backgroundColor: '#f1f2f6', width: '100%', height: 'auto', position: 'absolute'}}>
                    <Switch>
                        <Route path='/admin/' exact component={Home}/>
                        <Route path='/admin/categories' component={Categories}/>
                        <Route path='/admin/foods' component={Foods}/>
                        <Route path='/admin/order' component={Order}/>
                        <Route path='/admin/admin-manager' component={AdminManager}/>
                        <Route path='' component={NotFound}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Admin