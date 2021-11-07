import React from 'react'
import './Table.scss'
import $ from 'jquery'

class Table extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            search: '',
            offset: 0
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
                        <p>{user.phone}</p>
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

    //Update offset add more data
    handleUpdatePosition = async (e)=>{
        e.target.innerHTML = 'Loading...'
        setTimeout(()=>{
            e.target.innerHTML = 'See more'
        }, 500)
        await this.setState({offset: this.props.offset === 0 ? this.props.limit : this.props.offset+10})
        this.props.onSetOffset(this.state.offset)
    }

    componentDidUpdate(prevProps) {
        if(this.props.activeSeeMoreButton !== prevProps.activeSeeMoreButton) {
            $('.users-see-more').css('visibility', 'hidden')
        }
    }

    render() {
        return (
            <div className='table-managers'>
                <p className='label-manager'>Users Management</p>
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
                {this.props.users.length === 0 && <p className='no-data'>{this.props.loading ? 'No data found!' : 'Loading..'}</p>}
                {this.props.users.length !== 0 && <button className='users-see-more' onClick={this.handleUpdatePosition}>See more</button>}
            </div>
        );
    }
}

export default Table