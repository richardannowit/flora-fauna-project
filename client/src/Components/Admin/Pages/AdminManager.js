import React from 'react'
import Table from '../AdminManager/Table/Table'
import Form from '../AdminManager/Form/Form'
import Profile from '../AdminManager/AdminProfile/Profile'
import API from '../../../API/ConnectAPI'
class AdminManager extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            activeShowForm: false,
            activeShowUpdateForm: false,
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

    render() {
        return (
            <div ref={this.users} style={{position: 'relative'}}>
                {this.state.activeShowForm && <Form onSubmit={this.handleSubmit} onHideMemberForm={this.hideMemberForm} method='post'/>}
                <Profile/>
                <Table users={this.state.users} onShowMemberForm={this.showMemberForm} onShowUpdateMemberForm={this.showUpdateMemberForm}/>
            </div>
        )
    }
}

export default AdminManager