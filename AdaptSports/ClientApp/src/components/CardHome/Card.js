import React from 'react';
import { Link } from 'react-router-dom';

export default function Card(props) {
    return (
        <body className='body'>
            <div className="wrapper">
                <div className="card">
                    <img src={props.img} alt='CardImage' />
                    <div className="info">
                        <h6>{props.titulo}</h6>
                        <Link src={props.link} className="ButtonCard">Saiba Mais</Link>
                    </div>
                </div>
            </div>
        </body>
    );
}
