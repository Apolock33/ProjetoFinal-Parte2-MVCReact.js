import React, { Component } from 'react';
import ImagemCapaLocais from '../../Assets/Img/basquete-deficientes.jpg';

export default class Locais extends Component {
    render() {
        return (
            <div>
                <div className='CapaLocais'>
                    <img src={ ImagemCapaLocais } />
                </div>
                <div className='Cards'>

                </div>
            </div>
        );
    }
}