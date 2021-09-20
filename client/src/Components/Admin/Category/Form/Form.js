import React from 'react'
import './Form.scss'
import API from '../../../../API/ConnectAPI'
class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            title: '',
            image: '/Images/Categories/pizza.jpg',
            feature: 1,
            active: 0,
        }
    }

    componentDidMount(){
        this.setState({
            id: this.props.data_category ? this.props.data_category.id : '',
            title: this.props.data_category ? this.props.data_category.title : '',
            feature: this.props.data_category ? this.props.data_category.feature : 0,
            active: this.props.data_category ? this.props.data_category.active : 0,
        })
    }

    hideAddCategory = ()=>{
        this.props.onCloseForm()
    }

    handleChange = async (e)=>{
        const {name, value} = e.target
        await this.setState(()=>{
            console.log('1');
            return{
            [name]: e.target.type === 'radio' ? parseInt(value):value
        }})
    }

    handleSubmit = async (e)=>{
        e.preventDefault()
        const url = this.props.method === 'POST' ? 'http://localhost:4000/categories' : `http://localhost:4000/categories/${this.state.id}`
        const data = await API(this.props.method, url, this.state)
        this.props.onSubmit(data, this.state.id)
    }

    render() {
        return (
            <div className={'add-category-background'}>
                <div className='add-category'>
                    <div className='header'>
                        <i className="fas fa-times" onClick={this.hideAddCategory}></i>
                    </div>
                    <p className='banner'>{this.state.id === '' ? 'Add Category' : 'Update Category'}</p>
                    <div className='body' >
                        <form onSubmit={this.handleSubmit} encType='multipart/form-data'>
                            <div className='elm'>
                                <p className='label'>Title: </p>
                                <input type='text' name='title' className='' value={this.state.title} onChange={this.handleChange}/>
                            </div>
                            <div className='elm elm-files'>
                                <p>Image:</p>
                                <div className='upload-file'>
                                    <button ref={this.btnAddImg}>Choose image</button>
                                    <input type='file' name='image' onChange={this.HandleChangeFile}/>
                                </div>
                            </div>
                            <div className='elm elm-col'>
                                <div className='column'>
                                    <p>Feature:</p>
                                    <div className='check-radio'>
                                        <input type='radio' name='feature' value={1} onChange={this.handleChange} checked={this.state.feature}/>
                                        <label>Yes</label>
                                    </div>
                                    <div className='check-radio'>
                                        <input type='radio' name='feature' value={0} onChange={this.handleChange} checked={!this.state.feature}/>
                                        <label>No</label>
                                    </div>
                                </div>
                                <div className='column'>
                                    <p>Active:</p>
                                    <div className='check-radio'>
                                        <input type='radio' name='active' value={1} onChange={this.handleChange} checked={this.state.active}/>
                                        <label>Yes</label>
                                    </div>
                                    <div className='check-radio'>
                                        <input type='radio' name='active' value={0} onChange={this.handleChange} checked={!this.state.active}/>
                                        <label>No</label>
                                    </div>
                                </div>
                            </div>
                            <div className='elm'>
                                <input type='submit'/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form