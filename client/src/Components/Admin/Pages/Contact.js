import React, { Component } from 'react'
import Table from '../Contact/Table/Table'
import {getContacts, getContactsByName} from '../API/ConnectAPI'

 class Contract extends Component {
    constructor(props) {
        super(props)
        this.state ={
            contracts: [],
            offset: 0,
            limit: 15,
            loading: 0,
            activeSeeMoreButton: 1,
        }
    }

    //Load data
    async componentDidMount() {
        document.title = 'Admin | Contacts Manage'
        const contracts = await getContacts(this.state.limit, this.state.offset)
        this.setState({contracts: contracts && contracts.data ? contracts.data: []})
        this.setState({loading: 1})
    }

    //handle set offset 
    handleSetOffset = async (offset)=>{
        await this.setState({offset:offset});
    }

    async componentDidUpdate(prevProps, prevState) {
        if(prevState.offset !== this.state.offset) {
            const contracts = await getContacts(10, this.state.offset)
            if(!contracts.data || contracts.data.length < 10)
                this.setState({activeSeeMoreButton: 0})
            if(contracts.data) {
                await this.setState({
                    contracts: [...this.state.contracts, ...contracts.data]
                })
            }else 
                console.log(contracts.message)
        }
    }

    handleSearch = async (name)=>{
        let contacts
        if(name === '') {
            contacts = await getContacts(this.state.limit, 0)
            await this.setState({offset: 0})
            await this.setState({activeSeeMoreButton: 1}) 
        }else {
            contacts = await getContactsByName(name)
            await this.setState({activeSeeMoreButton: 0}) 
        }
        await this.setState({contracts: contacts.data})
    }

    render() {
        return (
            <div>
                <Table
                    contracts= {this.state.contracts}
                    loading={this.state.loading}
                    offset={this.state.offset}
                    onSetOffset={this.handleSetOffset}
                    activeSeeMoreButton={this.state.activeSeeMoreButton}
                    limit={this.state.limit}
                    onSearch={this.handleSearch}
                />
            </div>
        )
    }
}

export default Contract
