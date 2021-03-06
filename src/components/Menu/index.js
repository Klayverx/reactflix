import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/bikeflix.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu border-menu border-gradient">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Klayflix logo" />
      </Link>

      <Button as={Link} className="Button" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
