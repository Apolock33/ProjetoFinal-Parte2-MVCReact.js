import React from 'react';
import './Card.css'

export default function Card(props) {
    return (
        <div className="Cards">
            <div className="Card">
                <img className="imgCard" src={props.image} alt='imgCard' />
            </div>
        </div>
    );
}
