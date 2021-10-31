import React, { Component } from 'react';
import Chart from 'react-google-charts';

const data = [
    ['Year', 'Logins', { row: 'style'}],
    ['2010', 5000, 'color: gray'],
    ['2011', 6100, 'color: #76A7FA'],
    ['2012', 7000, 'opacity: 0.2'],
    ['2013', 8300, 'stroke-color: #703503; stroke-width: 4; fill-color: #C5A5CF'],
    ['2014', 9100, 'stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2']
];

class GoogleChart extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div className="container mt-5">
            <h2>Google Column Chart for Login Sample Data </h2>
            <Chart 
                width={700}
                height={320}
                data={data}
                chartType="ColumnChart"
                loader={<div>Loading Chart...</div>}    
            />
            </div>
        );
    }
}

export default GoogleChart;