import React from 'react'
import { Bar } from 'react-chartjs-2'
import Box from '../components/box/Box'
import DashboardWrapper, { DashboardWrapperMain, DashboardWrapperRight } from '../components/dashboard-wrapper/DashboardWrapper'
import SummaryBox, { SummaryBoxSpecial } from '../components/summary-box/SummaryBox'
import { colors, data } from '../constants'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import OverallList from '../components/overall-list/OverallList'
import RevenueList from '../components/revenue-list/RevenueList'
import EcoSystMainCard from '../components/ecosystemique/EcoSystMainCard'
import GESSmallCard from '../components/ges/GESSmallCard'
import EcoNomiqueSmallCard from '../components/economique/EcoNomiqueSmallCard'
import Entretien from '../form/Entretien'
import Sidebar from './Sidebar'


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const Dashboard = () => {
    return (
        <DashboardWrapper>
            <DashboardWrapperMain>
            <div className="row">
                    <div className="col-12">
                        <Box>
                            <EcoSystMainCard />
                        </Box>
                    </div>
            </div>
            <div className="row">
                    <div className="col-6">
                        <Box>
                            <EcoNomiqueSmallCard />
                        </Box>
                    </div>
                    <div className="col-6">
                        <Box>
                            <GESSmallCard />
                        </Box>
                    </div>

            </div>            

            </DashboardWrapperMain>
            <DashboardWrapperRight>
                <Sidebar/>
            </DashboardWrapperRight>
        </DashboardWrapper>
    )
}

export default Dashboard
/*const RevenueByMonthsChart = () => {
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: {
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
            yAxes: {
                grid: {
                    display: false,
                    drawBorder: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false
            }
        },
        elements: {
            bar: {
                backgroundColor: colors.orange,
                borderRadius: 20,
                borderSkipped: 'bottom'
            }
        }
    }

    const chartData = {
        labels: data.revenueByMonths.labels,
        datasets: [
            {
                label: 'Revenue',
                data: data.revenueByMonths.data
            }
        ]
    };
    return (
        <>
            <div className="title mb">
                Revenue by months
            </div>
            <div>
                <Bar options={chartOptions} data={chartData} height={`300px`} />
            </div>
        </>
    )
}*/

