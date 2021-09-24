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
            url: 'http://localhost:4000/categories',
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

    HandleSubmit = (category,method, id)=>{
        const {categories} = this.state
        if(method.match(/post/i)) 
            categories.push(category)
        else {
            const idx = categories.findIndex(elm => elm.id === id)
            categories[idx] = category
        }
        this.setState({categories: categories})
    }

    HandleDelete = (category, id) =>{
        const {categories} = this.state
        const idx = categories.findIndex(elm => elm.id === id)
        categories.splice(idx, 1)
        this.setState({categories: categories})
    }

    render() {
        return (
            <div ref={this.category} style={{position: 'relative'}}>
                {this.state.activeAddCategory && <Form method='POST' onSubmit={this.HandleSubmit} onCloseForm={this.onCloseFormCategory}/>}
                {this.state.activeUpdateCategory && <Form method='PUT' onSubmit={this.HandleSubmit} onCloseForm={this.onCloseFormCategory} data_category={this.state.category_data_update}/>}
                <Category onDelete={this.HandleDelete} onClickToAddCategory={this.showAddCategory} onClickToUpdateCategory={this.showUpdateCategory} categories={this.state.categories}/>
            </div>
        )
    }
}

export default Categories