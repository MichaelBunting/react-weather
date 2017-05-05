import React from 'react';

import CardBlock from './CardBlock';

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.isLoading) {
            console.log(this.props.weatherInfo);
        }

        return (
            <div className="card-container">
                {!this.props.isLoading ? (
                    <div className="card">
                        <div className="card__loc">
                            <h2 className="card__city">{this.props.weatherInfo.name}</h2>

                            <p className="card__condition">{this.props.weatherInfo.weather[0].description}</p>
                        </div>

                        <div className="card__block-container">
                            <CardBlock
                                title="Temperature"
                                value={parseInt(this.props.weatherInfo.main.temp)}
                                unit="&deg; F"/>

                            <CardBlock
                                title="Wind Speed"
                                value={parseInt(this.props.weatherInfo.wind.speed)}
                                unit="mph" />

                            <CardBlock
                                title="Cloudiness"
                                value={parseInt(this.props.weatherInfo.clouds.all)}
                                unit="%" />

                            <CardBlock
                                title="Humidity"
                                value={parseInt(this.props.weatherInfo.main.humidity)}
                                unit="%" />
                        </div>
                    </div>
                ) : (
                    <div>
                        Loading...
                    </div>
                )}
            </div>
        )
    }
}

export default Card;
