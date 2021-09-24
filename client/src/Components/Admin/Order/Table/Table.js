import React from 'react'
import './Table.scss'

class Table extends React.Component {

    constructor(props) {
        super(props)
        this.state ={
            search: ''
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
                        <p>{order.customer_phone}</p>
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
                        <p>{order.total}</p>
                    </td>
                    <td>
                        <p>{order.date}</p>
                    </td>
                </tr>
            )
        })
    }

    handleChange = (e) =>{
        const  {value, name} =  e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className='table-orders'>
                <p className='label-order'>Manage Orders</p>
                <div className='add-and-search'>
                    <div className='search-box'>
                        <input type='text' className='search-item' name='search' value={this.state.search} onChange={this.handleChange} placeholder='Click to search'/>
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
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th className='day-th'>Date</th>
                        </tr>
                        {this.getData()}
                    </tbody>
                </table>
                {/* <p>See more</p> */}
            </div>
        );
    }
}

export default Table