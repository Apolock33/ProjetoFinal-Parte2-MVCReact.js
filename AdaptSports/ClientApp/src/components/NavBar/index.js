import React from 'react';
import './NavBar.css';
import Logo from '../../assets/Logo/logo-azul.svg';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="navbarComp">

      <img className='logo' src={Logo} alt='logo' />

      <div className='menu'>
        <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" color={'36a9e1'}><AiOutlineMenu color={'#36a9e1'} size={"30px"} /></button>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div class="offcanvas-header">
            <h3 className="navg">Menu</h3>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <h4><Link to='/'>Home</Link></h4>
            <h4><Link to='/Sobre-nos'>Sobre Nos</Link></h4>
            <h4><Link to='/Locais'>Locais</Link></h4>
            <h4><Link to='/Cadastro'>Cadastro/Log In</Link></h4>
          </div>
        </div>
      </div>

    </div>
  );
}