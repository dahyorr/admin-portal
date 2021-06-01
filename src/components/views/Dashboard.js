import React from 'react'
import LineChart from '../../charts/LineChart'
import DoughnutChart from '../../charts/DoughnutChart'
import PieChart from '../../charts/PieChart'
import RadarChart from '../../charts/RadarChart'

const Dashboard = () => {
    return(
        <div className="Dashboard view">
            <h1>Dashboard</h1>
            <div className="counters-display">
                <div className="counter" style={{color: '#53D8FB'}}>
                    <h2>Reports</h2>
                    <span className="count">8</span>
                </div>
                <div className="counter" style={{color: '#D0021B'}}>
                    <h2>Issues</h2>
                    <span className="count">5</span>
                </div>
                <div className="counter" style={{color: '#0CCE6B'}}>
                    <h2>Reports</h2>
                    <span className="count">8</span>
                </div>
                <div className="counter" style={{color: '#1B4079'}}>
                    <h2>Active Users</h2>
                    <span className="count">10</span>
                </div>
            </div>
            
            <div className="chart-container">
                <div className="line-chart chart">
                <LineChart/>
                </div>
                <div className="doughnut-chart chart">
                    <DoughnutChart/>
                </div>
                <div className="pie-chart chart">
                    <PieChart/>
                </div>
                <div className="radar-chart chart">
                    <RadarChart/>
                </div>
            </div>

        </div>
    )
}
export default Dashboard