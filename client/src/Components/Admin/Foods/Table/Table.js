import axios from 'axios'
import React from 'react'
import './Table.scss'

class Table extends React.Component {

    getData() {
        return this.props.foods.map((food, idx) => {
            return (
                <tr className='data' key={idx}>
                    <td>
                        <p>{idx+1}</p>
                    </td>
                    <td>
                        <p>{food.name}</p>
                    </td>
                    <td >
                        <p style={{textAlign: 'justify'}}>{food.description}</p>
                    </td>
                    <td>
                        <img src={food.image} alt=''/>
                    </td>
                    <td>
                        <p>{food.price}</p>
                    </td>
                    <td>
                        <p>{food.active ? 'Yes' : 'No'}</p>
                    </td>
                    <td>
                        <button className='btn btn-update' onClick={()=>{this.onShowUpdateFoodForm(food)}}>Update</button>
                        <button className='btn btn-delete' onClick={()=>{this.HandleDeleteFood(food)}}>Delete</button>
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

    HandleDeleteFood = (food) =>{
        axios({
            method: 'DELETE',
            url: `http://localhost:4000/foods/${food.id}`,
            data: 'null'
        })
        .then(()=>{console.log('SUCCESS')})
        .catch((err)=>console.log(err))
        this.props.onDelete(food.id)
    }

    render() {
        return (
            <div className='table-foods'>
                <p className='label-food'>Manage Foods</p>
                <button className='add-food' onClick={this.onShowAddFoodForm}>Add food</button>
                <table border>
                    <tbody>
                        <tr className='header'>
                            <th className='sn-th'>S.N.</th>
                            <th  className='title-th'>Name</th>
                            <th className='description-th'>Description</th>
                            <th className='image-th'>Image</th>
                            <th className='price-th'>Price</th>
                            <th>Active</th>
                            <th className='action-th'>Action</th>
                        </tr>
                        {this.getData()}
                    </tbody>
                </table>
            </div>

        );
    }
}

export default Table