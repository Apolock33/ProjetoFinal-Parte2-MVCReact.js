import React from 'react';
import './Card.css'

export default function Card(props) {    
    return (
        <body className='body'>
            <div className="wrapper">
                <div className="card">
                    <img src={props.img} alt='CardImage' />
                    <div className="info">
                        <h1 className='tituloCardHome'>{props.titulo}</h1>
                        <p>{props.texto}</p>
                    </div>
                </div>
            </div>
        </body>
    );
}
