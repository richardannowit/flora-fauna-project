import React, {useState} from 'react'
import {Bar} from 'react-chartjs-2'
import SelectTag from '../SelectTag/SelectTag'

export default function Chart(props) { 

    const [year] = useState([2020, 2021, 2022, 2023, 2024, 2025])

    const getOptionYear = (value)=>{
        props.onSubmitChart(value)
    }

    const styleOrderTotal = {
        marginLeft: '30px',
        fontSize: '20px',
        color: '#777777',
        lineHeight: '40px',
        fontWeight: 'bold',
        width: '290px',
        textAlign: 'center',
    }

    return (
        <div className='chart-form'>
            <div className='row-select' style={{width: '100%', display: 'flex', justifyContent: 'center', height: '40px', alignItems: 'center', marginBottom: '20px'}}>
                <div style={{width:'290px'}}>
                    <SelectTag default_value={new Date().getFullYear()} onSubmit={getOptionYear} option={year}/>
                </div>
                <p className='order-totals' style={styleOrderTotal}>Orders Total: {props.total}</p>
            </div>
            <div className='home-chart'>
                <Bar
                    data={props.chart.chartData}
                    height={props.chart.height}
                    width={props.chart.width}
                    options={props.chart.options}
                />
            </div>
        </div>
    ) 
} 