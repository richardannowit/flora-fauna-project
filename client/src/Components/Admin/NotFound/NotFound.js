import React from 'react'
import './NotFound.scss'

class NotFoundItem extends React.Component {
    render(){
        return (
            <div className='not-found'>
                <img src='/Images/Error/404-error.svg' alt=''/>
                <h1>This is not webpage you are looking for!</h1>
            </div>
        )
    }
}

export default NotFoundItem