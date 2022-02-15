import React, { Component } from 'react';
import ImgCard1 from '../../Assets/Img/deficiente-basquete.jpg'
import ImgCard2 from '../../Assets/Img/basquete-deficientes.jpg'
import ImgCard3 from '../../Assets/Img/deficiente-lider-de-torcida.jpg'
import Card from '../../Card/Card'
import Footer from '../../Footer'
import Carrossel from '../../Carrossel'

export default class Locais extends Component {
    render() {
        return (
            <div>
                <div className="Carrossel">
                    <Carrossel
                        img1={ImgCard1}
                        img2={ImgCard2}
                        img3={ImgCard3}
                    />

                    <h1>Descubra!</h1>
                    <p>Aqui você encontra informações como: endereço, equipes, esportes disponiveis e muito mais. Tudo isso para praticar esporte adaptado com o maximo de conforto, informação e facilidade possiveis</p>
                </div>

                <div className='Divisor'>
                    <h1>Locais</h1>
                </div>

                <div className='Cards'>
                    <Card
                        className='CardHome'
                        titulo='ADD - Associacao desportiva para deficientes'
                        img={ImgCard1}
                    />

                    <Card
                        className='CardHome'
                        img={ImgCard2}
                    />

                    <Card
                        className='CardHome'
                        img={ImgCard3}
                    />
                </div>

                <footer>
                    <Footer />
                </footer>
            </div>
        );
    }
}