import React from 'react';

import Card from '../components/Card';

import {WeatherCurrent} from '../helpers/WeatherCurrent';

class CardContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            location: "Litit,PA",
            weatherInfo: {},
            isLoading: true
        }
    }

    getWeatherInfo(query) {
        var currentWeather = WeatherCurrent(query);

        currentWeather.then((res) => {
            this.setState({
                weatherInfo: res.data,
                isLoading: false
            });
        });
    }

    componentDidMount() {
        this.getWeatherInfo('weather?q=' + this.state.location);
    }

    render() {
        return (
            <div className="container">
                <Card
                    location={this.state.location}
                    weatherInfo={this.state.weatherInfo}
                    isLoading={this.state.isLoading} />
            </div>
        )
    }
}

export default CardContainer;
