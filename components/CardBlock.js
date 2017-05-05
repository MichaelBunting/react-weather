import React from 'react';

const CardBlock = (props) => {
    return (
        <div className="card__block">
            <div className="card__block-title">
                {props.title}
            </div>

            <div className="card__block-val">
                {props.value} <sup>{props.unit}</sup>
            </div>
        </div>
    )
}

export default CardBlock;
