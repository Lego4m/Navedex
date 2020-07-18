import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import deleteIcon from '../../assets/delete.svg';
import editIcon from '../../assets/edit.svg';

import Header from '../../components/Header';

import { Container } from './styles';

function Home() {
  const history = useHistory();

  const [navers, setNavers] = useState([]);

  useEffect(() => {
    async function loadNavers() {
      try {
        const user = JSON.parse(localStorage.getItem('user'));

        const response = await api.get('/navers', {
          headers: {
            authorization: `Bearer ${user.token}`,
          },
        });

        setNavers(response.data);
      } catch (err) {
        localStorage.clear();

        history.push('/');
      }
    }

    loadNavers();
  }, [history]);

  function handleEdit(id) {
    history.push(`/editnaver/${encodeURIComponent(id)}`);
  }

  return (
    <Container>
      <Header />

      <div className="bar">
        <h1>Navers</h1>

        <Link to="/newnaver">Adicionar Naver</Link>
      </div>

      <ul>
        {navers.map((naver) => (
          <li key={naver.id}>
            <img src={naver.url} alt={naver.name} />

            <strong>{naver.name}</strong>
            <p>{naver.job_role}</p>

            <div className="tools">
              <button type="button" onClick={() => {}}>
                <img src={deleteIcon} alt="Deletar" />
              </button>

              <button type="button" onClick={() => handleEdit(naver.id)}>
                <img src={editIcon} alt="Editar" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Home;
