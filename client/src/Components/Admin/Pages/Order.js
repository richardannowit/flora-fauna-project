import React from 'react'
import Table from '../Order/Table/Table'
import {getOrders, getOrdersByName} from '../API/ConnectAPI'
class Order extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            orders: []
        }
    }

    //Load data
    async componentDidMount() {
        document.title = 'Admin | Orders Manage'
        const orders = await getOrders(localStorage.getItem('accessToken'))
        this.setState({orders: orders.data ? orders.data: []})
    }

    //Search engine
    handleSearch = async (customer_name)=>{
        let orders
        if(customer_name === '')
            orders = await getOrders(localStorage.getItem('accessToken'))
        else
            orders = await getOrdersByName(customer_name, localStorage.getItem('accessToken'))
        await this.setState({orders: orders.data})
    }

    render() {
        return (
            <div style={{position: 'relative'}}>
                <Table 
                    onSearch={this.handleSearch} 
                    orders={this.state.orders}
                />
            </div>
        )
    }
}

export default Order