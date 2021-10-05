import React from 'react'
import './Form.scss'
import {postFood, putFood} from '../../API/ConnectAPI'
class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            id: '',
            food_name: '',
            price: 0,
            description: '',
            active: 0 ,
            image_name: null,
            category: ''
        }
        this.btnAddImg = React.createRef()
    }

    //Updating form if updated form show
    componentDidMount() {
        if(this.props.data_food)
            this.setState({
                id: this.props.data_food.id,
                food_name: this.props.data_food.food_name,
                price: this.props.data_food.price,
                description: this.props.data_food.description, 
                active:  this.props.data_food.active,
                category: this.props.data_food.category
            })
        else{
            this.setState({
                category: this.props.categories[0].category_name
            })
        }
    }

    //Hide added form
    onHideAddFoodForm = ()=> {
        this.props.onHideAddFoodForm()
    }

    //Update input items
    handleChange= (e)=>{
        const {name, value} = e.target
        this.setState(()=>{
            return{
            [name]: e.target.type === 'radio' || e.target.type === 'number' ? parseInt(value):value,
        }})
    }

    //Update image file
    handleChangeFile = (e)=>{
        const file = e.target.files[0]
        this.btnAddImg.current.innerHTML = file.name
        this.setState({image: file})
    }

    //Submit form
    handleSubmit = async (e)=>{
        e.preventDefault()
        const image_name = new FormData()
        let data = []
        image_name.append('image_name', this.state.image)
        let data_submit = {
            ...this.state,
            image_name
        }
        if(this.props.method.match(/post/i)) {
            data = await postFood(data_submit)
        }else
            data = await putFood(this.state.id, data_submit)
        alert(data.message)
        this.props.onSubmit(data.data, this.props.method, this.state.id)
        await this.setState({
            id: '',
            food_name: '',
            price: 0,
            description: '',
            active: 0 ,
            image: null,
            category: ''
        })
    }

    render() {
        return (
            <div className='add-food-background'>
                <div className='add-food'>
                    <p className='banner'>{this.state.id === '' ? 'Add Food' : 'Update Food'}</p>
                    <div className='body'>
                        <form onSubmit={this.handleSubmit} encType='multipart/form-data'>
                            <div className='elm'>
                                <p>Title:</p>
                                <input type='text' name='food_name' required value={this.state.food_name} onChange={this.handleChange}/>
                            </div>
                            <div className='elm elm-textarea'>
                                <p>Description:</p>
                                <textarea name='description'  value={this.state.description} onChange={this.handleChange}/>
                            </div>
                            <div className='elm elm-files'>
                                <p>Image:</p>
                                <div className='upload-file'>
                                    <button ref={this.btnAddImg}>Choose image</button>
                                    <input type='file' name='image_name' onChange={this.handleChangeFile}/>
                                </div>
                            </div>
                            <div className='elm elm-col'>
                                <div className='col'>
                                    <p>Price:</p>
                                    <input type='number' name='price' required min={0} value={this.state.price} onChange={this.handleChange}/>
                                </div>
                                <div className='col'>
                                    <p>Category:</p>
                                    <select name='category' value={this.state.category} onChange={this.handleChange}>
                                        {this.props.categories.map((elm, idx)=>{
                                            return (<option value={elm.category_name} key={idx}>{elm.category_name}</option>)
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className='elm '>
                                <p>Active:</p>
                                <div className='col'>
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
                            <div className='elm elm-col'>
                                <input type='submit' className='btn' value={this.state.id === '' ? 'Add':'Update'}/>
                                <input type='button' className='btn btn-primary' value='Cancel' onClick={this.onHideAddFoodForm}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form