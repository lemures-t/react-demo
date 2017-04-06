import React , {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/the_chart';


class WeatherList extends Component {
  render(){
    return (

      <table className="table table-hover">
        <thead>
          <tr>
            <th>city</th>
            <th>temperature</th>
            <th>pressure</th>
            <th>humidity</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.weather.map((entry) => {
              return (
                <tr key={entry.city.name}>
                  <td>{entry.city.name}</td>
                  <td>
                    <Chart data={entry.list.map(weather => weather.main.temp )} unit = "K" color="orange"/>
                  </td>
                  <td>
                    <Chart data={entry.list.map(weather => weather.main.pressure )} unit = "hPa" color="green"/>
                  </td>
                  <td>
                    <Chart data={entry.list.map(weather => weather.main.humidity )} unit = "%" />
                  </td>
                </tr>
              )
            })
          }
        </tbody>

      </table>

    )
  }
}


/*function mapStateToProps(state){
  return {weather = state.weather}
}*/
function mapStateToProps({weather}){
  return {weather}
}

export default connect(mapStateToProps)(WeatherList);
