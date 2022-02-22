import Card from '../../CardHome/Card';
import Footer from '../../Footer';
import React, { Component } from 'react';

import ImgCarlos from '../../Assets/Img/carlos.jpeg';
import ImgTati from '../../Assets/Img/tati.jpeg';
import ImgEmanuel from '../../Assets/Img/emanuel].jpeg'
import ImgErica from '../../Assets/Img/erica.jpeg'
import ImgPatrick from '../../Assets/Img/patrick].jpeg'
import ImgVictor from '../../Assets/Img/victor.jpeg'
import Img1 from '../../Assets/Img/Ativo 1.svg'
import Img2 from '../../Assets/Img/ativo4.svg'
import Img3 from '../../Assets/Img/img 1.svg'
import Img4 from '../../Assets/Img/img 2.svg'
import Img5 from '../../Assets/Img/img4.svg'
import './Sobre.css';



export class Counter extends Component {
  static displayName = Counter.name;

  render() {
    return (
      <div>
        <div className="principal">
          <section className="text">
            <div className="textDir">
              <h2>Para quem?</h2>
              <p>O site é direcionado para Pessoas Com Deficiência interessadas na prática de atividades físicas e esportivas.</p>
            </div>
            <div>
              <img className="imgSobre" src={Img1} alt='img5'/>
            </div>
          </section>

          <section className="text">
            <div>
            <img className="imgSobre" src={Img2} alt='img1'/>
            </div>
            <div className="textEsq">
              <h2>O que e uma deficiencia?</h2>
              <p>A deficiência é uma limitação física, intelectual, visual ou auditiva que dificulta a realização de atividades, em
                comparação com pessoas sem deficiência.
                Pode ser de nascimento(quando a pessoa já nasce com a deficiência) ou adquirida(quando um acontecimento causa a
                deficiência, como uma doença ou acidente).
                Conforme o Instituto Brasileiro de Geografia e Estatística(IBGE), quase 24 % da população brasileira é PcD.</p>
            </div>
          </section>

          <section className="text">
            <div className="textDir">
              <h2>O que define uma pessoa com deficiencia (PcD)?</h2>
              <p>É uma PcD quem tem uma dessas limitações(física, intelectual, visual ou auditiva).Se uma  pessoa tiver mais de um tipo
                de deficiência, chamamos de deficiência múltipla.</p>
            </div>

            <div>
              <img className="imgSobre" src={Img3} alt='img2'/>
            </div>
          </section>

          <section className="text">
            <div>
              <img className="imgSobre" src={Img4} alt='img3'/>
            </div>

            <div className="textEsq">
              <h2>Por Que?</h2>
              <p>Se exercitar com regularidade gera diversos benefícios para a saúde física e mental e, além disso, melhora a
                qualidade de vida das pessoas.
                Os exercícios físicos podem trazer ainda mais benefícios para pessoas com deficiência. Praticar esportes melhora a
                condição cardiovascular, aprimora a força, a agilidade, a coordenação motora e o
                equilíbrio.
                Todas essas vantagens contribuem para o melhor conhecimento sobre o corpo e maior facilidade para a realização de
                atividades diárias.
                Além dos aspectos físicos, o esporte também cria oportunidades de socialização com outras pessoas e ajuda a dar mais
                independência para a pessoa com deficiência.
                A prática de exercícios contribui também com o psicológico, aumentando a autoconfiança e autoestima, o otimismo e a
                percepção de capacidade.</p>
            </div>
          </section>

          <section className="text">
            <div className="como">
              <h2>Como?</h2>
              Consultando o nosso site você pode acessar informações sobre tudo relacionado a prática esportiva para Pessoas Com
              Deficiência, desde atividades desportivas até
              mesmo atividades voltadas para competições.  Na página "locais avaliados" você se informa a respeito de contatos,
              horários, descrição dos ambientes e das atividades ofertadas e também pode marcar uma visita agendada.  Se
              quiser
              praticar exercícios físicos em
              outros locais que não estejam na lista, você pode simplesmente verificar informações voltadas para o esporte que deseja
              conhecer.
              É possível sugerir novos locais no mapa e também dispor do nosso maior diferencial, que é um
              esquema de "avaliação pelos usuários".  Nele você pode avaliar as instalações e ambientes livres, pode postar o seu
              depoimento a respeito da acessibilidade, hospitalidade e estrutura do local visitado,
              além de acrescentar vídeos e fotos para servirem de referência
              para o público PcD se orientar sobre a prática esportiva nesses locais de acordo com as suas necessidades.
            </div>

            <div>
              <img className="imgSobre" src={Img5} alt='img4'/>
            </div>
          </section>
        </div>

        <section className="squad">
          <h1>#SQUAD 12</h1>
        </section>


        <section className="car">
          <Card img={ImgCarlos}/>
          <Card img={ImgTati}/>
          <Card img={ImgEmanuel}/>
        </section>

        <section className="car">
          <Card img={ImgErica}/>
          <Card img={ImgPatrick}/>
          <Card img={ImgVictor}/>
        </section>

        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
}