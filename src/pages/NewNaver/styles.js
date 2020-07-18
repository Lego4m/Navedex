import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  padding: 24px 32px;
  margin: 0 auto;
`;

export const Content = styled.div`
  margin-top: 40px;

  display: flex;
  justify-content: center;

  div.bar {
    display: flex;
    align-items: center;

    a {
      display: flex;
    }

    h1 {
      margin-left: 22px;

      font-weight: 600;
      font-size: 24px;
      line-height: 36px;

      color: #212121;
    }
  }

  form {
    display: flex;

    flex-direction: column;

    button {
      background: #212121;
      width: 176px;
      height: 40px;

      margin-left: auto;
      margin-top: 32px;
      border: 0;

      font-weight: 600;
      font-size: 14px;
      color: #ffffff;
    }
  }
`;

export const InputGroup = styled.div`
  margin-top: 32px;

  display: flex;

  div + div {
    margin-left: 32px;
  }
`;

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #212121;
  }

  input {
    width: 280px;

    margin-top: 4px;
    border: 1px solid #424242;
    padding: 8px;

    font-size: 16px;
    line-height: 24px;
  }
`;

export const ModalContainer = styled.div`
  width: 592px;
  padding: 32px;

  h1 {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;

    color: #212121;
  }

  p {
    margin-top: 24px;

    font-size: 16px;
    line-height: 36px;

    color: #212121;
  }

  a {
    display: flex;
    position: absolute;

    top: 29px;
    right: 29px;
  }
`;
