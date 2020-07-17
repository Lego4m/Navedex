import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  height: 100vh;

  justify-content: center;
  align-items: center;

  form {
    width: 448px;

    display: flex;
    flex-direction: column;
    align-content: center;

    padding: 40px 32px;

    border: 1px solid #212121;

    img {
      margin-bottom: 8px;
    }

    button {
      background: #212121;
      height: 40px;

      margin-top: 32px;
      border: 0;

      font-weight: 600;
      font-size: 14px;
      color: #ffffff;
    }
  }
`;

export const InputBlock = styled.div`
  margin-top: 32px;

  display: flex;
  flex-direction: column;

  span {
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #212121;
  }

  input {
    margin-top: 4px;
    border: 1px solid #424242;
    padding: 8px;

    font-size: 16px;
    line-height: 24px;

    color: #9e9e9e;
  }
`;
