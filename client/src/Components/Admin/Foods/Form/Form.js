import React from 'react'
import './Form.scss'

class Form extends React.Component {

    constructor(props) {
        super(props)
        this.state ={
            id: '',
            title: '',
            price: 0,
            description: '',
            amount: 0,
            feature: 0,
            active: 0 ,
            image: ''
        }
        this.btnAddImg = React.createRef();
    }

    componentDidMount() {
        if(this.props.data_food)
            this.setState({
                id: this.props.data_food.id,
                title: this.props.data_food.title,
                price: this.props.data_food.price,
                description: this.props.data_food.description, 
                amount: this.props.data_food.amount,
                feature: this.props.data_food.feature,
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

    handleSubmit = (e)=>{
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div className='add-food-background'>
                <div className='add-food'>
                    <div className='header'>
                        <i className="fas fa-times" onClick={this.onHideAddFoodForm}></i>
                    </div>
                    <p className='banner'>Add Food</p>
                    <div className='body'>
                        <form className='' action='' onSubmit={this.handleSubmit} encType='multipart/form-data' method='POST'>
                            <div className='elm'>
                                <p>Title:</p>
                                <input type='text' name='title' value={this.state.title} onChange={this.handleChange}/>
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
                                    <p>Amount:</p>
                                    <input type='number' name='amount' min={0} value={this.state.amount} onChange={this.handleChange}/>
                                </div>
                                <div className='column'>
                                    <p>Price:</p>
                                    <input type='number' name='price' min={0} value={this.state.price} onChange={this.handleChange}/>
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