import React from 'react';

import CardBlock from './CardBlock';

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card-container">
                <div className="card">
                    {this.props.isLoading ? (
                        <div className="card__preloader">
                            <div className="card__preloader-content">
                                Loading
                                <div className="card__preloader-loader"></div>
                            </div>
                        </div>
                    ) : ''}

                    <div className="card__loc">
                        <h2 className="card__city">
                            {this.props.cityVal}
                            {/* {this.props.weatherInfo.name} */}
                        </h2>

                        <p className="card__condition">
                            {
                                this.props.description ?
                                this.props.description :
                                "Description"
                            }
                            {/* {this.props.weatherInfo.weather.description} */}
                        </p>
                    </div>

                    <div className="card__block-container">
                        <CardBlock
                            title="Temperature"
                            value={this.props.tempVal}
                            // value={parseInt(this.props.weatherInfo.main.temp)}
                            unit="&deg; F"/>

                        <CardBlock
                            title="Wind Speed"
                            value={this.props.windSpeedVal}
                            // value={parseInt(this.props.weatherInfo.wind.speed)}
                            unit="mph" />

                        <CardBlock
                            title="Cloudiness"
                            value={this.props.cloudinessVal}
                            // value={parseInt(this.props.weatherInfo.clouds.all)}
                            unit="%" />

                        <CardBlock
                            title="Humidity"
                            value={this.props.humidityVal}
                            // value={parseInt(this.props.weatherInfo.main.humidity)}
                            unit="%" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;
