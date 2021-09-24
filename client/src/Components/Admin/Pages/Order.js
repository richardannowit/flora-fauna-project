import React from 'react'
import Table from '../Order/Table/Table'
import API from '../../../API/ConnectAPI'
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

    render() {
        return (
            <div style={{position: 'relative'}}>
                <Table orders={this.state.orders}/>
            </div>
        )
    }
}

export default Order