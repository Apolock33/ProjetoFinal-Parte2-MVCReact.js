import React, { useState } from 'react';
import './Modal.css';

export default function Modal1() {
    return (
        <body>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Saiba Mais
            </button>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="tituloModal" id="exampleModalLabel">ADD - Associacao Desportiva Para Deficientes</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p className="textoModal">
                                A Associação Desportiva para Deficientes é uma instituição sem fins lucrativos fundada em 1996, pelo professor de educação física Steven Dubner e pela administradora Eliane Miada. Em 2001, a ADD recebeu do Ministério da Justiça o título de Organização da Sociedade Civil de Interesse Público (OSCIP).

                                Por meio de doações, parcerias e patrocínio de diversas empresas, que contribuem tanto de forma institucional quanto por leis de incentivo, a ADD desenvolve as modalidades competitivas de basquete em cadeira de rodas, natação, bocha, vôlei sentado e atletismo.

                                Desde 2001, a instituição também atua de forma pioneira na educação esportiva para crianças com deficiência, numa iniciativa que, em 2010, culminou na criação da ADD Escola de Esporte Adaptado.

                                <br /><br /><h4 className="tituloModal">Enderecos</h4>
                                <h6>
                                    ADD ESCOLA DE ESPORTE ADAPTADO(Sede Administrativa)<br /><br />
                                    R. das Pitombeiras, 296 - Via Parque Jabaquara, São Paulo - SP, 04321-160<br /><br />
                                    Tel: 11 5011-6133<br /><br />
                                    Email: contato@add.org.br<br /><br />
                                    Críticas, denúncias e reclamações: ouvidoria@add.org.br<br /><br />
                                    Horário de funcionamento da Sede Adm.<br />
                                    Seg à sexta: 8:30 às 12h e das 13 ás 17:30<br />
                                    Sábado: das 08:00 às 12 hs
                                </h6>

                                <br /><h4 className="tituloModal">Programa ADD</h4>
                                PROGRAMAS DE ENSINO, PESQUISA E TREINAMENTO - WORKSHOP E CURSOS<br />
                                A ADD visando difundir o conhecimento teórico e prático adquirido por seus colaboradores profissionais oferece a oportunidade para que prefeituras, universidades e demais entidades interessadas possam conhecer o trabalho desenvolvido na ADD.<br />

                                A ADD contribui com a disseminação de conhecimentos, reciclagem e oportunidades para que profissionais das áreas afins adquiram vivência e mais conhecimento a respeitos das atividades físicas e esportivas para pessoas com deficiência.<br />

                                Objetivo Específico do Programa: Realizar palestras, seminários e Workshop para entidades interessadas na prática esportiva para pessoas com deficiência.<br />

                                Objetivos Gerais do Programa:<br />
                                • Difundir o trabalho da ADD;<br />
                                • Reciclar, disseminar e possibilitar o desenvolvimento de técnicas de ensino e aprendizagem motora voltados para pessoas com deficiência;<br />
                                • Cumprir a missão da ADD.<br />

                                Estrutura e funcionamento: Os interessados deverão entrar em contato para receber para firmar a parceria na realização do evento.
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