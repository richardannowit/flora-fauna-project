import React from 'react'
import Category from '../Category/Table/Table'
import Form from '../Category/Form/Form'

class Categories extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            activeAddCategory: false,
            activeUpdateCategory: false,
            category: {}
        }
    }

    showAddCategory =() =>{
        this.setState(preState=>({activeAddCategory: preState.activeAddCategory ? false : true}))
    }

    showUpdateCategory =(category) =>{
        this.setState(preState=>({activeUpdateCategory: preState.activeAddCategory ? false : true}))
        this.setState({category: category})
    }

    onCloseFormAddCategory = () =>{
        this.setState({activeAddCategory: false})
    }

    onCloseFormUpdateCategory = ()=>{
        this.setState({activeUpdateCategory: false})
    }

    render() {
        return (
            <div>
                <Form active={this.state.activeAddCategory} onCloseForm ={this.onCloseFormAddCategory}/>
                <Form active={this.state.activeUpdateCategory} onCloseForm ={this.onCloseFormUpdateCategory} data_category={this.state.category}/>
                <Category onClickToAddCategory={this.showAddCategory} onClickToUpdateCategory={this.showUpdateCategory}/>
            </div>
        )
    }
}

export default Categories