import React from 'react';
import './Footer.css';
import Logo from '../../assets/Logo/logo-azul-com-curculo.svg';
import { Link } from 'react-router-dom';
import { TiSocialFacebook } from 'react-icons/ti';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';

export default function Footer() {
  return (
    <footer>
      <div className="fundofooter">
        <div className="logofooter">
          <img src={Logo} alt='logo' />
        </div>
        <div className='redesociais'>
          <h3 className='titulofooter'>Redes Sociais</h3>
          <h6>
            <Link><TiSocialFacebook color='white' size='50px'/></Link>
            <Link><AiFillInstagram color='white' size='50px'/></Link>
            <Link><AiOutlineTwitter color='white' size='50px' /></Link>
          </h6><br />
          <h5 className='titulofooter'>ADAPT SPORTS - Desenvolvido por Squad 12.</h5>
        </div>
        

        <div className='fale-con'>
          <h3 className='titulofooter'>Fale Conosco</h3>
          <h6>E-mail para contato: Squad12@gmail.com<br /><br />
            Críticas, denúncias e reclamações: Squad12@gmail.com<br /><br />
            Horário de Atendimento:<br />
            Seg à sexta: 11:00 às 16h;<br />
            Sábado: das 14:00 às 19hs;</h6>
        </div>
      </div>
    </footer>
  );
}