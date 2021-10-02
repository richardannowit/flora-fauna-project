import React from 'react'
import './Form.scss'
import axios from 'axios'
class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            category_name: '',
            image: null,
        }
        this.btnAddImg = React.createRef()
    }

    //Updating state if updated form show  
    async componentDidMount(){
        if(this.props.data_category) {
            await this.setState({
                id: this.props.data_category.id,
                category_name: this.props.data_category.category_name,
                active: this.props.data_category.active
            })
        }
    }

    //Hide added form
    hideAddCategory = ()=>{
        this.props.onCloseForm()
    }

    //Update input items
    handleChange = async (e)=>{
        const {name, value} = e.target
        await this.setState(()=>({
            [name]: e.target.type === 'radio' ? parseInt(value):value
        }))
    }

    //Update image file
    handleChangeFile = async (e)=>{
        const file = e.target.files[0]
        this.btnAddImg.current.innerHTML = file.name
        await this.setState({image: file})
    }

    //Submit form
    handleSubmit = async (e)=>{
        e.preventDefault()
        const image = new FormData()
        image.append('image', this.state.image)
        const url = this.props.method.match(/post/i) ? 'http://localhost:8000/api/categories' : `http://localhost:4000/api/categories/${this.state.id}`
        const data = await axios({
            method: this.props.method,
            url,
            data: {
                category_name: this.state.category_name,
                image
            }
        })
        .then(res=>res.data)
        .catch(err=>err)
        this.props.onSubmit(data, this.props.method, this.state.id)
        alert('Add Successfully')
        await this.setState({
            id: '',
            category_name: '',
            image: null,
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
                                    <input type='file' name='image' onChange={this.handleChangeFile}/>
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