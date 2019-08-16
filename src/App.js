import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Pie from './components/pie';
import Multichart from './components/multichart';
import MultiPoint from './components/multipoint';
import ZoomTypeMaps from './components/largepoints_zoom';
import negativeBarChart from './components/negative_barchart';

class App extends React.Component {
  render() {
    return (
      <Router>
        <ul>
            <li>
              <Link to="/pie">Pie Chart (Slide 15)</Link>
            </li>
            <li>
              <Link to="/multichart">Multichart (Slide 16)</Link>
            </li>
            <li>
              <Link to="/add_multiple_points">Multi Point</Link>
            </li>
            <li>
              <Link to="/zoom_type_graph">ZoomTypeChart Point</Link>
            </li>
            <li>
              <Link to="/negative_values">Negaive Bar Chart</Link>
            </li>
          </ul>
        <Route exact path="/pie" component={Pie} />
        <Route exact path="/multichart" component={Multichart} />
        <Route exact path="/add_multiple_points" component={MultiPoint} />
        <Route exact path="/zoom_type_graph" component={ZoomTypeMaps} />
        <Route exact path="/negative_values" component={negativeBarChart} />
       
       </Router>
    );
  }
}
export default App;
