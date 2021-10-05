import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import AdminManager from './Pages/AdminManager'
import Categories from './Pages/Categories'
import Home from './Pages/Home'
import Foods from './Pages/Foods'
import Order from './Pages/Order'
import NotFound from './Pages/NotFound'
import Header from './Header/Header'
import {getUserById} from  './API/ConnectAPI'
class Admin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                username: 'dpkhang',
                first_name: 'Dinh',
                last_name: 'Khang',
                phone: '0939305459',
                email: 'khang1@gmail.com'
            }
        }
    }

    async componentDidMount() {
        const user = await getUserById(localStorage.getItem('id'))
        await this.setState({user: user.data})
    }

    render() {
        if(!localStorage.getItem('accessToken'))
             return(<Redirect to='/login'/>) 
        return (
            <div>
                <Header></Header>
                <div style={{width: '100%', height: 'auto', position: 'absolute'}}>
                    <Switch>
                        <Route path='/admin/' exact component={Home}/>
                        <Route path='/admin/categories'  component={Categories}/>
                        <Route path='/admin/foods'  component={Foods} />
                        <Route path='/admin/orders' component={Order}/>
                        <Route path='/admin/admin-manager'>
                            <AdminManager user={this.state.user}/>
                        </Route>
                        <Route path='' component={NotFound}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Admin;