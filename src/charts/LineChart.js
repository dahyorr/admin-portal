import React from 'react'
import {Chart, registerables} from "chart.js";
Chart.register(...registerables)
const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
    }]
};

const config = {
    type: 'line',
    data,
    options: {
        responsive: true
    }
};


class LineChart extends React.Component {
    chartRef = React.createRef();
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
                <canvas ref={this.chartRef} id="lineChart">
                </canvas>
            </>
            )
    }

}

export default LineChart
