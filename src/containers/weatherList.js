import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart/chart';
import GoogleMap from '../components/googleMap/googleMap';

class WeatherList extends Component {

    renderWeather(cityData) {
        const { name } = cityData.city;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const { lon, lat } = cityData.city.coord;
        console.log(temps);
        return (
            <tr key={name}>
                <td><GoogleMap lat={lat} lon={lon}/></td>
                <td><Chart data={temps} color="orange" units="º F"/></td>
                <td><Chart data={pressures} color="green" units="hPa"/></td>
                <td><Chart data={humidity} color="purple" units="%"/></td>
            </tr>
        );
    }

    render() {
        return (
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.weather.map(this.renderWeather.bind(this))}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);