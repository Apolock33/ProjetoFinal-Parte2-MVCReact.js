import React, { Component } from 'react';
import './Home.css';
import Footer from '../../Footer'



export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div className='HomePage'>
                <section className='TextoPaiHome'>
                    <div className='Titulo1Home'>
                        <h1>Viva a Diferenca!</h1>
                    </div>
                    <p className='Texto1Home'>
                        Através do nosso site você fica informado sobre tudo relacionado a prática esportiva para Pessoas Com Deficiência, até mesmo se desejar competir, você pode checar nossa pagina com locais avaliados e informações disponiveis para o seu tipo de deficiência, pode marcar visita nesses mesmos locais, ou, se quiser praticar em outros locais que não estejam na lista, pode simplesmente verificar informações voltadas para o esporte que deseja conhecer.
                    </p>
                </section>
                <section className='TextoMaeHome'>
                    <div className='Titulo1Home'>
                        <h1>Descubra Mais!</h1>
                    </div>
                    <p className='Texto1Home'>
                        Aqui você tambem pode ficar informado das noticias mais atuais no mundo do esporte paraolimpico e adaptado. Visite nossa sessão de noticias para saber os mais recentes acontecimentos. Você também pode conferir nosso rodapé. Lá se encontram os horários de atendimento que nosso site possui, e clicando nos simbolos você pode acessar nossas redes sociais e saber mais sobre nossa iniciativa e melhorias que pretendemos fazer.
                    </p>
                </section>
                <section className='Noticias'>
                    <div className='Divisor'>
                        <h1>Noticias</h1>
                    </div>
                    <section>
                        
                    </section>
                </section>
                <footer>
                    <Footer/>
                </footer>
            </div>
        );
    }
}
