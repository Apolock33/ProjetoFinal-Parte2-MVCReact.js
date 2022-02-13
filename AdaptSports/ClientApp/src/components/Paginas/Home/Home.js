import React, { Component } from 'react';
import '../Home/Home.css'


export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <img className='HomePage' src='~/../Assets/Img/img-home.jpg' alt='homeimg' />
            </div>
        );
    }
}
