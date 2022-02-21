import React from 'react';
import './Modal.css';

export default function Modal3() {
    return (
        <body>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                Saiba Mais
            </button>

            <div className="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="tituloModal">CESEC | CENTRO DE EMANCIPAcaO SOCIAL E ESPORTIVA DE CEGOS</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            
                            <p className="modal-text">
                                O Centro de Emancipação Social e Esportiva de Cegos – CESEC é uma entidade que desde 1986 tem a missão de lutar pela integração ou inclusão das pessoas cegas e ou com deficiência visual.<br /><br />
                                A principal estratégia da Instituição para alcançar sua missão, é a demonstração para a sociedade em geral, todo potencial que estes possuem para o exercício das diferentes atividades da vida, como é o caso do esporte, cultura, trabalho, educação, e demais atividades sociais.<br /><br />

                                O CESEC tem por finalidade oferecer a prática esportiva à pessoas cegas e ou com deficiência visual parcial, independente de sua Idade, cor, credo ou classe social.<br /><br />

                                Durante toda a sua existência, o CESEC tem conseguido sucesso no esporte de alto rendimento, conquistando a oportunidade de seus atletas integrarem as diferentes Seleções Brasileiras nas várias modalidades paralímpicas que tem representado o nosso país em competições Sulamericanas, Parapanamericanas, Mundiais, e Jogos Paralímpicos.<br /><br />
                                Queremos oferecer este ideal no cotidiano, promovendo a prática esportiva para todos os deficientes visuais. A condição que é tomada de forma preconceituosa e que pode restringir a vida dessas pessoas passa a ser vista a partir das possibilidades, através do esporte. Por acreditarmos que o esporte é transformador, possibilitando experiências intensas na prática, queremos promover essas vivências.<br /><br/>
                                <h4 className="tituloModal">Enderecos</h4>
                                <h6>
                                    CESEC | CENTRO DE EMANCIPAÇÃO SOCIAL E ESPORTIVA DE CEGOS<br />
                                    Rua Padre Adelino, nº 2074, Conjunto 121<br />
                                    Quarta Parada - São Paulo/SP - CEP: 03303-000

                                </h6><br/>

                                <h4 className="tituloModal">Equipe</h4>
                                <h6>
                                    Presidente: David Farias Costa<br />

                                    Vice presidente: Maria José Ferreira <br />

                                    Secretário: Luiz Carlos dos Santos<br />

                                    Diretora, Adm financeira: Angela Bertoli Jorge<br />

                                    Diretor de esportes: Ivan Wallan Tertuliano<br />

                                    Assessora especial da presidência: Lilian Tuzi<br />
                                </h6><br/>

                                <h4 className="tituloModal">Praticas</h4>
                                <h6>
                                    Judô
                                </h6>
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}