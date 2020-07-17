import React from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import { Container } from './styles';

function Header() {
  const history = useHistory();

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  return (
    <Container>
      <img src={logo} alt="nave.rs" />

      <button type="button" onClick={handleLogout}>
        Sair
      </button>
    </Container>
  );
}

export default Header;
