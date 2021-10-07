import React from 'react'
import { getCategories, getFoods } from '../API/ConnectAPI'
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
                        label: 'Revenue ($)',
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
                            suggestedMax: 140
                        }
                    }
                },
                height: 500,
                width: 1000, 
                float: 'left'
            },
            data: [
                    {
                        year: '2020',
                        data: [10, 54, 23, 4, 106, 0, 12, 24, 32, 45, 11, 8],
                    },
                    {
                        year: '2021',
                        data: [23, 76, 34, 28, 35, 12, 45, 32, 21, 0, 0, 0],
                    },
                    {
                        year: '2022',
                        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    },
                    {
                        year: '2023',
                        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    },
                    {
                        year: '2024',
                        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    },
                    {
                        year: '2025',
                        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    },
            ],
            ordersTotal: 0,
            food_quantity: 0,
            category_quantity: 0,
            food_active_quantity: 0
        }
    }

    handleSubmitChart = (value)=>{
        this.state.data.forEach(async elm => {
            if(parseInt(elm.year)===value){
                const datasets = [{
                    label: 'Revenue ($)',
                    data: elm.data,
                    backgroundColor: [
                        '#23b6ff'
                    ]
                }]
                const ordersBar ={
                    ...this.state.ordersBar,
                    chartData: {
                        ...this.state.ordersBar.chartData,
                        datasets
                    }
                }
                await this.setState({ordersBar})
                await this.setState({ordersTotal: elm.data.reduce((previousValue, currentValue, )=>previousValue+=currentValue, 0)})
            }
        })
    }

    async componentDidMount() {
        const category = await getCategories(localStorage.getItem('accessToken'))
        const food = await getFoods(localStorage.getItem('accessToken'))
        this.setState({food_active_quantity: food.data.length > 0 ? food.data.reduce((pre, current)=>current.active !== 0 ? pre++: pre, 0): 0})
        this.setState({category_quantity: category.data.length, food_quantity: food.data.length})
    }

    render() {
        const Currency = new Intl.NumberFormat('en-us', {
            style: 'currency',
            currency: 'USD',
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