import React from 'react'
import { getCategories, getFoods, getOrderStatistic } from '../API/ConnectAPI'
import Chart from '../Charts/Chart'
import './Home.scss'
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            ordersBar: {
                chartData: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [{
                        label: 'Revenue (VND thousand)',
                        data: [],
                        backgroundColor: [
                            '#23b6ff'
                        ]
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                    plugins: {
                        title: {
                            display: 'true',
                            text: 'Orders Chart',
                            font: {
                                size: 20
                            }
                        }
                    },
                    scales: {
                        y: {
                            suggestedMin: 0,
                            suggestedMax: 100000
                        }
                    }
                },
                height: 500,
                width: 1000, 
                float: 'left'
            },
            dataOrderStatistic: [],
            ordersTotal: 0,
            food_quantity: 0,
            category_quantity: 0,
            food_active_quantity: 0
        }
    }

    handleSubmitChart = async (value)=>{
        const ordersStatistic = await getOrderStatistic(value, localStorage.getItem('accessToken'))
        const data = ordersStatistic.data
        const ordersBar ={
            ...this.state.ordersBar,
            chartData: {
                ...this.state.ordersBar.chartData,
                datasets:[
                    {
                        ...this.state.ordersBar.chartData.datasets[0],
                        data
                    }
                ]
            }
        }
        await this.setState({ordersBar})
        await this.setState({ordersTotal: data.reduce((previousValue, currentValue, )=>previousValue+=currentValue, 0)*1000})
    }

    async componentDidMount() {
        document.title = 'Admin | Home'
        const category = await getCategories(1000000, 0)
        const food = await getFoods(100000, 0)
        this.setState({food_active_quantity: food.data.length > 0 ? food.data.reduce((pre, current)=> current.active !== 0 ? pre=pre+1 : pre, 0): 0})
        this.setState({category_quantity: category.data.length, food_quantity: food.data.length})
    }

    render() {
        const Currency = new Intl.NumberFormat('vi-VI', {
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 2
        })
        return (
            <div className='dashboard'>
                <p>DashBoard</p>
                <div className='statistical orders-statistical'>
                    <h2 className='statistical-title orders-statistical-title'>Orders Statistics</h2>
                    <div className='orders-chart'>
                        <Chart total={Currency.format(this.state.ordersTotal)} onSubmitChart={this.handleSubmitChart} chart={this.state.ordersBar} />
                    </div>
                </div>
                <div className='statistical categories-statistical'>
                    <h2 className='statistical-title categories-statistical-title'>Categories Statistics</h2>
                    <div className='statistical-content'>
                        <div>Categories Quantity<p>{this.state.category_quantity}</p></div>
                        <div>Active Quantity<p>{this.state.category_quantity}</p></div>
                    </div>
                </div>
                <div className='statistical foods-statistical'>
                    <h2 className='statistical-title foods-statistical-title'>Foods Statistics</h2>
                    <div className='statistical-content'>
                        <div>Foods Quantity<p>{this.state.food_quantity}</p></div>
                        <div>Active Quantity<p>{this.state.food_active_quantity}</p></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home