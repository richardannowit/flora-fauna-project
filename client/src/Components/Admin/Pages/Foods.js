import React from 'react'
import Table from '../Foods/Table/Table'
import Form from '../Foods/Form/Form'
class Foods extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeAddFoodsForm: false,
            activeUpdateFoodsForm: false,
        }
    }
    render() {
        return (
            <div>
                {this.state.activeAddFoodsForm && <Form/>}
                {this.state.activeUpdateFoodsForm && <Form/>}
                <Table/>
            </div>
        )
    }
}

export default Foods