import React, { Component } from 'react';
import SearchBar from '../containers/searchBar';
import WeatherList from '../containers/weatherList';
import './app.css';

export default class App extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                <WeatherList />
            </div>
        );
    }
}
