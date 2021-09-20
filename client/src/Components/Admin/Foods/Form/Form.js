import React from 'react'
import './Form.scss'
import axios from 'axios'
class Form extends React.Component {

    constructor(props) {
        super(props)
        this.state ={
            id: '',
            name: '',
            price: 0,
            description: '',
            active: 0 ,
            image: '/Images/Products/menu-burger.jpg'
        }
        this.btnAddImg = React.createRef();
    }

    componentDidMount() {
        if(this.props.data_food)
            this.setState({
                id: this.props.data_food.id,
                name: this.props.data_food.name,
                price: this.props.data_food.price,
                description: this.props.data_food.description, 
                active:  this.props.data_food.active
            })
    }

    onHideAddFoodForm = ()=> {
        this.props.onHideAddFoodForm()
    }

    handleChange= async (e)=>{
        const {name, value} = e.target
        await this.setState(()=>{
            return{
            [name]: e.target.type === 'radio' || e.target.type === 'number' ? parseInt(value):value,
        }})
    }

    HandleChangeFile = (e)=>{
        const {files} = e.target
        this.btnAddImg.current.innerHTML = files[0].name
    }

    handleSubmit = async (e)=>{
        e.preventDefault()
        const res = await axios({
            method: this.props.method,
            url: this.props.method === 'PUT' ? `http://localhost:4000/foods/${this.state.id}`: `http://localhost:4000/foods`,
            data: this.state
        })
        .then(res=>{
            console.log('1')
            alert('Add Successfully')
            return res.data
        })
        .catch(err=>{
            console.log(err)
        })
        console.log('2')
        this.props.onSubmit(res, this.props.method, this.state.id)
    }

    render() {
        return (
            <div className='add-food-background'>
                <div className='add-food'>
                    <div className='header'>
                        <i className="fas fa-times" onClick={this.onHideAddFoodForm}></i>
                    </div>
                    <p className='banner'>{this.state.id === '' ? 'Add Food' : 'Update Food'}</p>
                    <div className='body'>
                        <form onSubmit={this.handleSubmit} encType='multipart/form-data'>
                            <div className='elm'>
                                <p>Title:</p>
                                <input type='text' name='name' required value={this.state.name} onChange={this.handleChange}/>
                            </div>
                            <div className='elm elm-textarea'>
                                <p>Description:</p>
                                <textarea name='description'  value={this.state.description} onChange={this.handleChange}/>
                                {/* <input type='text' name='description' value={this.state.description} onChange={this.handleChange}/> */}
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
                                    <p>Price:</p>
                                    <input type='number' name='price' required min={0} value={this.state.price} onChange={this.handleChange}/>
                                </div>             
                            </div>
                            <div className='elm elm-col'>
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