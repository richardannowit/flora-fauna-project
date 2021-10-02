import React from 'react'
import './Home.scss'
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            totalCategories: 0,
            totalFoods: 0,
            totalOrder: 0,
            revenueGenerated: 0,
        }
    }

    render() {
        return (
            <div className='dashboard'>
                <p>DashBoard</p>
                <div className='main'>
                    <div className='elm'>
                        <p>{this.state.totalCategories}</p>
                        <p>Categories</p>
                    </div>
                    <div className='elm'>
                        <p>{this.state.totalFoods}</p>
                        <p>Foods</p>
                    </div>
                    <div className='elm'>
                        <p>{this.state.totalOrder}</p>
                        <p>Orders</p>
                    </div>
                    <div className='elm'>
                        <p>{this.state.revenueGenerated}</p>
                        <p>Revenue Generated</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home