import React from 'react'
import Table from '../Order/Table/Table'
import {getOrders, getOrdersByName} from '../API/ConnectAPI'
class Order extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            orders: [],
            offset: 0
        }
    }

    //Load data
    async componentDidMount() {
        document.title = 'Admin | Orders Manage'
        const orders = await getOrders()
        this.setState({orders: orders.data ? orders.data: []})
    }

    //Search engine
    handleSearch = async (customer_name)=>{
        let orders
        if(customer_name === '')
            orders = await getOrders()
        else
            orders = await getOrdersByName(customer_name)
        await this.setState({orders: orders.data})
    }

    //handle set offset 
    handleSetOffset = async (offset)=>{
        await this.setState({offset: offset})
    }

    async componentDidUpdate(prevProps, prevState) {
        // if(prevState.offset !== this.state.offset) {
        //     const orders = await getOrders(10, this.state.offset)
        //     await this.setState({
        //         foods: [...this.state.orders, ...orders.data]
        //     })
        // }
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