import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
// import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    console.log(cityData);
    const name = cityData.city.name;
    const id = cityData.city.id;
    const country = cityData.city.country;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    const f =
      (9 / 5) * (temps.reduce((a, c) => a + c) / temps.length - 273) + 32;
    const c = temps.reduce((a, c) => a + c) / temps.length - 273;

    return (
      <tr key={id}>
        <td>{`${name}, ${country}`}</td>
        {/* <td>
          <GoogleMap lon={lon} lat={lat} />
        </td> */}
        <td>
          <Chart data={temps} color="orange" units="K" f={f} c={c} />
        </td>
        <td>
          <Chart data={pressures} color="blue" units="hPa" />
        </td>
        <td>
          <Chart data={humidities} color="green" units="%" />
        </td>
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
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
