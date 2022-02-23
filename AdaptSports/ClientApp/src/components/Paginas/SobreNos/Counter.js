import Card from '../../CardSobre/Card';
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

          <div className="DivisorSobre">
            <h1>Sobre Nos</h1>
          </div>
          
          <section className="textsobrenos">
            <div className="textDir">
              <h2>Para quem?</h2>
              <p>O site é direcionado para Pessoas Com Deficiência interessadas na prática de atividades físicas e esportivas.</p>
            </div>
            <div className='imgsobre'>
              <img  src={Img1} alt='img1'/>
            </div>
          </section>

          <section className="textsobrenos">
            <div className='imgsobre'>
              <img src={Img2} alt='img2' />
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

          <section className="textsobrenos">
            <div className="textDir">
              <h2>O que define uma pessoa com deficiencia (PcD)?</h2>
              <p>É uma PcD quem tem uma dessas limitações(física, intelectual, visual ou auditiva).Se uma  pessoa tiver mais de um tipo
                de deficiência, chamamos de deficiência múltipla.</p>
            </div>
            <div className='imgsobre'>
              <img  src={Img3} alt='img3' />
            </div>
          </section>

          <section className="textsobrenos">
            <div className='imgsobre'>
              <img src={Img4} alt='img4' />
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

          <section className="textsobrenos">
            <div className="textDir">
              <h2>Como?</h2>
              <p>Consultando o nosso site você pode acessar informações sobre tudo relacionado a prática esportiva para Pessoas Com
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
              </p>
            </div>
            <div className='imgsobre'>
              <img src={Img5} alt='img5' />
            </div>
          </section>

        </div>

        <section className="squad">
          <h1>#SQUAD 12</h1>
        </section>


        <section className="car">
          <Card
            img={ImgCarlos} 
            titulo='Carlos Alberto M M Gomes'
            linkedin='https://www.linkedin.com/in/carlos-alberto-m-m-gomes-868204124/'
            github='https://github.com/Apolock33'
          /><br /><br />
          <Card
            img={ImgTati} 
            titulo='Tatina Maroto'
            linkedin='https://www.linkedin.com/in/tatiana-santos-129085222/'
            github='https://github.com/Tatiana3090'
            /><br /><br />
          <Card
            img={ImgEmanuel} 
            titulo='Tatina Maroto'
            linkedin='https://www.linkedin.com/in/emanuel-cleiton-3273971ab/'
            github='https://github.com/emanuel-cleiton'
            /><br /><br />
        </section>

        <section className="car">
          <Card
            img={ImgErica} 
            itulo='Erica Graciano Moreira'
            linkedin='https://br.linkedin.com/in/erica-graciano-moreira-14216111a'
            github='https://github.com/EricaG12'
          /><br /><br />
          <Card
            img={ImgPatrick} 
            itulo='Patrick Baldez'
            linkedin='https://www.linkedin.com/in/patrick-baldez-298064213/'
            github='https://github.com/BaldezPatrick'
          /><br /><br />
          <Card
            img={ImgVictor} 
            itulo='Victor Persike'
            linkedin='https://www.linkedin.com/in/victor-persike-78515b71/'
            github='https://github.com/vcpersike'
            /><br /><br />
        </section>

        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
}