import React,{ Component } from "react";
import "./Locais.css";
import ImgCarr1 from "../../Assets/Img/deficiente-basquete.jpg";
import ImgCarr2 from "../../Assets/Img/basquete-deficientes.jpg";
import ImgCarr3 from "../../Assets/Img/deficiente-lider-de-torcida.jpg";
import ImgCard1 from "../../Assets/Img/add.jpg";
import ImgCard2 from "../../Assets/Img/basquete-deficientes.jpg";
import ImgCard3 from "../../Assets/Img/deficiente-lider-de-torcida.jpg"
import Card from "../../CardLocais/Card";
import Footer from "../../Footer";
import Carrossel from "../../Carrossel";
import Modal1 from "../../Modal1/Modal1";
import Modal2 from "../../Modal2/Modal2";
import Modal3 from "../../Modal3/Modal3"

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
          <Carrossel img1={ImgCarr1} img2={ImgCarr2} img3={ImgCarr3} /><br/>
        </div>

        <div className="DivisorLocais">
          <h1>Descubra</h1>
        </div>

        <div className="cardslocais" align="center">

          <section className="cardemodal">
            <Card className="CardLocal"
              img={ImgCard1}
              titulo='Add - Associacao Desportiva Para Deficientes' /><br />
            <div className="Modal">
              <Modal1 />
            </div>
          </section>

          <section className="cardemodal">
            <Card className="CardLocal"
              img={ImgCard2}
              titulo='JR-SP | ASSOCIACAO PARADESPORTIVA JR SP' /><br />
            <div className="Modal">
              <Modal2 />
            </div>
          </section>

          <section className="cardemodal">
            <Card className='CardLocal'
              img={ImgCard3}
              titulo='CESEC | CENTRO DE EMANCIPACAO SOCIAL E ESPORTIVA DE CEGOS'
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
