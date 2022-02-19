import React, { Component } from 'react';
import './Home.css';
import imgHome from '../../Assets/Img/img-home.jpg';
import Footer from '../../Footer'
import Card from '../../CardHome/Card';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <section className='HomePage'>
                <div className='TextoPaiHome'>

                    <div className='Titulo1Home' align='center'>
                        <h1>Viva a Diferenca!</h1>
                    </div>

                    <p className='Texto1Home'>
                        Através do nosso site você fica informado sobre tudo relacionado a prática esportiva para Pessoas Com Deficiência, até mesmo se desejar competir, você pode checar nossa pagina com locais avaliados e informações disponiveis para o seu tipo de deficiência e também pode verificar informações voltadas para o esporte que deseja conhecer.
                    </p>

                </div>

                <div className='TextoMaeHome'>
                    
                    <div className='Titulo2Home'>
                        <h1>Descubra Mais!</h1>
                    </div>

                    <p className='Texto2Home'>
                        Aqui você tambem pode ficar informado das noticias mais atuais no mundo do esporte paraolimpico e adaptado. Visite nossa sessão de noticias para saber os mais recentes acontecimentos. Você também pode conferir nosso rodapé. Lá se encontram os horários de atendimento que nosso site possui, e clicando nos simbolos você pode acessar nossas redes sociais e saber mais sobre nossa iniciativa e melhorias que pretendemos fazer.
                    </p>

                </div>

                <section className='Noticias' align='center'>
                    
                    <div className='Divisor'>
                        <h1>Noticias</h1>
                    </div>

                    <div className='Cards'>
                        <Card
                            className='CardHome'
                            titulo='Pratica de esportes e aliada de pessoas com deficiencia'
                            link='https://www.gaz.com.br/pratica-de-esportes-e-aliada-de-pessoas-com-deficiencia/'
                            img='https://www.gaz.com.br/packages/uploads/2021/09/Basquete-cadeira-de-rodas-pessoa-com-deficiencia-2.jpg'
                        /><br/>

                        <Card
                            className='CardHome'
                            titulo='Escola e meio de criancas conhecerem esporte, diz campeao paralimpico'
                            img='https://imagens.ebc.com.br/yjzt6Pd59HdOTujxnOVFqVxYmyA=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/005_1.jpg?itok=IT3RLnH2'
                            link='https://agenciabrasil.ebc.com.br/geral/noticia/2021-09/escola-e-meio-de-criancas-conhecerem-esporte-diz-campeao-paralimpico#'
                        /><br/>

                        <Card
                            className='CardHome'
                            titulo='Penalty apoia inclusao de deficientes visuais com nova camisa do Magnus Futsal'
                            img='https://maquinadoesporte.com.br/media/_versions/magnus_futsal_widelg.jpeg'
                            link='https://maquinadoesporte.com.br/outros/penalty-lanca-camisa-para-apoiar-inclusao-de-deficientes-visuais'
                        /><br/>
                    </div>

                </section>

                <footer>
                    <Footer />
                </footer>

            </section>
        );
    }
}
