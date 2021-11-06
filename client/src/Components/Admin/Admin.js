import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import AdminManager from './Pages/AdminManager'
import Categories from './Pages/Categories'
import Home from './Pages/Home'
import Foods from './Pages/Foods'
import Order from './Pages/Order'
import NotFound from './Pages/NotFound'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Contact from './Pages/Contact'
import {getUserById} from  './API/ConnectAPI'
class Admin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                username: '',
                first_name: '',
                last_name: '',
                phone: '',
                email: ''
            }
        }
    }

    async componentDidMount() {
        window.addEventListener('storage', e=>{
            if(e.key === 'id' && e.oldValue !== e.newValue){
                localStorage.removeItem('id')
                localStorage.removeItem('accessToken')
                this.props.history.push('/login')
            }
        })
        const user = await getUserById(localStorage.getItem('id'), localStorage.getItem('accessToken'))
        await this.setState({user: user.data[0]})
    }

    render() {
        if(!localStorage.getItem('accessToken'))
             return(<Redirect to='/login'/>) 
        return (
            <div>
                <Header></Header>
                <div style={{width: '100%'}}>
                    <Switch>
                        <Route path='/admin/' exact component={Home}/>
                        <Route path='/admin/categories'  component={Categories}/>
                        <Route path='/admin/foods'  component={Foods} />
                        <Route path='/admin/orders' component={Order}/>
                        <Route path='/admin/admin-manager'>
                            <AdminManager user={this.state.user}/>
                        </Route>
                        <Route path='/admin/contracts' component={Contact}/>
                        <Route path='' component={NotFound}/>
                    </Switch>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}

export default Admin;