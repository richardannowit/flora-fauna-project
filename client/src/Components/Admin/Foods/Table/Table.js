import React from 'react'
import './Table.scss'
import {deleteFood} from '../../API/ConnectAPI'
class Table extends React.Component {

    constructor(props) {
        super(props)
        this.state ={
            search: '',
        }
    }

    getData() {
        return this.props.foods.map((food, idx) => {
            return (
                <tr className='data' key={idx}>
                    <td>
                        <p>{idx+1}</p>
                    </td>
                    <td>
                        <p>{food.food_name}</p>
                    </td>
                    <td >
                        <p style={{textAlign: 'justify'}}>{food.description}</p>
                    </td>
                    <td>
                        <img src={food.image_name} alt={food.food_name}/>
                    </td>
                    <td>
                        <p>{food.category_name}</p>
                    </td>
                    <td>
                        <p>{food.price}</p>
                    </td>
                    <td>
                        <p>{food.active === 1 ? 'Yes' : 'No'}</p>
                    </td>
                    <td>
                        <button className='btn btn-update' onClick={()=>{this.onShowUpdateFoodForm(food)}}><i className="fas fa-pen"></i> Update</button>
                        <button className='btn btn-delete' onClick={()=>{this.handleDeleteFood(food.id)}}><i className="fas fa-eraser"></i> Delete</button>
                    </td>
                </tr>
            )
        })
    }

    //Show added form
    onShowAddFoodForm = () =>{
        this.props.onShowAddFoodForm()
    }

    //Show updated form
    onShowUpdateFoodForm = (food)=>{
        this.props.onShowUpdateFoodForm(food)
    }

    //Delete food
    handleDeleteFood = async (id) =>{
        const bool = window.confirm('Do you want to delete?')
        if(bool){
            const delete_food = await deleteFood(id, localStorage.getItem('accessToken'))
            console.log(delete_food.message)
        }
        
    }

    //Update input items
    handleChange = async (e) =>{
        const  {value, name} =  e.target
        await this.setState({
            [name]: value
        })
        this.props.onSearch(this.state.search)
    }

    render() {
        return (
            <div className='table-foods'>
                <p className='label-food'>Manage Foods</p>
                <div className='add-and-search'>
                    <button className='add-food' onClick={this.onShowAddFoodForm}>Add Food</button>
                    <div className='search-box'>
                        <input type='text' className='search-item' name='search' value={this.state.search} onChange={this.handleChange} placeholder='Click to search by food name'/>
                        <i className='fas fa-search search-item'></i>
                    </div>
                </div>
                <table>
                    <tbody>
                        <tr className='header'>
                            <th className='sn-th'>S.N.</th>
                            <th  className='title-th'>Name</th>
                            <th className='description-th'>Description</th>
                            <th className='image-th'>Image</th>
                            <th className='category-th'>Category</th>
                            <th className='price-th'>Price</th>
                            <th>Active</th>
                            <th className='action-th'>Action</th>
                        </tr>
                        {this.getData()}
                    </tbody>
                </table>
                {this.props.foods.length === 0 && <p className='no-data'>No data found!</p>}
            </div>
        );
    }
}

export default Table