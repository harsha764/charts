import React from 'react';
import Highcharts from 'highcharts';
import { Pointer } from 'highcharts';
class Pie extends React.Component {
  constructor() {
    super();
    this.state = {
      Chrome: [147, 477, 11, 282, 188, 176, 135.6, 353, 23, 189, 437, 106],
      IE: [499.9, 48, 196, 249, 14, 300, 135.6, 344, 202, 80, 270, 63],
      Firefox: [10.9, 61.5, 186.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
      Edge: [158, 307, 73, 470, 33, 176.0, 314, 163, 331, 331, 121, 54.4],
      Safari: [31, 128, 65, 166, 389, 176, 135.6, 465, 48, 385, 324, 252],
    };
    this.highChartsData = this.highChartsData.bind(this);

  }

  componentDidMount() {
    this.highChartsRender();
  }

  highChartsRender() {
    const highChartsData = this.highChartsData;
    Highcharts.chart({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        renderTo: 'graphdiv',
      },
      title: {
        text: 'Pie Chart'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },
      
      series: [{
        cursor: Pointer,
        name: 'Brands',
        colorByPoint: true,
        point: {
          events: {
            click: function () {
              highChartsData(this.name,this.color);
            }
          }
        },
        data: [{
          name: 'Chrome',
          y: 60
        }, {
          name: 'IE',
          y: 20
        }, {
          name: 'Firefox',
          y: 10
        }, {
          name: 'Edge',
          y: 5
        }, {
          name: 'Safari',
          y: 5
        }]
      }],
      credits: {
        enabled: false
      },
    });
  }

  highChartsData(name,colors) {
    const relaventData = this.state[name];
    Highcharts.chart({
      colors:[colors],
      chart: {
        type: 'column',
        renderTo: 'data1'
      },
      title: {
        text: name
      },
      xAxis: {
         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Values',
          
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        }
      },
      series: [{
        name: 'TBM8',
        data: relaventData
      }],
      credits: {
        enabled: false
      },
    });
  }

  render() {
    return (
      <div className="container">
        <div id="graphdiv">
        </div>
        <div id="data1"></div>
      </div>
    );
  }
}
export default Pie;
