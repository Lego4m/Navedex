import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import moment from 'moment';

import api from '../../services/api';

import deleteIcon from '../../assets/delete.svg';
import editIcon from '../../assets/edit.svg';
import xIcon from '../../assets/x.svg';

import RewiredModal from '../../components/RewiredModal';
import Header from '../../components/Header';

import {
  Container,
  ShowModalContainer,
  ExcludeModalContainer,
  SuccessModalContainer,
} from './styles';

function Home() {
  const history = useHistory();

  const [navers, setNavers] = useState([]);

  const [showModal, setShowModal] = useState({ open: false, naver: {} });
  const [excludeModal, setExcludeModal] = useState({ open: false, id: '' });
  const [successModal, setSuccessModal] = useState(false);

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

  async function handleExclude(id) {
    const user = JSON.parse(localStorage.getItem('user'));

    await api.delete(`/navers/${id}`, {
      headers: {
        authorization: `Bearer ${user.token}`,
      },
    });

    setNavers(navers.filter((n) => n.id !== id));

    setShowModal({ open: false, naver: {} });
    setExcludeModal({ open: false, id: '' });
    setSuccessModal(true);
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
            <img
              src={naver.url}
              alt={naver.name}
              onClick={() => setShowModal({ open: true, naver })}
            />

            <strong>{naver.name}</strong>
            <p>{naver.job_role}</p>

            <div className="tools">
              <button
                type="button"
                onClick={() => setExcludeModal({ open: true, id: naver.id })}
              >
                <img src={deleteIcon} alt="Deletar" />
              </button>

              <button type="button" onClick={() => handleEdit(naver.id)}>
                <img src={editIcon} alt="Editar" />
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Modal de vizualização */}

      <RewiredModal
        open={showModal.open}
        onClose={() => setShowModal({ open: false, naver: {} })}
      >
        <ShowModalContainer>
          <img src={showModal.naver.url} alt={showModal.naver.name} />

          <div className="content">
            <h1>{showModal.naver.name}</h1>

            <p>{showModal.naver.job_role}</p>

            <div className="infoBlock">
              <strong>Idade</strong>
              <span>
                {Math.abs(
                  moment(showModal.naver.birthdate).diff(moment(), 'years')
                )}
              </span>
            </div>

            <div className="infoBlock">
              <strong>Tempo de empresa</strong>
              <span>
                {Math.abs(
                  moment(showModal.naver.admission_date).diff(moment(), 'years')
                )}
              </span>
            </div>

            <div className="infoBlock">
              <strong>Projetos que participou</strong>
              <span>{showModal.naver.project}</span>
            </div>

            <div className="tools">
              <button
                type="button"
                onClick={() =>
                  setExcludeModal({ open: true, id: showModal.naver.id })
                }
              >
                <img src={deleteIcon} alt="Deletar" />
              </button>

              <button
                type="button"
                onClick={() => handleEdit(showModal.naver.id)}
              >
                <img src={editIcon} alt="Editar" />
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowModal({ open: false, naver: {} })}
          >
            <img src={xIcon} alt="x" />
          </button>
        </ShowModalContainer>
      </RewiredModal>

      {/* Modal de confirmação de exclusão */}

      <RewiredModal
        open={excludeModal.open}
        onClose={() => setExcludeModal({ open: false, id: '' })}
      >
        <ExcludeModalContainer>
          <h1>Excluir Naver</h1>

          <p>Tem certeza que deseja excluir esse naver?</p>

          <div className="buttons">
            <button
              className="cancel"
              type="button"
              onClick={() => setExcludeModal({ open: false, id: '' })}
            >
              Cancelar
            </button>

            <button
              className="confirm"
              type="button"
              onClick={() => handleExclude(excludeModal.id)}
            >
              Excluir
            </button>
          </div>
        </ExcludeModalContainer>
      </RewiredModal>

      {/* Modal de sucesso */}

      <RewiredModal open={successModal} onClose={() => setSuccessModal(false)}>
        <SuccessModalContainer>
          <h1>Naver excluído.</h1>

          <p>Naver excluído com sucesso!</p>

          <button type="button" onClick={() => setSuccessModal(false)}>
            <img src={xIcon} alt="x" />
          </button>
        </SuccessModalContainer>
      </RewiredModal>
    </Container>
  );
}

export default Home;
