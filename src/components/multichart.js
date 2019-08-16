import React from 'react';
import Highcharts from 'highcharts';
class MultiChart extends React.Component {
  componentDidMount() {
    this.highChartsRender();
  }

  highChartsRender() {
    Highcharts.chart('graphdiv', {
        title: {
            text: 'Multi Chart',
            align: 'center'
        },
        xAxis: [{
            categories: [2018,'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec','jan 1','jan 2','jan 3','jan 4','jan 5','jan 6','jan 7','jan 8','jan 9',2019],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}',
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            },
            title: {
                text: 'Daily Production Count',
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            },
            opposite: true
    
        }, { // Secondary yAxis
            gridLineWidth: 0,
            title: {
                text: 'Monthly production Count',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '{value}',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            }
    
        }, { // Tertiary yAxis
            gridLineWidth: 0,
            title: {
                text: 'Yearly Production Count',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            labels: {
                format: '{value}',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 150,
            verticalAlign: 'top',
            y: 45,
            floating: true,
        },
        series: [{
            name: 'Monthly production Count',
            type: 'column',
            yAxis: 1,
            point: {
                events: {
                  click: function (e) {
                    alert(e.point.category + ' : ' + e.point.options.y );
                  }
                }
              },
            data: [490.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        }, {
            name: 'Yearly Production Count',
            type: 'column',
            yAxis: 2,
            point: {
                events: {
                  click: function (e) {
                    alert(e.point.category + ' : ' + e.point.options.y);
                  }
                }
              },
            data: [[21,10000]],
            marker: {
                enabled: false
            }
        }, {
            name: 'Daily Production Count',
            type: 'spline',
            point: {
                events: {
                  click: function (e) {
                    alert(e.point.category + ' : ' + e.point.options.y);
                  }
                }
              },
            data: [[12,500],[13,800],[14,900],[15,990],[16,850],[17,800],[18,900],[20,100]],
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        floating: false,
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom',
                        x: 0,
                        y: 0
                    }
                }
            }]
        }
    });
  }
  
  render() {
    return (
        <div id="graphdiv" >
        </div>
    );
  }
}
export default MultiChart;
