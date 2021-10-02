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

    //Load data
    async componentDidMount() {
        const data = await API('GET', 'http://localhost:4000/orders')
        this.setState({orders: data})
    }

    //Search engine
    handleSearch = async (customer_name)=>{
        const data = await axios.get(`http://localhost:8000/api/orders?customer_name=${customer_name}`).then(res=>res.data).catch(err=>err.message)
        await this.setState({orders: data})
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