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
        const orders = await getOrders()
        this.setState({orders: orders.data})
    }

    //Search engine
    handleSearch = async (customer_name)=>{
        const orders = await getOrdersByName(customer_name)
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