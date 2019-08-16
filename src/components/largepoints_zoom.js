import React from 'react';
import Highcharts from 'highcharts';
class ZoomTypeMaps extends React.Component {
    constructor() {
        super();
        this.highChartsData = this.highChartsData.bind(this);
    }
    componentDidMount() {
        this.highChartsRender();
    }

    highChartsRender() {
        const highChartsData = this.highChartsData;
        Highcharts.chart('graphdiv', {
            chart: {
                type: 'column',
                zoomType: 'x'
            },
            title: {
                text: 'Size Wise Defect Analysis'
            },
            xAxis: {
                type: 'category',
                labels: {
                    rotation: -45,
                    style: {
                        fontSize: '12px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: '(Total Value)'
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                pointFormat: '<b>{point.y:.1f}</b>'
            },
            series: [{
                name: 'Recipe',
                point: {
                    events: {
                        click: function (e) {
                            // alert(e.point.name +' : ' + e.point.y);
                            highChartsData();
                        }
                    }
                },
                data: [
                    ['Shanghai', 24.2],
                    ['Beijing', 20.8],
                    ['Karachi', 14.9],
                    ['Shenzhen', 13.7],
                    ['Guangzhou', 13.1],
                    ['Istanbul', 12.7],
                    ['Mumbai', 12.4],
                    ['Moscow', 12.2],
                    ['São Paulo', 12.0],
                    ['Delhi', 11.7],
                    ['Kinshasa', 11.5],
                    ['Tianjin', 11.2],
                    ['Lahore', 11.1],
                    ['Jakarta', 10.6],
                    ['Dongguan', 10.6],
                    ['Lagos', 10.6],
                    ['Bengaluru', 10.3],
                    ['Seoul', 9.8],
                    ['Foshan', 9.3],
                    ['Tokyo', 9.3],
                    ['Shanghai1', 44.2],
                    ['Beijing1', 20.8],
                    ['Karachi1', 14.9],
                    ['Shenzhen1', 13.7],
                    ['Guangzhou11', 13.1],
                    ['Istanbul1', 12.7],
                    ['Mumbai1', 12.4],
                    ['Moscow1', 12.2],
                    ['São Paulo1', 12.0],
                    ['Delhi1', 11.7],
                    ['Kinshasa1', 11.5],
                    ['Tianjin1', 11.2],
                    ['Lahore1', 11.1],
                    ['Jakarta1', 10.6],
                    ['Dongguan1', 10.6],
                    ['Lagos1', 10.6],
                    ['Bengaluru1', 10.3],
                    ['Seoul1', 9.8],
                    ['Foshan1', 9.3],
                    ['Tokyo1', 9.3],
                    ['Shanghai2', 24.2],
                    ['Beijing2', 20.8],
                    ['Karachi2', 14.9],
                    ['Shenzhen2', 13.7],
                    ['Guangzhou12', 13.1],
                    ['Istanbul2', 12.7],
                    ['Mumbai2', 12.4],
                    ['Moscow2', 12.2],
                    ['São Paulo2', 12.0],
                    ['Delhi2', 11.7],
                    ['Kinshasa2', 11.5],
                    ['Tianjin2', 11.2],
                    ['Lahore2', 11.1],
                    ['Jakarta2', 10.6],
                    ['Dongguan2', 10.6],
                    ['Lagos2', 10.6],
                    ['Bengaluru2', 10.3],
                    ['Seoul2', 9.8],
                    ['Foshan2', 9.3],
                    ['Tokyo2', 9.3]
                ],
                dataLabels: {
                    enabled: true,
                    rotation: -90,
                    color: '#FFFFFF',
                    align: 'right',
                    format: '{point.y:.1f}', // one decimal
                    y: 10, // 10 pixels down from the top
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            }],
            credits: {
                enabled: false
            }
        });
    }


    highChartsData() {
        Highcharts.chart('data1', {
            chart: {
                zoomType: 'x'
            },
            title: {
                text: 'Defect Wise Analysis'
            },
            xAxis: [{
                categories: ['abc', 'asca', 'wwqw', 'gdg', 'hag', 'vvv',
                    'ddd', 'qwe', 'wer', 'ert', 'rrr', 'weg', 'aabc', 'assca', 'wwdqw', 'agdg', 'hadg', 'xvvv',
                    'dvdd', 'qwbe', 'wern', 'ertx', 'rrzr', 'wegn'],
                crosshair: true
            }],
            yAxis: [{ // Primary yAxis
                labels: {
                    format: '{value}',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                title: {
                    text: 'Total Value',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                }
            }, { // Secondary yAxis
                title: {
                    text: 'Defect % ',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                labels: {
                    format: '{value} ',
                    style: {
                        color: Highcharts.getOptions().colors[0]
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
                x: 120,
                verticalAlign: 'top',
                y: 100,
                floating: true,
                backgroundColor:
                    Highcharts.defaultOptions.legend.backgroundColor || // theme
                    'rgba(255,255,255,0.25)'
            },
            series: [{
                name: 'Defect',
                type: 'column',
                yAxis: 1,
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4,300],
            }, {
                name: 'Defect Percentage',
                type: 'line',
                data: [7.0, 16.9, 29.5, 34.5, 38.2, 41.5, 42.2, 46.5, 50.3, 60.3, 61.9, 69.6, 76.9, 89.5, 88.5, 90.2, 91.5, 93.2, 95.5, 97.3, 98.3, 99, 99.9, 100],
            }],
            creadits: {
                enabled: false
            }
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
export default ZoomTypeMaps;
