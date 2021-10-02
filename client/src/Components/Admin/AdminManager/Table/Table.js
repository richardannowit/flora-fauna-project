import React from 'react'
import './Table.scss'

class Table extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            search: ''
        }
    }

    getData() {
        return this.props.users.map((user, idx) => {
            return (
                <tr className='data' key={idx}>
                    <td>
                        <p>{idx+1}</p>
                    </td>
                    <td>
                        <p>{user.username}</p>
                    </td>
                    <td>
                        <p>{user.phone_number}</p>
                    </td>
                    <td>
                        <p>{user.email}</p>
                    </td>
                    <td>
                        <p>{user.first_name}</p>
                    </td>
                    <td>
                        <p>{user.last_name}</p>
                    </td>
                </tr>
            )
        })
    }

    //Show added form
    handleShowMemberForm = () =>{
        this.props.onShowMemberForm()
    }

    //Update input form
    handleChange = async (e) =>{
        const  {value, name} =  e.target
        await this.setState({
            [name]: value
        })
        this.props.onSearch(this.state.search)
    }

    render() {
        return (
            <div className='table-managers'>
                <p className='label-manager'>Manage User</p>
                <div className='add-and-search'>
                    <button className='add-user' onClick={this.handleShowMemberForm}>Add Member</button>
                    <div className='search-box'>
                        <input type='text' className='search-item' name='search' value={this.state.search} onChange={this.handleChange} placeholder='Click to search by username'/>
                        <i className='fas fa-search search-item'></i>
                    </div>
                </div>
                <table>
                    <tbody>
                        <tr className='header'>
                            <th className='sn-th'>S.N.</th>
                            <th className='username-th'>Username</th>
                            <th className='phone-number-th'>Phone Number</th>
                            <th className='email-th'>Email</th>
                            <th className='first-name-th'>First Name</th>
                            <th className='last-name-th'>Last Name</th>
                        </tr>
                        {this.getData()}
                    </tbody>
                </table>
                {this.props.users.length === 0 && <p>No data found!</p>}
            </div>

        );
    }
}

export default Table