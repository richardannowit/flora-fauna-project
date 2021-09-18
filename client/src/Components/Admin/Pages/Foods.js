import React from 'react'
import Table from '../Foods/Table/Table'
import Form from '../Foods/Form/Form'
import axios from 'axios'
class Foods extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeAddFoodsForm: false,
            activeUpdateFoodsForm: false,
            food_data_update: {},
            foods:[]
        }
        this.food = React.createRef();
    }

    async componentWillMount() {
        await axios({
            method: 'GET',
            url: 'http://localhost:3000/foods',
            data: null
        })
        .then(res=>{
            this.setState({foods: res.data})
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

    render() {
        return (
            <div ref={this.food} style={{position: 'relative'}}>
                {this.state.activeAddFoodsForm && <Form onHideAddFoodForm={this.onHideFoodForm}/>}
                {this.state.activeUpdateFoodsForm && <Form onHideAddFoodForm={this.onHideFoodForm} data_food={this.state.food_data_update}/>}
                <Table onShowAddFoodForm={this.onShowAddFoodForm} onShowUpdateFoodForm={this.onShowUpdateFoodForm} foods={this.state.foods}/>
            </div>
        )
    }
}

export default Foods