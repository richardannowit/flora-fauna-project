import axios from 'axios'
import React from 'react'
import './Table.scss'

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
                        <img src={food.image} alt=''/>
                    </td>
                    <td>
                        <p>{food.category}</p>
                    </td>
                    <td>
                        <p>{food.price}</p>
                    </td>
                    <td>
                        <p>{food.active ? 'Yes' : 'No'}</p>
                    </td>
                    <td>
                        <button className='btn btn-update' onClick={()=>{this.onShowUpdateFoodForm(food)}}><i className="fas fa-pen"></i> Update</button>
                        <button className='btn btn-delete' onClick={()=>{this.handleDeleteFood(food)}}><i className="fas fa-eraser"></i> Delete</button>
                    </td>
                </tr>
            )
        })
    }

    onShowAddFoodForm = () =>{
        this.props.onShowAddFoodForm()
    }

    onShowUpdateFoodForm = (food)=>{
        this.props.onShowUpdateFoodForm(food)
    }

    handleDeleteFood = async (food) =>{
        const bool = window.confirm('Do you want to delete?')
        if(bool){
            await axios({
                method: 'DELETE',
                url: `http://localhost:4000/foods/${food.id}`,
                data: 'null'
            })
            .then(()=>{console.log('SUCCESS')})
            .catch((err)=>console.log(err))
            this.props.onDelete(food.id)
        }
        
    }

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
                {this.props.foods.length === 0 && <p>No data found!</p>}
            </div>

        );
    }
}

export default Table