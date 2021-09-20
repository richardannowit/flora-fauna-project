import React from 'react'
import Table from '../Order/Table/Table'
import Form from '../Order//Form/Form'
class Order extends React.Component {
    render() {
        return (
            <div ref={this.food} style={{position: 'relative'}}>
                <Form />
                <Table/>
            </div>
        )
    }
}

export default Order