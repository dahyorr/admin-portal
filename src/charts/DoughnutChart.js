import React from 'react'
import {Chart, registerables} from "chart.js";
Chart.register(...registerables)

const data = {
    labels: [
        'Red',
        'Blue',
        'Yellow'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
};

const config = {
    type: 'doughnut',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Sample Doughnut Chart'
            }
        },
        aspectRatio: 2,
    },
};


class DoughnutChart extends React.Component {
    chartRef = React.createRef('doughnutChart');
    componentDidMount() {
        this.chart = new Chart(this.chartRef.current, config)
    }
    componentDidUpdate(){
        this.chart.destroy()
        this.chart = new Chart(this.chartRef.current, config)
    }
    componentWillUnmount(){
        this.chart.destroy()
    }

    render(){
        return(
            <>
                <canvas ref={this.chartRef} id="doughnutChart">

                </canvas>
            </>
            )
    }

}

export default DoughnutChart
