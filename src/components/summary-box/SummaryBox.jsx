import React from 'react'
import './summary-box.scss'
import Box from '../box/Box'
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar'
import { colors } from '../../constants'
import { Line, Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    
)

const SummaryBox = ({ item }) => {
    return (
        <Box>
            <div className='summary-box'>
                <div className="summary-box__info">
                    <div className="summary-box__info__title">
                        <div>{item.title}</div>
                    </div>
                    <div className="summary-box__info__value">
                        {item.value}
                    </div>
                </div>
            </div>
        </Box>
    )
}


export const SummaryBoxIndicateurs = ({ item }) => {
    return (
        <Box>
            <div className='summary-box'>
                <div className="summary-box__info__indicateur">
                <div className="summary-box__info__indicateur__title">
                    {item.value}
                </div>
                <div className="summary-box__info__indicateur__value">
                {item.title}
                </div>
                </div>
            </div>
        </Box>
    )
}



export const SummaryBoxNotes = ({ item }) => {
    return (
        <Box>
            <div className='summary-box'>
                <div className="summary-box__info">
                    <div className="summary-box__info__title">
                        <div> Score de {item.value}</div>
                    </div>
                    <div className="summary-box__info__value">
                        {item.title}
                    </div>
                </div>
            </div>
        </Box>
    )
}


export const SummaryBoxSpecial = ({ item }) => {
    const chartOptions = {
        responsive: true,
        scales: {
            xAxis: {
                display: false
            },
            yAxis: {
                display: false
            }
        },
        plugins: {
            legend: {
                display: false
            }
        },
        elements: {
            point: {
                radius: 0
            }
        }
    }

    const chartData = {
        labels: item.chartData.labels,
        datasets: [
            {
                label: 'Revenue',
                data: item.chartData.data,
                borderColor: '#fff',
                tension: 0.5
            }
        ]
    }
    return (
        <Box>
            <div className="summary-box-special">
                <div className="summary-box-special__title">
                    {item.title}
                </div>
                <div className="summary-box-special__value">
                    {item.value}
                </div>
                <div className="summary-box-special__chart">
                    <Bar options={chartOptions} data={chartData} width={`250px`} />
                </div>
            </div>
        </Box>
    )
}

export default SummaryBox
