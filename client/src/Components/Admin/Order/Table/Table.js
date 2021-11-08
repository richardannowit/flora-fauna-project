import React from 'react'
import './Table.scss'
import {putActiveOrders}from '../../API/ConnectAPI'
import $ from 'jquery'

class Table extends React.Component {

    constructor(props) {
        super(props)
        this.state ={
            search: '',
            offset: 0,
            changeActive: '',
            status: ''
        }
    }

    getData() {
        return this.props.orders.map((order, idx) => {
            return (
                <tr className='data' key={idx}>
                    <td>
                        <p>{idx+1}</p>
                    </td>
                    <td>
                        <p>{order.customer_name}</p>
                    </td>
                    <td>
                        <p>{order.customer_email}</p>
                    </td>
                    <td >
                        <p>{order.customer_phone_number}</p>
                    </td>
                    <td>
                        <p>{order.customer_address}</p>
                    </td>
                    <td>
                        <p>{order.food_name}</p>
                    </td>
                    <td>
                        <p>{order.price}</p>
                    </td>
                    <td>
                        <p>{order.quantity}</p>
                    </td>
                    <td>
                        <p>{parseInt(order.quantity)*parseInt(order.price)}</p>
                    </td>
                    <td>
                        <select value={order.status} id={order.id} onChange={this.handleChangeSelect}>
                            <option value='waiting' >waiting</option>
                            <option value='delivering'>delivering</option>
                            <option value='success'>success</option>
                        </select>
                    </td>
                    <td>
                        <p>{order.order_date}</p>
                    </td>
                </tr>
            )
        })
    }

    //Submit active
    handleChangeSelect= async (e)=>{
        const {value, id} = e.target
        const active = await putActiveOrders(id, {status: value}, localStorage.getItem('accessToken'))
        e.target.value = value
        console.log(active)
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
        if(this.props.activeSeeMoreButton === 0) {
            $('.orders-see-more').css('visibility', 'hidden')
        }
    }

    render() {
        return (
            <div className='table-orders'>
                <p className='label-order'>Orders Management</p>
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
                            <th className='customer-name-th'>Customer Name</th>
                            <th className='customer-email-th'>Customer Email</th>
                            <th className='customer-phone-th'>Customer Phone</th>
                            <th className='customer-address-th'>Customer Address</th>
                            <th className='food-name-th'>Food Name</th>
                            <th className='food-price-th'>Price</th>
                            <th className='food-quantity-th'>Quantity</th>
                            <th className='food-total-th'>Total</th>
                            <th className='active-th'>Status</th>
                            <th className='date-th'>Date</th>
                        </tr>
                        {this.getData()}
                    </tbody>
                </table>
                {this.props.orders.length === 0 && <p className='no-data'>{this.props.loading ? 'No data found!' : 'Loading..'}</p>}
                {this.props.orders.length !== 0 && <button className='orders-see-more' onClick={this.handleUpdatePosition}>See more</button>}
            </div>
        )
    }
}

export default Table