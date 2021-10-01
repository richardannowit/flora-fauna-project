import React from 'react'
import Table from '../Order/Table/Table'
import API from '../../../API/ConnectAPI'
import axios from 'axios'
class Order extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            orders: []
        }
    }

    async componentDidMount() {
        const data = await API('GET', 'http://localhost:4000/orders')
        this.setState({orders: data})
    }

    handleSearch = async (customer_name)=>{
        const data = await axios.get(`http://localhost:4000/orders?customer_name_like=${customer_name}`).then(res=>res.data).catch(err=>err.message)
        await this.setState({orders: data})
    }

    render() {
        return (
            <div style={{position: 'relative'}}>
                <Table onSearch={this.handleSearch} orders={this.state.orders}/>
            </div>
        )
    }
}

export default Order