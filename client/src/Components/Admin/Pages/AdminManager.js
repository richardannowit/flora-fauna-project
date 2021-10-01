import React from 'react'
import Table from '../AdminManager/Table/Table'
import Add from '../AdminManager/Form/Add/AddForm'
import Update from '../AdminManager/Form/Update/UpdateForm'
import Profile from '../AdminManager/AdminProfile/Profile'
import API from '../../../API/ConnectAPI'
import axios from 'axios'
class AdminManager extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            activeShowForm: false,
            activeUpdateForm: true,
            data_user: null,
            users: [
            ]
        }
        this.users = React.createRef()
    }

    async componentDidMount() {
        const users = await API('GET', 'http://localhost:4000/users')
        this.setState({users})
    }

    showMemberForm = ()=>{
        this.setState({activeShowForm: this.state.activeShowForm ? false: true})
        document.body.style.overflow = 'hidden'
        this.users.current.style.paddingRight = '15px'
    }

    hideMemberForm = ()=> {
        this.setState({activeShowForm: false,  activeShowUpdateForm: false,})
        document.body.style.overflow = 'visible'
        this.users.current.style.paddingRight = '0px'
    }

    handleSubmit = (user, method)=>{
        const {users} = this.state
        if(method.match(/post/i)) 
            users.push(user)
        else {
            const idx = users.findIndex(elm => elm.id === user.id)
            users[idx] = user
        }
        this.setState({users})
    }

    handleSearch = async (username)=>{
        const data = await axios.get(`http://localhost:4000/users?username_like=${username}`).then(res=>res.data).catch(err=>err.message)
        await this.setState({users: data})
    }

    render() {
        return (
            <div ref={this.users} style={{position: 'relative'}}>
                {this.state.activeShowForm && <Add onSubmit={this.handleSubmit} onHideMemberForm={this.hideMemberForm} method='post'/>}
                {this.state.activeUpdateForm && <Update onSubmit={this.handleSubmit}/>}
                <Profile user = {this.props.user}/>
                <Table onSearch={this.handleSearch} users={this.state.users} onShowMemberForm={this.showMemberForm} onShowUpdateMemberForm={this.showUpdateMemberForm}/>
            </div>
        )
    }
}

export default AdminManager