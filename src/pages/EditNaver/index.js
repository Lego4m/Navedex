import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import moment from 'moment';

import api from '../../services/api';

import backArrow from '../../assets/backArrow.svg';
import xIcon from '../../assets/x.svg';

import RewiredModal from '../../components/RewiredModal';
import Header from '../../components/Header';

import {
  Container,
  Content,
  InputGroup,
  InputBlock,
  ModalContainer,
} from './styles';

function EditNaver({ match }) {
  const history = useHistory();

  const [open, setOpen] = useState(false);

  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [admissionDate, setAdmissionDate] = useState('');
  const [project, setProject] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    async function loadNaver() {
      try {
        const user = JSON.parse(localStorage.getItem('user'));

        const response = await api.get(
          `navers/${decodeURIComponent(match.params.naver)}`,
          {
            headers: {
              authorization: `Bearer ${user.token}`,
            },
          }
        );

        setJob(response.data.job_role);

        setAdmissionDate(
          moment(response.data.admission_date, 'YYYY-MM-DD').format(
            'DD/MM/YYYY'
          )
        );
        setBirthDate(
          moment(response.data.birthdate, 'YYYY-MM-DD').format('DD/MM/YYYY')
        );

        setName(response.data.name);
        setProject(response.data.project);
        setUrl(response.data.url);
      } catch (err) {
        localStorage.clear();

        history.push('/');
      }
    }

    loadNaver();
  }, [match, history]);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const user = JSON.parse(localStorage.getItem('user'));

      const data = {
        job_role: job,
        admission_date: admissionDate,
        birthdate: birthDate,
        name,
        project,
        url,
      };

      await api.put(`/navers/${decodeURIComponent(match.params.naver)}`, data, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      });

      setOpen(true);
    } catch (err) {
      toast.error('Erro ao editar o naver.');
    }
  }

  return (
    <Container>
      <Header />

      <Content>
        <form onSubmit={handleSubmit}>
          <div className="bar">
            <Link to="/home">
              <img src={backArrow} alt="BackArrow" />
            </Link>

            <h1>Editar Naver</h1>
          </div>

          <InputGroup>
            <InputBlock>
              <span>Nome</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nome"
              />
            </InputBlock>

            <InputBlock>
              <span>Cargo</span>
              <input
                type="text"
                value={job}
                onChange={(e) => setJob(e.target.value)}
                placeholder="Cargo"
              />
            </InputBlock>
          </InputGroup>

          <InputGroup>
            <InputBlock>
              <span>Data de nascimento</span>
              <input
                type="text"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                placeholder="dd/mm/aaaa"
              />
            </InputBlock>

            <InputBlock>
              <span>Data de admissão</span>
              <input
                type="text"
                value={admissionDate}
                onChange={(e) => setAdmissionDate(e.target.value)}
                placeholder="dd/mm/aaaa"
              />
            </InputBlock>
          </InputGroup>

          <InputGroup>
            <InputBlock>
              <span>Projetos que participou</span>
              <input
                type="text"
                value={project}
                onChange={(e) => setProject(e.target.value)}
                placeholder="Projetos que participou"
              />
            </InputBlock>

            <InputBlock>
              <span>URL da foto do Naver</span>
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="URL da foto do Naver"
              />
            </InputBlock>
          </InputGroup>

          <button type="submit">Salvar</button>
        </form>
      </Content>

      <RewiredModal open={open} onClose={() => history.push('/home')}>
        <ModalContainer>
          <h1>Naver atualizado.</h1>

          <p>Naver atualizado com sucesso!</p>

          <Link to="/home">
            <img src={xIcon} alt="x" />
          </Link>
        </ModalContainer>
      </RewiredModal>
    </Container>
  );
}

EditNaver.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      naver: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default EditNaver;
