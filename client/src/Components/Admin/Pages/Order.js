import React from 'react'
import Table from '../Order/Table/Table'
import {getOrders, getOrdersByName} from '../API/ConnectAPI'
class Order extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            orders: [],
            offset: 0,
            loading: 0
        }
    }

    //Load data
    async componentDidMount() {
        document.title = 'Admin | Orders Manage'
        const orders = await getOrders(20, this.state.offset)
        this.setState({orders: orders.data ? orders.data: []})
        this.setState({loading: 1})
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
        await this.setState({offset})
    }

    async componentDidUpdate(prevProps, prevState) {
        if(prevState.offset !== this.state.offset) {
            const orders = await getOrders(10, this.state.offset)
            if(orders.data) {
                await this.setState({
                    orders: [...this.state.orders, ...orders.data]
                })
            }else 
                console.log(orders.message)
        }
    }

    render() {
        return (
            <div style={{position: 'relative'}}>
                <Table 
                    onSearch={this.handleSearch} 
                    orders={this.state.orders}
                    loading={this.state.loading}
                    offset={this.state.offset}
                    onSetOffset={this.handleSetOffset}
                />
            </div>
        )
    }
}

export default Order