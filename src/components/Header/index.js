import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';
import logo from '../../assets/logo.svg';

const Header = () => {
  return (
    <Container>
      <Content>
        <nav>
          <Link to='/'>
            <img src={logo} alt='ToDo List Fatec' />
          </Link>
        </nav>
        <Link to='/'>Dashboard</Link>
        <Link to='/contact' >Contato</Link>
      </Content>
    </Container>
  )
}

export default Header;
