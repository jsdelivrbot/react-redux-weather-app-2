import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map'

class WeatherList extends Component {

  renderWeather(cityData) {

    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const humiditys = cityData.list.map(weather => weather.main.humidity);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const { lon, lat } = cityData.city.coord

    return (
      <tr key={name}>
        <td><GoogleMap lng={lon} lat={lat} /></td>
        <td><Chart color="orange" data={temps} units="K" /></td>
        <td><Chart color="grey" data={humiditys} units="%" /></td>
        <td><Chart color="purple" data={pressures} units="hPa" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Humidity (%)</th>
            <th>Pressure (hPa)</th>
          </tr>
        </thead>
        <tbody>
        {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }

}

function mapStateToProps({ weather }) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList)
