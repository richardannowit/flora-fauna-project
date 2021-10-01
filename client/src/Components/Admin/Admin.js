import React from 'react'
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'
import AdminManager from './Pages/AdminManager'
import Categories from './Pages/Categories'
import Home from './Pages/Home'
import Foods from './Pages/Foods'
import Order from './Pages/Order'
import NotFound from './Pages/NotFound'
import Header from './Header/Header'
import cookie from 'react-cookies'
import axios from 'axios'
class Admin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {

            }
        }
    }

    async componentDidMount() {
        const token = cookie.load('token')
    }

    render() {
        if(!cookie.load('token'))
             return(<Redirect to='/login'/>) 
        return (
            <div>
                <Header></Header>
                <div style={{backgroundColor: '#f1f2f6', width: '100%', height: 'auto', position: 'absolute'}}>
                    <Switch>
                        <Route path='/admin/' exact component={Home}/>
                        <Route path='/admin/categories'  component={Categories}/>
                        <Route path='/admin/foods'  component={Foods}/>
                        <Route path='/admin/order' component={Order}/>
                        <Route path='/admin/admin-manager' render={()=><AdminManager user={this.state.user}/>}/>
                        <Route path='' component={NotFound}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Admin