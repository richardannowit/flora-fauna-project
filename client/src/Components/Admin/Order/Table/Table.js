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
                        <p>{food.title}</p>
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
                        <p>{food.amount}</p>
                    </td>
                    <td>
                        <p>{food.feature ? 'Yes' : 'No'}</p>
                    </td>
                    <td>
                        <p>{food.active ? 'Yes' : 'No'}</p>
                    </td>
                    <td>
                        <button className='btn btn-update' onClick={()=>{this.onShowUpdateFoodForm(food)}}>Update</button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className='table-foods'>
                <p className='label-food'>Manage Foods</p>
                <button className='add-food' >Add food</button>
                <table>
                    <tbody>
                        <tr className='header'>
                            <th className='sn-th'>S.N.</th>
                            <th  className='title-th'>Title</th>
                            <th className='description-th'>Description</th>
                            <th className='image-th'>Image</th>
                            <th className='price-th'>Price</th>
                            <th>Amount</th>
                            <th>Featured</th>
                            <th>Active</th>
                            <th className='action-th'>Action</th>
                        </tr>
                        {/* {this.getData()} */}
                    </tbody>
                </table>
            </div>

        );
    }
}

export default Table