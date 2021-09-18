import React from 'react'
import Category from '../Category/Table/Table'
import Form from '../Category/Form/Form'
import axios from 'axios'
class Categories extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            activeAddCategory: false,
            activeUpdateCategory: false,
            category_data_update: {},
            categories: []
        }
        this.category = React.createRef();
    }

    async componentWillMount() {
        await axios({
            method: 'GET',
            url: 'http://localhost:3000/categories',
            data: null
        })
        .then(res=>{
            this.setState({categories: res.data})
        })
        .catch(err=>{
            console.log(err)
        })
    }

    showAddCategory =() =>{
        this.setState(preState=>({activeAddCategory: preState.activeAddCategory ? false : true}))
        document.body.style.overflow = 'hidden'
        this.category.current.style.paddingRight = '15px'
    }

    showUpdateCategory =(category) =>{
        this.setState(preState=>({activeUpdateCategory: preState.activeAddCategory ? false : true}))
        this.setState({category_data_update: category})
        document.body.style.overflow = 'hidden'
        this.category.current.style.paddingRight = '15px'
    }

    onCloseFormCategory = () =>{
        this.setState({activeAddCategory: false, activeUpdateCategory: false})
        document.body.style.overflow = 'visible'
        this.category.current.style.paddingRight = '0px'
    }

    render() {
        return (
            <div ref={this.category} style={{position: 'relative'}}>
                {this.state.activeAddCategory && <Form onCloseForm={this.onCloseFormCategory}/>}
                {this.state.activeUpdateCategory && <Form onCloseForm={this.onCloseFormCategory} data_category={this.state.category_data_update}/>}
                <Category onClickToAddCategory={this.showAddCategory} onClickToUpdateCategory={this.showUpdateCategory} categories={this.state.categories}/>
            </div>
        )
    }
}

export default Categories