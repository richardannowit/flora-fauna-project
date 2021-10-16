import React from 'react'
import Table from '../AdminManager/Table/Table'
import Add from '../AdminManager/Form/Add/AddForm'
import Update from '../AdminManager/Form/Update/UpdateForm'
import Profile from '../AdminManager/AdminProfile/Profile'
import ChangePassword from '../AdminManager/Form/ChangePasword/ChangePassword'
import {getUsers, getUserByName} from '../API/ConnectAPI'
class AdminManager extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            activeAddForm: false,
            activeUpdateForm: false,
            activeChangePasswordForm: false,
            users: [],
            offset: 0,
            loading: 0
        }
        this.users = React.createRef()
    }

    //Load data
    async componentDidMount() {
        document.title = 'Admin | Admins Manage'
        const users = await getUsers(10, this.state.offset)
        this.setState({users: users.data})
        this.setState({loading: 1})
    }

    //Set state to Show added form
    showAddMemberForm = ()=>{
        this.setState({activeAddForm: this.state.activeAddForm ? false: true})
        document.body.style.overflow = 'hidden'
        this.users.current.style.paddingRight = '15px'
    }

    //Set state to Show updated form
    showUpdateMemberForm = (user)=>{
        this.setState({activeUpdateForm: this.state.activeUpdateForm ? false: true})
        document.body.style.overflow = 'hidden'
        this.users.current.style.paddingRight = '15px'
    }

    //Set state to Show changed password form
    onShowChangePasswordForm = ()=>{
        this.setState({activeChangePasswordForm: this.state.activeChangePasswordForm ? false: true})
        document.body.style.overflow = 'hidden'
        this.users.current.style.paddingRight = '15px'
    }

    //Hide form
    hideMemberForm = ()=> {
        this.setState({activeAddForm: false,  activeUpdateForm: false, activeChangePasswordForm: false,})
        document.body.style.overflow = 'visible'
        this.users.current.style.paddingRight = '0px'
    }

    //Load new state
    handleSubmit = (user, method)=>{
        const {users} = this.state
        if(method.match(/post/i)) 
            users.unshift(user)
        else {
            const idx = users.findIndex(elm => elm.id === user.id)
            users[idx] = user
        }
        this.setState({users})
    }

    //Search engine
    handleSearch = async (username)=>{
        let users
        if(username === ''){
            users = await getUsers()
        }else
            users = await getUserByName(username)
        await this.setState({users: users.data})
    }

    //handle set offset 
    handleSetOffset = async (offset)=>{
        await this.setState({offset: offset})
    }

    async componentDidUpdate(prevProps, prevState) {
        if(prevState.offset !== this.state.offset) {
            const users = await getUsers(10, this.state.offset)
            if(users.data)
                await this.setState({
                    foods: [...this.state.users, ...users.data]
                })
            else console.log(users.message)
        }
    }

    render() {
        return (
            <div ref={this.users} style={{position: 'relative'}}>
                {this.state.activeAddForm && <Add 
                                            onSubmit={this.handleSubmit} 
                                            onHideMemberForm={this.hideMemberForm} 
                                            method='post'
                                            />}
                {this.state.activeUpdateForm && <Update 
                                                onHideMemberForm={this.hideMemberForm} 
                                                onSubmit={this.handleSubmit} 
                                                data_user={this.props.user}
                                                />}
                {this.state.activeChangePasswordForm && <ChangePassword 
                                                        onHideChangePasswordForm= {this.hideMemberForm} 
                                                        />}
                <Profile 
                    onShowUpdateMemberForm={this.showUpdateMemberForm} 
                    onShowChangePasswordForm={this.onShowChangePasswordForm} 
                    user={this.props.user}
                />
                <Table 
                    onSearch={this.handleSearch} 
                    users={this.state.users} 
                    onShowMemberForm={this.showAddMemberForm}
                    offset = {this.state.offset}
                    onSetOffset={this.handleSetOffset}
                    loading={this.state.loading}
                />
            </div>
        )
    }
}

export default AdminManager