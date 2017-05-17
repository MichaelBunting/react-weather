import React from 'react';
import PropTypes from 'prop-types';

import CardBlock from './CardBlock';

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.onDelete = this.onDelete.bind(this);
    }

    onDelete() {
        this.context.removeCard(this.props.blockName);
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

                    <div
                        className="card__delete"
                        onClick={this.onDelete}>
                        &times;
                    </div>

                    <div className="card__loc">
                        <h2 className="card__city">
                            {this.props.cityVal}
                        </h2>

                        <p className="card__condition">
                            {
                                this.props.description ?
                                this.props.description :
                                "Description"
                            }
                        </p>
                    </div>

                    <div className="card__block-container">
                        <CardBlock
                            title="Temperature"
                            value={this.props.tempVal}
                            unit="&deg; F"/>

                        <CardBlock
                            title="Wind Speed"
                            value={this.props.windSpeedVal}
                            unit="mph" />

                        <CardBlock
                            title="Cloudiness"
                            value={this.props.cloudinessVal}
                            unit="%" />

                        <CardBlock
                            title="Humidity"
                            value={this.props.humidityVal}
                            unit="%" />
                    </div>
                </div>
            </div>
        )
    }
}

Card.contextTypes = {
    removeCard: PropTypes.func
}

export default Card;
