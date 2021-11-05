import React, { Component } from 'react'
import Table from '../Contract/Table/Table'
import {getContracts} from '../API/ConnectAPI'

 class Contract extends Component {
    constructor(props) {
        super(props)
        this.state ={
            contracts: [],
            offset: 0,
            loading: 0
        }
    }

    //Load data
    async componentDidMount() {
        document.title = 'Admin | Orders Manage'
        const contracts = await getContracts(20, this.state.offset)
        this.setState({contracts: contracts && contracts.data ? contracts.data: []})
        this.setState({loading: 1})
    }

    //handle set offset 
    handleSetOffset = async (offset)=>{
        await this.setState({offset})
    }

    async componentDidUpdate(prevProps, prevState) {
        if(prevState.offset !== this.state.offset) {
            const contracts = await getContracts(10, this.state.offset)
            if(contracts.data) {
                await this.setState({
                    orders: [...this.state.contracts, ...contracts.data]
                })
            }else 
                console.log(contracts.message)
        }
    }

    render() {
        return (
            <div>
                <Table
                    contracts= {this.state.contracts}
                    loading={this.state.loading}
                    offset={this.state.offset}
                    onSetOffset={this.handleSetOffset}
                />
            </div>
        )
    }
}

export default Contract
