import React from 'react';
import './Modal.css';

export default function Modal2() {
    return (
        <body>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                Saiba Mais
            </button>
            <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="tituloModal" id="exampleModalLabel">JR-SP | ASSOCIACAO PARADESPORTIVA JR SP</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p className="modal-text">
                                A instituição surgiu da necessidade do Deficiente Intelectual (DI) de praticar esporte. Após alguns anos, o projeto cresceu tornando-se a Associação Paradesportiva JR São Paulo, que hoje conta com aproximadamente 90 alunos e é voltada ao desenvolvimento de atletas com DI.
                                Com auxílio do Clube Escola Ibirapuera, Centro Olímpico, Conjunto Desportivo Constâncio Vaz Guimarães e do Corinthians, que fornecem estrutura e materiais para que as aulas aconteçam, a Associação promove treinos e organiza campeonatos de quatro modalidades: Ginástica Artística, Ginástica Ritmica, Natação e Futsal.
                                A equipe JR é formada por nove profissionais, sendo cinco professores, um auxiliar, uma nutricionista, uma psicóloga e uma fisioterapeuta.

                                <br/><br/><h4 className="tituloModal">Enderecos</h4>
                                <h6>
                                    Centro Olímpico de Treinamento e Pesquisa Marechal Mário Ary Pires<br />
                                    Av. Ibirapuera, 1315 - Vila Clementino, São Paulo - SP, 04029-000<br /><br />

                                    Clube Escola do Ibirapuera,<br />
                                    Rua Pedro de Toledo, 1651 - Vila Clementino, São Paulo - SP, 04039-034<br /><br />

                                    Parque São Jorge – Corinthians<br />
                                    R. São Jorge - Parque São Jorge, São Paulo - SP, 03178-200
                                </h6><br />

                                <h4 className="tituloModal">Equipe</h4>
                                <h6>
                                    Roberto Di Cunto - Presidente<br />
                                    Cleiton Monteiro - Treinador de Futsal e Futebol<br />
                                    Jordão Dantas - Treinador de Futsal e Futebol<br />
                                    Cristiane Mayer de Sousa - Professora de ginástica e natação<br />
                                    Cristina Heitzmann - Diretora Técnica e Professora<br />
                                    Claudia Albuquerque - Psicóloga<br />
                                    Fernanda Heitzmann - Nutricionista<br />
                                    Ilka Medeiros - Fisioterapeuta<br />
                                </h6><br/>

                                <h4 className="tituloModal">Praticas</h4>
                                <h6>
                                    Ginástica Artística<br />
                                    Natação<br />
                                    Futsal<br />
                                    Ginástica Ritmica<br />
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