import React from 'react';
import './Card.css'
import { Link } from 'react-router-dom';
import imgCard from '../Assets/Img/b3.jpg'

export default function Card(props) {
    return (
        <body className='body'>
        <div className="wrapper">
            <div className="card">
                <img src={props.img} alt='CardImage' />
                <div className="info">
                    <h1>{props.titulo}</h1>
                    <p>{props.texto}</p>
                    <Link to='/' className="ButtonCard">Saiba Mais</Link>
                </div>
            </div>
            </div>
        </body>
    );
}
