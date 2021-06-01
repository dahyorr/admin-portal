import React from 'react'
import {Chart, registerables} from "chart.js";
Chart.register(...registerables)

const data = {
    labels: [
        'Eating',
        'Drinking',
        'Sleeping',
        'Designing',
        'Coding',
        'Cycling',
        'Running'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 90, 81, 56, 55, 40],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
        label: 'My Second Dataset',
        data: [28, 48, 40, 19, 96, 27, 100],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
};

const config = {
    type: 'radar',
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
        elements: {
            line: {
                borderWidth: 3
            }
        }
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
