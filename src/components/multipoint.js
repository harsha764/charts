import React from 'react';
import Highcharts from 'highcharts';
class MultiPoint extends React.Component {
  constructor(){
    super();
    this.state = {
      data:[[48, 73],[56, 42]]
    }
    this.addCoordinates = this.addCoordinates.bind(this);
  }
  componentDidMount() {
    this.highChartsRender();
  }

  highChartsRender() {
    const addCoordinates = this.addCoordinates;
    Highcharts.chart('graphdiv', {
      chart: {
        type: 'scatter',
        margin: [70, 50, 60, 80],
        events: {
          click: function (e) {
            var x = Math.round(e.xAxis[0].value),
              y = Math.round(e.yAxis[0].value);
              addCoordinates(x,y);
          }
        }
      },
      title: {
        text: 'Inserting Multi-Points Inbetween Points'
      },
      subtitle: {
        text: 'Click the plot area to add a point. Click a point to remove it.'
      },
      xAxis: {
        gridLineWidth: 1,
        minPadding: 0.2,
        maxPadding: 0.2,
        maxZoom: 60
      },
      yAxis: {
        title: {
          text: 'Value'
        },
        minPadding: 0.2,
        maxPadding: 0.2,
        maxZoom: 60,
        plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
        }]
      },
      legend: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      plotOptions: {
        series: {
          lineWidth: 1,
          point: {
            events: {
              click: function () {
                if (this.series.data.length > 1) {
                  this.remove();
                }
              }
            }
          }
        }
      },
      series: [{
        data: this.state.data
      }]
    });
  }

  addCoordinates=(x,y)=> {
    let data = this.state.data;
    let ab = [x,y];
    data.push(ab);
    data.sort( function (a,b) {
      if (a[0] > b[0]) return  1;
      if (a[0] < b[0]) return -1;
      if (a[2] > b[2]) return  1;
      if (a[2] < b[2]) return -1;
      return 0;
  });
    this.setState({
      data:data
    })
    this.highChartsRender();
  }
  render() {
    return (
      <div>
        <div id="graphdiv">
        </div>
      </div>
    );
  }
}
export default MultiPoint;
