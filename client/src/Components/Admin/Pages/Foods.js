import React from 'react'
import Table from '../Foods/Table/Table'
import Form from '../Foods/Form/Form'
import { getFoods, getCategories, getFoodByName} from '../API/ConnectAPI'
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

    //Load data
    async componentWillMount() {
        const foods= await getFoods(localStorage.getItem('accessToken'))
        const categories = await getCategories(localStorage.getItem('accessToken'))
        this.setState({foods: foods.data})
        this.setState({categories: categories.data})
    }

    //Set state to show added form
    onShowAddFoodForm = ()=>{
        this.setState({activeAddFoodsForm: this.state.activeAddFoodsForm ? false: true})
        document.body.style.overflow = 'hidden'
        this.food.current.style.paddingRight = '15px'
    }

    //Set state to show updated form
    onShowUpdateFoodForm = (food)=>{
        this.setState({activeUpdateFoodsForm: this.state.activeUpdateFoodsForm ? false: true})
        this.setState({food_data_update : food})
        document.body.style.overflow = 'hidden'
        this.food.current.style.paddingRight = '15px'
    }

    //Set state to hide form
    onHideFoodForm = () =>{
        this.setState({activeAddFoodsForm: false, activeUpdateFoodsForm: false})
        document.body.style.overflow = 'visible'
        this.food.current.style.paddingRight = '0px'
    }

    //Load new state
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

    //Set state to delete
    handleDelete = (id) =>{
        const {foods} = this.state
        const idx = foods.findIndex(element=>element.id === id)
        foods.splice(idx, 1)
        this.setState({foods: foods})
    }

    //Search engine
    handleSearch = async (food_name)=>{
        let food;
        if(food_name === '')
            food = await getFoods(localStorage.getItem('accessToken'))
        else
            food = await getFoodByName(food_name, localStorage.getItem('accessToken'))
        await this.setState({foods: food.data})
    }

    render() {
        return (
            <div ref={this.food} style={{position: 'relative'}}>
                {this.state.activeAddFoodsForm && <Form 
                                                    onSubmit={this.handleSubmit} 
                                                    method='POST' 
                                                    onHideAddFoodForm={this.onHideFoodForm} 
                                                    categories={this.state.categories}
                                                    />}
                {this.state.activeUpdateFoodsForm && <Form 
                                                    onSubmit={this.handleSubmit} 
                                                    method='PUT' 
                                                    onHideAddFoodForm={this.onHideFoodForm} 
                                                    data_food={this.state.food_data_update} 
                                                    categories={this.state.categories}
                                                    />}
                <Table 
                    onSearch={this.handleSearch} 
                    onDelete={this.handleDelete} 
                    onShowAddFoodForm={this.onShowAddFoodForm} 
                    onShowUpdateFoodForm={this.onShowUpdateFoodForm} 
                    foods={this.state.foods}
                />
            </div>
        )
    }
}

export default Foods