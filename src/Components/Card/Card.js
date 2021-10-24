import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <>
            <div className={props.cardClass} data-testid='card' style={{backgroundColor: props.cardColor, color: props.textColor}}>{props.cardText}</div>
        </>
    )
}

export default Card;