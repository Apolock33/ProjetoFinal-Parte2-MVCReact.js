import React from "react";
import { Component } from "react";
import LogoAzul from "./Assets/Logo/logo azul.svg";
import './Footer.css';
import { TiSocialFacebook } from 'react-icons/ti';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';



export default class Footer extends Component {
    
    render() {
        return (
            <footer className="footer">
                <div className="LogoFooter">
                    <img src={LogoAzul} alt='Logo' />
                </div>
                <div className='redesociais'>
                    <h4 className='titulofooter'>Redes Sociais</h4>
                    <h6>
                        <Link><TiSocialFacebook color='white' size='30px' /></Link>
                        <Link><AiFillInstagram color='white' size='30px' /></Link>
                        <Link><AiOutlineTwitter color='white' size='30px' /></Link>
                    </h6><br />
                    <h6 className='titulofooter'>ADAPT SPORTS - Desenvolvido por Squad 12.</h6>
                </div>


                <div className='fale-con'>
                    <h3 className='titulofooter'>Fale Conosco</h3>
                    <h6>E-mail para contato:<br/>
                        Squad12@gmail.com<br /><br />
                        Críticas, denúncias e reclamações:<br/>
                        Squad12@gmail.com<br /><br />
                        Horário de Atendimento:<br />
                        Seg à sexta: 11:00 às 16h;<br />
                        Sábado: das 14:00 às 19hs;</h6>
                </div>
            </footer>
        );
    }
}