import React, { Component } from 'react';
import authService from '../../api-authorization/AuthorizeService'
import './esporte.css';
import Footer from '../../Footer'
import ImgBasquete from '../../Assets/Img/BasqueteAdaptado.jpg'
import ImgBadminton from '../../Assets/Img/BadmintonAdaptado.jpg'
import ImgCanoagem from '../../Assets/Img/canoagem_adaptada.jpg'
import ImgCiclismo from '../../Assets/Img/ciclismoAdaptado.jpg'
import ImgEsgrima from '../../Assets/Img/esgrimaAdaptada.jpg'
import ImgFutebol5 from '../../Assets/Img/futebol5Adaptado.jpg'
import ImgGoalboll from '../../Assets/Img/goalballAdaptado.jpg'
import ImgAtletismo from '../../Assets/Img/atletismoAdaptado.jpg'
import { Container } from 'reactstrap';


export class FetchData extends Component {
    static displayName = FetchData.name;

    render() {
        return (
            <Container>
                <main class="container">

                    <section class="esp">
                        <div>
                            <img className='card-img-top' src={ImgBadminton} alt='badminton'/>
                        </div>
                        <h6 className='tituloEsporte'>Badminton</h6>
                        <p>Uma das duas modalidades estreantes na Paralimpíada, o parabadminton é disputado por atletas que utilizam uma raquete para golpear uma peteca na quadra dos adversários. As partidas são disputadas em uma melhor de três sets, com pontuação mínima de 21. Para vencer a parcial é necessária uma vantagem de, no mínimo, dois pontos até chegar à pontuação máxima de 30.
                            As disputas ocorrem individualmente ou em duplas (masculinas, femininas ou mistas), e os atletas são divididos em seis classes.</p>
                        <button class="botao">Saiba mais</button>
                    </section>

                    <section class="esp">
                        <div>
                            <img className='card-img-top' src={ImgBasquete} alt='basquete'/>
                        </div>
                        <h6 className='tituloEsporte'>Basquete</h6>
                        <p>Praticado inicialmente por ex-soldados americanos que haviam participado da Segunda Guerra Mundial, o basquete em cadeira de rodas fez parte de todas as edições já realizadas dos Jogos Paralímpicos.
                            As cadeiras de rodas utilizadas por homens e mulheres são adaptadas e padronizadas pelas regras da Federação Internacional de Basquete em Cadeira de Rodas. O jogador deve quicar, arremessar ou passar a bola a cada dois toques dados na cadeira. As dimensões da quadra e a altura da cesta seguem o padrão do basquete olímpico. São disputados quatro quartos de 10 minutos cada um.</p>
                        <button class="botao">Saiba mais</button>
                    </section>

                    <section class="esp">
                        <div>
                            <img className='card-img-top' src={ImgCanoagem} alt='basquete' />
                        </div>
                        <h6 className='tituloEsporte'>Canoagem</h6>
                        <p>Esporte que estreou no programa paralímpico no Rio 2016, a canoagem é disputado por atletas com deficiência físico-motora dos dois sexos. A canoagem paralímpica possui provas divididas de acordo com o grau de deficiência de cada atleta em KL1, KL2 e KL3, do maior grau de comprometimento para o menor.
                            A classificação funcional da modalidade divide os competidores em grupos de acordo com o grau de movimentação dos membros inferiores, superiores e do tronco.</p>
                        <button class="botao">Saiba mais</button>
                    </section>

                    <section class="esp">
                        <div>
                            <img className='card-img-top' src={ImgCiclismo} alt='basquete' />
                        </div>
                        <h6 className='tituloEsporte'>Ciclismo</h6>
                        <p>Tradicional na competição, o ciclismo paralímpico é disputado em provas de pista no velódromo e de estrada e tem algumas diferenças do ciclismo olímpico. Os atletas são divididos em classes. As bicicletas são adaptadas conforme deficiência do atleta.</p>
                        <button class="botao">Saiba mais</button>
                    </section>

                    <section class="esp">
                        <div>
                            <img className='card-img-top' src={ImgEsgrima} alt='basquete' />
                        </div>
                        <h6 className='tituloEsporte'>Esgrima</h6>
                        <p>Assim como na esgrima, na modalidade adaptada as provas são com espada, sabre e florete, e o objetivo é o mesmo: vence que faz mais pontos a cada toque da ponta da arma no tronco do adversário.
                            Os atletas competem divididos em categorias. Na A estão atletas com mobilidade no tronco, amputados ou com limitações de movimento. Já aqueles com menos equilíbrio e reduzida mobilidade no tronco disputam na categoria B. Por fim, na categoria C, estão os tetraplégicos, com dificuldades nos movimentos do tronco, mãos e braços.</p>
                        <button class="botao">Saiba mais</button>
                    </section>

                    <section class="esp">
                        <div>
                            <img className='card-img-top' src={ImgFutebol5} alt='basquete' />
                        </div>
                        <h6 className='tituloEsporte'>Futebol de 5</h6>
                        <p>A Modalidade é exclusiva para cegos ou deficientes visuais. Os atletas disputam a partida vendados e se guiam pelo barulho da bola e por um guia que sinaliza com som onde fica o gol adversário. Cada time é formado por cinco jogadores – um goleiro e quatro na linha. O goleiro tem visão total e não pode ter participado de competições oficiais da Fifa nos últimos cinco anos.
                            As partidas, normalmente, são em uma quadra de futsal adaptada, mas, desde os Jogos Paralímpicos de Atenas 2004, também têm sido praticadas em campos de grama sintética.
                            Só os brasileiros subiram no lugar mais alto do pódio desde a introdução da modalidade no programa paralímpico, em 2004.</p>
                        <button class="botao">Saiba mais</button>
                    </section>

                    <section class="esp">
                        <div>
                            <img className='card-img-top' src={ImgGoalboll} alt='basquete' />
                        </div>
                        <h6 className='tituloEsporte'>Goalball</h6>
                        <p>O goalball é a única modalidade entre as 22 que integram a Paralimpíada de Tóquio que não é uma adaptação de um esporte olímpico. Ela foi criada logo após a Segunda Guerra Mundial pelo alemão Sepp Reindle e pelo austríaco Hanz Lorezen, para reabilitar veteranos que perderam a visão durante os combates. O esporte é voltado para cegos e pessoas com deficiência visual.
                            Com três de cada lado, os atletas lançam uma bola com sino para tentar marcar um gol na baliza do adversário, que tem 9m x 1,30m. A jogada deve ser rasteira ou tocar o solo pelo menos uma vez, em áreas obrigatórias, justamente para o guizo ser escutado. O jogo é disputado em dois tempos de 12 minutos, mas pode ser encerrado antes se uma das equipes chegar a dez gols de diferença no placar.</p>
                        <button class="botao">Saiba mais</button>
                    </section>

                    <section class="esp">
                        <div>
                            <img className='card-img-top' src={ImgAtletismo} alt='basquete' />
                        </div>
                        <h6 className='tituloEsporte'>Atletismo</h6>
                        <p>Nos Jogos Paralímpicos, o atletismo tem provas de corrida, saltos, lançamentos e arremessos. Elas são disputadas por atletas com deﬁciência física, visual ou intelectual. Os atletas são divididos de acordo com funcionalidade na prática esportiva</p>
                        <button class="botao">Saiba mais</button>
                    </section>


                </main>
                <footer>
                    <Footer />
                </footer>
            </Container>
        );
    }
}
