import React from 'react'
import './Table.scss'

class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            foods:[
                {
                    id: '',
                    title: 'Pizza',
                    price: 10,
                    description: 'The description The description The description The description The description The description The description',
                    image: '',
                    amount: 20,
                    feature: 1,
                    active: 1  
                },
                {
                    id: '',
                    title: 'Sandwich',
                    price: 20,
                    description: 'The description The description The description The description The description The description The description',
                    image: '',
                    amount: 90,
                    feature: 1,
                    active: 0  
                },
                {
                    id: '',
                    title: 'Chicken',
                    price: 30,
                    description: 'The description The description The description The description The description The description The description',
                    image: '',
                    amount: 30,
                    feature: 0,
                    active: 1  
                },
                {
                    id: '',
                    title: 'Burger',
                    price: 70,
                    description: 'The description The description The description The description The description The description The description',
                    image: '',
                    amount: 20,
                    feature: 1,
                    active: 1  
                },
                {
                    id: '',
                    title: 'Pizza',
                    price: 50,
                    description: 'The description The description The description The description The description The description The description',
                    image: '',
                    amount: 60,
                    feature: 0,
                    active: 0  
                },
                {
                    id: '',
                    title: 'Burger',
                    price: 20,
                    description: 'The description The description The description The description The description The description The description',
                    image: '',
                    amount: 80,
                    feature: 0,
                    active: 1  
                },
                {
                    id: '',
                    title: 'Pizza',
                    price: 30,
                    description: 'The description The description The description The description The description The description The description',
                    image: '',
                    amount: 20,
                    feature: 1,
                    active: 0  
                }
            ]
        }
    }

    getData() {
        return this.state.foods.map((food, idx) => {
            return (
                <tr className='data'>
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
                        <button class='btn btn-update'>Update</button>
                        <button class='btn btn-delete'>Delete</button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className='table'>
                <p className='label-food'>Manage Foods</p>
                <button  className='add-food'>Add food</button>
                <table>
                    <tbody>
                        <tr className='header'>
                            <th className='sn-th'>S.N.</th>
                            <th >Title</th>
                            <th className='description-th'>Description</th>
                            <th className='image-th'>Image</th>
                            <th className='price-th'>Price</th>
                            <th>Amount</th>
                            <th>Featured</th>
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