import React from 'react';

import Card from '../components/Card';

import {WeatherCurrent} from '../helpers/WeatherCurrent';

class CardContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            cityVal: 'Loading...',
            description: '',
            tempVal: 0,
            windSpeedVal: 0,
            cloudinessVal: 0,
            humidityVal: 0,
            isLoading: true
        }
    }

    getWeatherInfo(query) {
        var currentWeather = WeatherCurrent(query);

        currentWeather.then((res) => {
            this.setState({
                cityVal: res.data.name,
                description: res.data.weather[0].description,
                tempVal: parseInt(res.data.main.temp),
                windSpeedVal: parseInt(res.data.wind.speed),
                cloudinessVal: parseInt(res.data.clouds.all),
                humidityVal: parseInt(res.data.main.humidity),
                isLoading: false
            });
        });
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((pos) => {
            this.getWeatherInfo(`weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`);
        });

        // this.getWeatherInfo('weather?q=' + this.state.location);
    }

    render() {
        return (
            <div className="container">
                <Card
                    isLoading={this.state.isLoading}
                    cityVal={this.state.cityVal}
                    description={this.state.description}
                    tempVal={this.state.tempVal}
                    windSpeedVal={this.state.windSpeedVal}
                    cloudinessVal={this.state.cloudinessVal}
                    humidityVal={this.state.humidityVal} />
            </div>
        )
    }
}

export default CardContainer;
