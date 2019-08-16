import React from 'react';
import Highcharts from 'highcharts';
class negativeBarChart extends React.Component {

    componentDidMount() {
        this.highChartsRender();
    }

    highChartsRender() {
        Highcharts.chart('graphdiv', {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Bar chart with negative values'
            },
            xAxis: {
                categories: ['CURING', 'BUILDING', 'COMPONENT','COMPOUND'],

            },
            yAxis: {
                tickInterval: 1,
                title: { text: '' },
                
            },
            credits: {
                enabled: false
            },
            series: [
                {
                    showInLegend: false,
                },{
                data: [-1, 2, -2, 2]
            }, {
                data: [4, 2, 5, 2]
            }, {
                data: [3, 4, 3, 4]
            }],
            legend: {
                enabled: true
            },
        });
    }


    render() {
        return (
            <div className="container">
                <div id="graphdiv">
                </div>
            </div>
        );
    }
}
export default negativeBarChart;
