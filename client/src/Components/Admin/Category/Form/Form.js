import React from 'react'
import './Form.scss'
import API from '../../../../API/ConnectAPI'
import uniqid from 'uniqid'
class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            category_name: '',
            image: '/Images/Categories/pizza.jpg',
        }
    }

    generateId = ()=> {
        return `c-${Math.floor(Math.random() * 10000)}-${uniqid()}-${Math.floor(Math.random() * 10000)}-${uniqid()}`
    }

    async componentDidMount(){
        if(this.props.data_category) {
            await this.setState({
                id: this.props.data_category.id,
                category_name: this.props.data_category.category_name,
                active: this.props.data_category.active
            })
        }
    }

    hideAddCategory = ()=>{
        this.props.onCloseForm()
    }

    handleChange = async (e)=>{
        const {name, value} = e.target
        await this.setState(()=>({
            [name]: e.target.type === 'radio' ? parseInt(value):value
        }))
    }

    handleSubmit = async (e)=>{
        e.preventDefault()
        const url = this.props.method.match(/post/i) ? 'http://localhost:4000/categories' : `http://localhost:4000/categories/${this.state.id}`
        const data = await API(this.props.method, url, this.state)
        this.props.onSubmit(data, this.props.method, this.state.id)
        alert('Add Successfully')
        this.setState({
            id: '',
            category_name: '',
            image: '/Images/Categories/pizza.jpg',
        })
    }

    render() {
        return (
            <div className={'add-category-background'}>
                <div className='add-category'>
                    <p className='banner'>{this.state.id === '' ? 'Add Category' : 'Update Category'}</p>
                    <div className='body' >
                        <form onSubmit={this.handleSubmit} encType='multipart/form-data'>
                            <div className='elm'>
                                <p className='label'>Category name: </p>
                                <input type='text' name='category_name' required value={this.state.category_name} onChange={this.handleChange}/>
                            </div>
                            <div className='elm elm-files'>
                                <p>Image:</p>
                                <div className='upload-file'>
                                    <button ref={this.btnAddImg}>Choose image</button>
                                    <input type='file' name='image' onChange={this.HandleChangeFile}/>
                                </div>
                            </div>
                            <div className='elm elm-col'>
                                <input type='submit' className='btn' value={this.state.id === '' ? 'Add':'Update'}/>
                                <input type='button' className='btn btn-primary' value='Cancel' onClick={this.hideAddCategory}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form