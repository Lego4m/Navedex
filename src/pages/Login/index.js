import React, { useState } from 'react';

import { toast } from 'react-toastify';

import api from '../../services/api';

import logo from '../../assets/logo.svg';

import { Container, InputBlock } from './styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post('/users/login', { email, password });

      localStorage.setItem('user', JSON.stringify(response.data));
    } catch (err) {
      toast.error('Erro ao entrar, suas informações estão corretas?');
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="nave.rs" />

        <InputBlock>
          <span>E-mail</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
          />
        </InputBlock>

        <InputBlock>
          <span>Senha</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
          />
        </InputBlock>

        <button type="submit">Entrar</button>
      </form>
    </Container>
  );
}
