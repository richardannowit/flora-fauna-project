import React from 'react'
import './Form.scss'

class Form extends React.Component {
    render() {
        return (
            <div className='add-food-background'>
                <div className='add-food'>
                    <div className='header'>
                        <i></i>
                    </div>
                    <p className='banner'>Add Food</p>
                    <div className='body'>
                        <form className='' action='' encType='multipart/form-data' method='POST'>
                            <div className='elm'>
                                <p>Title:</p>
                                <input type='text' name='' onChange={this.handleChange}/>
                            </div>
                            <div className='elm'>
                                <p>Description:</p>
                                <input type='text' name='' onChange={this.handleChange}/>
                            </div>
                            <div className='elm'>
                                <p>Image:</p>
                            </div>
                            <div className='elm'>
                                <p>Amount</p>
                                <input type='text' name='' onChange={this.handleChange}/>
                            </div>
                            <div className='elm'>
                                <p>Price</p>
                                <input type='text' name='' onChange={this.handleChange}/>
                            </div>
                            <div className='elm'>
                                <div className='radio-checked'>
                                    <p>Feature</p>
                                    <div>
                                        <div>
                                            <input type='radio' name='feature'/>
                                            <label>Yes</label>
                                        </div>
                                        <div>
                                            <input type='radio' name='feature'/>
                                            <label>No</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='radio-checked'>
                                    <p>Active</p>
                                    <div>
                                        <div>
                                            <input type='radio' name='active'/>
                                            <label>Yes</label>
                                        </div>
                                        <div>
                                            <input type='radio' name='active'/>
                                            <label>No</label>
                                        </div>
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