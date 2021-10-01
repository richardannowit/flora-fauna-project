import React from 'react'
import Table from '../Foods/Table/Table'
import Form from '../Foods/Form/Form'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
class Foods extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeAddFoodsForm: false,
            activeUpdateFoodsForm: false,
            food_data_update: {},
            foods:[],
            categories:[]
        }
        this.food = React.createRef()
    }

    async componentWillMount() {
        await axios({
            method: 'GET',
            url: 'http://localhost:8000/api/foods',
            data: null
        })
        .then(res=>{
            this.setState({foods: res.data.data})
        })
        .catch(err=>{
            console.log(err)
        })
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

    onShowAddFoodForm = ()=>{
        this.setState({activeAddFoodsForm: this.state.activeAddFoodsForm ? false: true})
        document.body.style.overflow = 'hidden'
        this.food.current.style.paddingRight = '15px'
    }

    onShowUpdateFoodForm = (food)=>{
        this.setState({activeUpdateFoodsForm: this.state.activeUpdateFoodsForm ? false: true})
        this.setState({food_data_update : food})
        document.body.style.overflow = 'hidden'
        this.food.current.style.paddingRight = '15px'
    }

    onHideFoodForm = () =>{
        this.setState({activeAddFoodsForm: false, activeUpdateFoodsForm: false})
        document.body.style.overflow = 'visible'
        this.food.current.style.paddingRight = '0px'
    }

    handleSubmit = (food, method, id='')=>{
        const {foods} = this.state
        if(method.match(/post/i)){
            foods.push(food)
        }else {
            const idx = foods.findIndex(element=>element.id === id)
            foods[idx] = food
        }
        this.setState({foods: foods})
    }

    handleDelete = (id) =>{
        const {foods} = this.state
        const idx = foods.findIndex(element=>element.id === id)
        foods.splice(idx, 1)
        this.setState({foods: foods})
    }

    handleSearch = async (food_name)=>{
        const data = await axios.get(`http://localhost:8000/api/foods/search?search=${food_name}`).then(res=>res.status !== 404 ? res.data: []).catch(err=>err.message)
        console.log(data)
        await this.setState({foods: data.data})
    }

    render() {
        return (
            <div ref={this.food} style={{position: 'relative'}}>
                {this.state.activeAddFoodsForm && <Form onSubmit={this.handleSubmit} method='POST' onHideAddFoodForm={this.onHideFoodForm} categories={this.state.categories}/>}
                {this.state.activeUpdateFoodsForm && <Form onSubmit={this.handleSubmit} method='PUT' onHideAddFoodForm={this.onHideFoodForm} data_food={this.state.food_data_update} categories={this.state.categories}/>}
                <Table onSearch={this.handleSearch} onDelete={this.handleDelete} onShowAddFoodForm={this.onShowAddFoodForm} onShowUpdateFoodForm={this.onShowUpdateFoodForm} foods={this.state.foods}/>
            </div>
        )
    }
}

export default Foods