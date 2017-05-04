import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.isLoading) {
            console.log(this.props.weatherInfo);
        }

        return (
            <div className="card">
                {!this.props.isLoading ? (
                    <div>
                        <div className="card__loc">
                            <h2 className="card__city">{this.props.weatherInfo.name}</h2>
                            <p className="card__country">{this.props.weatherInfo.sys.country}</p>
                        </div>

                        <div className="card__block">
                            <div className="card__block-title">
                                Temperature
                            </div>

                            <div className="card__block-val">
                                {this.props.weatherInfo.main.temp} <sup>&deg; F</sup>
                            </div>
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
