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
            categories: [],
            search: []
        }
        this.category = React.createRef()
    }

    async componentWillMount() {
        await axios({
            method: 'GET',
            url: 'http://localhost:8000/api/categories',
            data: null
        })
        .then(res=>{
            this.setState({categories: res.data.data})
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

    closeFormCategory = () =>{
        this.setState({activeAddCategory: false, activeUpdateCategory: false})
        document.body.style.overflow = 'visible'
        this.category.current.style.paddingRight = '0px'
    }

    handleSubmit = (category,method, id)=>{
        const {categories} = this.state
        if(method.match(/post/i)) 
            categories.push(category)
        else {
            const idx = categories.findIndex(elm => elm.id === id)
            categories[idx] = category
        }
        this.setState({categories: categories})
    }

    handleDelete = (category, id) =>{
        const {categories} = this.state
        const idx = categories.findIndex(elm => elm.id === id)
        categories.splice(idx, 1)
        this.setState({categories: categories})
    }

    handleSearch = async (name)=>{
        const data = await  axios.get(`http://localhost:4000/categories?category_name_like=${name}`).then(res=>res.data).catch(err=>err.message)
        this.setState({categories: data})
    }

    render() {
        return (
            <div ref={this.category} style={{position: 'relative'}}>
                {this.state.activeAddCategory && <Form method='POST' onSubmit={this.handleSubmit} onCloseForm={this.closeFormCategory}/>}
                {this.state.activeUpdateCategory && <Form method='PUT' onSubmit={this.handleSubmit} onCloseForm={this.closeFormCategory} data_category={this.state.category_data_update}/>}
                <Category onSearch={this.handleSearch} onDelete={this.handleDelete} onClickToAddCategory={this.showAddCategory} onClickToUpdateCategory={this.showUpdateCategory} categories={this.state.categories}/>
            </div>
        )
    }
}

export default Categories