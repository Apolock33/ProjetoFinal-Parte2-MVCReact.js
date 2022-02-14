import React, { Component } from 'react';
import ImgLocais from '../../Assets/Img/basquete-deficientes.jpg';
import Card from '../../Card/Card'
import Footer from '../../Footer'

export default class Locais extends Component {
    render() {
        return (
            <div>
                <div className="Cards">
                    <div className="Card1">
                        <Card />
                    </div>
                    <div className="Card1">
                        <Card />
                    </div>
                    <div className="Card1">
                        <Card />
                    </div>
                </div>
                <footer>
                    <Footer/>
                </footer>
            </div>
        );
    }
}