import React from 'react';

export default function Card(props) {
    return (
        <body className='body'>
            <div className="wrapper">
                <div className="card">
                    <img src={props.img} alt='CardImage' />
                    <div className="info">
                        <h5>{props.titulo}</h5>
                        <a href={props.linkedin} Target="_blank" className="ButtonCard">LinkedIn</a><br/>
                        <a href={props.github} Target="_blank" className="ButtonCard">GitHub</a>
                    </div>
                </div>
            </div>
        </body>
    );
}
