import React, { Component } from "react";
import "./Locais.css";
import ImgCard1 from "../../Assets/Img/deficiente-basquete.jpg";
import ImgCard2 from "../../Assets/Img/basquete-deficientes.jpg";
import ImgCard3 from "../../Assets/Img/deficiente-lider-de-torcida.jpg";
import Card from "../../CardLocais/Card";
import Footer from "../../Footer";
import Carrossel from "../../Carrossel";
import Modal from "../../Modal/Modal";
import Modal2 from "../../Modal2/Modal"
import Modal3 from "../../Modal3/Modal"

export default class Locais extends Component {
  render() {
    return (
      <div align="center" className="Alinha">
        <div className="DivisorLocais ">
          <h1>Locais</h1>
        </div>
        <div className="text">
          <h6>
            Aqui você encontra informações como: endereço, equipes, esportes
            disponiveis e muito mais. Tudo isso para praticar esporte adaptado
            com o maximo de conforto, informação e facilidade possiveis
          </h6>
        </div>
        <div className="Carrossel">
          <Carrossel img1={ImgCard1} img2={ImgCard2} img3={ImgCard3} />
        </div>

        <div className="DivisorLocais">
          <h1>Descubra</h1>
        </div>

        <div className="cardslocais">

          <section className="cardemodal" align='center'>
            <Card className="CardLocal"
              img={ImgCard1}
              titulo='Add - Associacao Desportiva Para Deficientes' /><br />
            <div className="Modal">
              <Modal />
            </div>
          </section>

          <section className="cardemodal" align='center'>
            <Card className="CardLocal"
              img={ImgCard2}
              titulo='Escola Paralimpica de Esportes' /><br />
            <div className="Modal">
              <Modal2 />
            </div>
          </section>

          <section className="cardemodal" align='center'>
            <Card className='CardLocal'
              img={ImgCard3}
              titulo='Corinthians ABRATOP  - Associacao Brasileira de Triathlon Olimpico e Paralimpico'
            /><br />
            <div className="Modal" align="center">
              <Modal3 />
            </div>
          </section>

        </div>

        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
