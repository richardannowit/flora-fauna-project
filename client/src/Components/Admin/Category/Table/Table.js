import React from 'react'
import './Table.scss'
import 'axios'
class Table extends React.Component {

    getData(){
        return this.props.categories.map((category, idx)=>{
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

    onClickAddCategory = () =>{
        this.props.onClickToAddCategory()
    }

    onClickUpdateCategory = (category) =>{
        this.props.onClickToUpdateCategory(category)
    }

    render() {
        return (
            <div className='table-categories'>
                <p className='label-category'>Categories Manager</p>
                <button className='add-category' onClick={this.onClickAddCategory}>Add Category</button>
                <table>
                    <tbody>
                        <tr className='header'>
                            <th className='sn-th'>S.N.</th>
                            <th className='title-th'>Title</th>
                            <th className='image-th'>Image</th>
                            <th >Featured</th>
                            <th>Active</th>
                            <th className='action-th'>Actions</th>
                        </tr>
                        {this.getData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table