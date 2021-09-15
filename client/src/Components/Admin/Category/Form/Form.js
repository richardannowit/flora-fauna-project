import React from 'react'
import './Form.scss'
class Form extends React.Component {

    hideAddCategory = ()=>{
        this.props.onCloseForm()
        console.log(this.props.onCloseForm())
    }

    render() {

        const data = {
            id: this.props.data_category ? this.props.data_category.id : '',
            title: this.props.data_category ? this.props.data_category.title : '',
            feature: this.props.data_category ? this.props.data_category.feature : false,
            active: this.props.data_category ? this.props.data_category.active : false,
        }

        return (
            <div className={this.props.active ? 'add-category-background' : 'active'}>
                <div className='add-category'>
                    <div className='header'>
                        <i class="fas fa-times" onClick={this.hideAddCategory}></i>
                    </div>
                    <p className='banner'>Add Category</p>
                    <div className='body' >
                        <form action='' method='POST' className='' enctype='multipart/form-data'>
                            <div className='elm'>
                                <p className='label'>Title: </p>
                                <input type='text' name='title-category' className='' value={data.title}/>
                            </div>
                            <div className='elm'>
                                <p className='label'>Image: </p>
                                <input type='file' name='image-category'/>
                            </div>
                            <div className='elm radio'>
                                <div className='radio-checked'>
                                    <p className='label'>Featured:</p>
                                    <div>
                                        <div>
                                            <input type='radio' name='featured-category' checked={data.feature}/>
                                            <label>Yes</label>
                                        </div>
                                        <div>
                                            <input type='radio' name='featured-category' checked={!data.feature}/>
                                            <label>No</label>
                                        </div> 
                                    </div>
                                </div>
                                <div className='radio-checked'>
                                    <p className='label'>Active:</p>
                                    <div>
                                        <div>
                                            <input type='radio' name='active-category' checked={data.active}/>
                                            <label>Yes</label>
                                        </div>
                                        <div>
                                            <input type='radio' name='active-category' checked={!data.active}/>
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