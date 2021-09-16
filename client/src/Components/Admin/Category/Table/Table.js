import React from 'react'
import './Table.scss'
class Table extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    id: '',
                    title: 'Burger',
                    image: '/Images/Categories/burger.jpg',
                    feature: 1,
                    active: 1,
                },
                {
                    id: '',
                    title: 'Momo',
                    image: '/Images/Categories/momo.jpg',
                    feature: 1,
                    active: 0,
                },
                {
                    id: '',
                    title: 'Pizza',
                    image: '/Images/Categories/pizza.jpg',
                    feature: 1,
                    active: 0,
                },
                {
                    id: '',
                    title: 'Momo',
                    image: '/Images/Categories/momo.jpg',
                    feature: 1,
                    active: 0,
                },
                {
                    id: '',
                    title: 'Burger',
                    image: '/Images/Categories/burger.jpg',
                    feature: 0,
                    active: 0,
                }
            ]
        }
    }

    onClickAddCategory = () =>{
        this.props.onClickToAddCategory()
    }

    onClickUpdateCategory = (category) =>{
        this.props.onClickToUpdateCategory(category)
    }

    getData(){
        return this.state.categories.map((category, idx)=>{
            return (
                <tr className='data' key={idx}>
                    <td>{idx+1}</td>
                    <td>{category.title}</td>
                    <td><img src={category.image} alt=''/></td>
                    <td>{category.feature ? 'Yes' : 'No'}</td>
                    <td>{category.active ? 'Yes' : 'No'}</td>
                    <td>
                        <button className='btn btn-update' onClick={()=>{this.props.onClickToUpdateCategory(category)}}>Update</button>
                        <button className='btn btn-delete' >Delete</button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className='table'>
                <p className='label-category'>Categories Manager</p>
                <button className='add-category' onClick={this.onClickAddCategory}>Add Category</button>
                <table>
                    <tbody>
                        <tr className='header'>
                            <th>S.N.</th>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Featured</th>
                            <th>Active</th>
                            <th>Actions</th>
                        </tr>
                        {this.getData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table