import React from 'react'
import './Table.scss'
import API from '../../../../API/ConnectAPI'

class Table extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            search: ''
        }
    }

    getData(){
        return this.props.categories.map((category, idx)=>{
            return (
                <tr className='data' key={idx}>
                    <td>{idx+1}</td>
                    <td>{category.category_name}</td>
                    <td><img src={category.image} alt=''/></td>
                    <td>
                        <button className='btn btn-update' onClick={()=>{this.props.onClickToUpdateCategory(category)}}><i className="fas fa-pen"></i>Update</button>
                        <button className='btn btn-delete' onClick={()=>{this.HandleDeleteCategory(category.id)}}><i className="fas fa-eraser"></i>Delete</button>
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

    HandleDeleteCategory = (id) =>{
        const confirm = window.confirm('Do you want to delete?')
        if(confirm){
            const data = API('DELETE', `http://localhost:4000/categories/${id}`, this.state)
            this.props.onDelete(data, id)
        }
    }

    handleChange = (e) =>{
        const  {value, name} =  e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className='table-categories'>
                <p className='label-category'>Categories Manager</p>
                <div className='add-and-search'>
                    <button className='add-category' onClick={this.onClickAddCategory}>Add Category</button>
                    <div className='search-box'>
                        <input type='text' className='search-item' name='search' value={this.state.search} onChange={this.handleChange} placeholder='Click to search'/>
                        <i className='fas fa-search search-item'></i>
                    </div>
                </div>
                <table>
                    <tbody>
                        <tr className='header'>
                            <th className='sn-th'>S.N.</th>
                            <th className='title-th'>Category name</th>
                            <th className='image-th'>Image</th>
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