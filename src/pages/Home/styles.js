import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  padding: 24px 32px;
  margin: 0 auto;

  div.bar {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 40px;

    h1 {
      font-weight: 600;
      font-size: 40px;
      line-height: 48px;
    }

    a {
      width: 176px;

      background: #212121;
      border: 0;

      padding: 8px 16px;

      font-weight: 600;
      font-size: 14px;
      line-height: 24px;

      text-align: center;
      text-decoration: none;

      color: #ffffff;
    }
  }

  ul {
    display: grid;
    gap: 32px;
    grid-template-columns: repeat(4, 1fr);

    margin-top: 32px;

    li {
      > img {
        height: 280px;
        width: 280px;

        background: #c4c4c4;

        margin-bottom: 16px;
      }

      strong {
        font-weight: 600;
        font-size: 16px;
        line-height: 18px;

        color: #212121;
      }

      p {
        margin-top: 4px;

        font-size: 16px;
        line-height: 24px;
        color: #212121;
      }

      div.tools {
        margin-top: 10px;

        display: flex;

        button {
          background: none;

          border: 0;
        }

        button + button {
          margin-left: 11px;
        }
      }
    }
  }
`;

export const ExcludeModalContainer = styled.div`
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

  div.buttons {
    display: flex;
    margin-top: 33px;

    button {
      width: 176px;

      padding: 8px 16px;

      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
    }

    button.cancel {
      background: #ffffff;
      margin-left: auto;
      border: 1px solid #212121;

      color: #212121;
    }

    button.confirm {
      background: #212121;
      margin-left: 24px;
      border: 0;

      color: #ffffff;
    }
  }
`;

export const SuccessModalContainer = styled.div`
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

  button {
    display: flex;
    position: absolute;

    background: none;
    border: 0;

    top: 29px;
    right: 29px;
  }
`;
