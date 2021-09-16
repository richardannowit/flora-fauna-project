import React from 'react'
import './Form.scss'
class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            title: '',
            image: '',
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

    render() {
        return (
            <div className={'add-category-background'}>
                <div className='add-category'>
                    <div className='header'>
                        <i className="fas fa-times" onClick={this.hideAddCategory}></i>
                    </div>
                    <p className='banner'>Add Category</p>
                    <div className='body' >
                        <form action='' method='POST' className='' encType='multipart/form-data'>
                            <div className='elm'>
                                <p className='label'>Title: </p>
                                <input type='text' name='title' className='' value={this.state.title} onChange={this.handleChange}/>
                            </div>
                            <div className='elm'>
                                <p className='label'>Image: </p>
                                <input type='file' name='image-category'/>
                            </div>
                            <div className='elm radio'>
                                <div className='radio-checked' >
                                    <p className='label'>Featured:</p>
                                    <div>
                                        <div>
                                            <input type='radio' name='feature' value={1} onChange={this.handleChange} checked={this.state.feature}/>
                                            <label>Yes</label>
                                        </div>
                                        <div>
                                            <input type='radio' name='feature' value={0} onChange={this.handleChange} checked={!this.state.feature}/>
                                            <label>No</label>
                                        </div> 
                                    </div>
                                </div>
                                <div className='radio-checked'>
                                    <p className='label'>Active:</p>
                                    <div>
                                        <div>
                                            <input type='radio' name='active' value={1} onChange={this.handleChange} checked={this.state.active}/>
                                            <label>Yes</label>
                                        </div>
                                        <div>
                                            <input type='radio' name='active' value={0} onChange={this.handleChange} checked={!this.state.active}/>
                                            <label>No</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <input  className='elm' type='submit' name='submit-category'/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form