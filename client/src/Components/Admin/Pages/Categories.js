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
        this.category = React.createRef();
    }

    showAddCategory =() =>{
        this.setState(preState=>({activeAddCategory: preState.activeAddCategory ? false : true}))
        document.body.style.overflow = 'hidden'
        document.body.style.paddingRight = '15px'
    }

    showUpdateCategory =(category) =>{
        this.setState(preState=>({activeUpdateCategory: preState.activeAddCategory ? false : true}))
        this.setState({category: category})
        document.body.style.overflow = 'hidden'
        document.body.style.paddingRight = '15px'
    }

    onCloseFormAddCategory = () =>{
        this.setState({activeAddCategory: false})
        document.body.style.overflow = 'visible'
        document.body.style.paddingRight = '0px'
    }

    onCloseFormUpdateCategory = ()=>{
        this.setState({activeUpdateCategory: false})
        document.body.style.overflow = 'visible'
        document.body.style.paddingRight = '0px'
    }

    render() {
        return (
            <div ref={this.category}>
                {this.state.activeAddCategory && <Form onCloseForm={this.onCloseFormAddCategory}/>}
                {this.state.activeUpdateCategory && <Form onCloseForm={this.onCloseFormUpdateCategory} data_category={this.state.category}/>}
                <Category onClickToAddCategory={this.showAddCategory} onClickToUpdateCategory={this.showUpdateCategory}/>
            </div>
        )
    }
}

export default Categories