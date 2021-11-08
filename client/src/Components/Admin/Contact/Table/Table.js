import React from 'react'
import $ from 'jquery'
import './Table.scss'

class Table extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            search: '',
            offset: 0,
        }
    }

    getData() {
        return this.props.contracts.map((contract, idx) => {
            return (
                <tr className='data' key={idx}>
                    <td>
                        <p>{idx+1}</p>
                    </td>
                    <td>
                        <p>{contract.name}</p>
                    </td>
                    <td>
                        <p>{contract.email}</p>
                    </td>
                    <td >
                        <p>{contract.phone}</p>
                    </td>
                    <td>
                        <p>{contract.message}</p>
                    </td>
                </tr>
            )
        })
    }

    //Update offset add more data
    handleUpdatePosition = async (e)=>{
        e.target.innerHTML = 'Loading...'
        setTimeout(()=>{
            e.target.innerHTML = 'See more'
        }, 700)
        await this.setState({offset: this.props.offset === 0 ? this.props.limit : this.props.offset+10})
        this.props.onSetOffset(this.state.offset)
    }

    componentDidUpdate(prevProps) {
        if(this.props.activeSeeMoreButton === 0) {
            $('.contracts-see-more').css('visibility', 'hidden')
        }else {
            $('.contracts-see-more').css('visibility', 'visible')
        }
    }

    handleChange = async (e)=>{
        const {value} = e.target
        await this.setState({search: value})
        this.props.onSearch(this.state.search)
    }

    
    render() {
        return (
            <div className='table-contracts'>
                <p className='label-contract'>Contacts Management</p>
                <div className='add-and-search'>
                    <div className='search-box'>
                        <input type='text' className='search-item' name='search' value={this.state.search} onChange={this.handleChange} placeholder='Click to search by customer name'/>
                        <i className='fas fa-search search-item'></i>
                    </div>
                </div>
                <table>
                    <tbody>
                        <tr className='header'>
                            <th className='sn-th'>S.N.</th>
                            <th className='name-th'>Name</th>
                            <th className='email-th'>Email</th>
                            <th className='phone-th'>Phone</th>
                            <th className='message-th'>Message</th>
                        </tr>
                        {this.getData()}
                    </tbody>
                </table>
                {this.props.contracts.length === 0 && <p className='no-data'>{this.props.loading ? 'No data found!' : 'Loading..'}</p>}
                {this.props.contracts.length !== 0 && <button className='contracts-see-more' onClick={this.handleUpdatePosition}>See more</button>}
            </div>
        )
    }
}

export default Table