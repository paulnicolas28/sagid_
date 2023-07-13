import React from 'react'
import './summary-box.scss'
import Box from '../box/Box'
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar'
import { colors } from '../../constants'
import { Line, Bar, Doughnut, Radar, PolarArea } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    RadarController,
    RadialLinearScale,
    ArcElement
    
} from 'chart.js'

import { Button } from '@mui/material'
import CircleBox from "./CircleBox";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    RadarController, 
    RadialLinearScale,
    ArcElement
    
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
            <div className='summary-box'>
                <div className="summary-box__info__indicateur">
                <div className="summary-box__info__indicateur__title">
                    <CircleBox item={item}/>
                </div>
                <div className="summary-box__info__indicateur__value">
                {item.title}
                </div>
                </div>
            </div>
    )
}
export const SummaryBoxNotes = ({ item }) => {
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

export const SummaryBoxNotesBtn = ({ item }) => {
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
                <Button variant="contained" color="success">+</Button>
            </div>
        </Box>
    )
}



export const SummaryBoxSpecialGES = ({ item }) => {
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
                borderColor: 'blue',
                tension: 0.5,
                backgroundColor: '#FF9066',

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
export const SummaryBoxSpecialEconomique = ({ item, widthGiven }) => {
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
                 borderColor: 'blue',
                 tension: 0.5,
                 backgroundColor: '#6fa8dc',
 
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
                     <Bar options={chartOptions} data={chartData} width={widthGiven} />
                 </div>
             </div>
         </Box>
     )
 }

export const SummaryBoxSpecialEcosystemique = ({ item, widthGiven}) => {
    const chartData = {
        labels: [
          'Fonction de maintien de la matière organique et de la qualité du sol',
          'Fonction de maintien de la biodiversité',
          'Fonction hydrologique',
          'Fonction brise-vent et diminution des températures',
          'Fonction de stockage du carbone',
          "Fonction de régulation de la qualité de l'air",
          'Fonction de régulation des nuisances et des risques naturels'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: item.chartData.data,
          fill: true,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(255, 159, 64)'
          ],
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        },]
      };
  
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
        },
    }
    
     return (
         <Box>
             <div className="summary-box-special">
                 <div className="summary-box-special__chart">
                     <PolarArea options={chartOptions} data={chartData} width={widthGiven} />
                 </div>
             </div>
         </Box>
     )
 }


export default SummaryBox
