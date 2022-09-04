import styled from "styled-components";

export const Container = styled.section`
  .fixed {
    width: 90%;
    height: 40px;
    background-color: #e8e8e8;
    position: fixed;
    bottom: 0;
    left: 0;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    z-index: 1;
    display: flex;
  }

  form {
    padding: 20px;
    width: 100%;
    button {
      min-width: 130px;
      border: none;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      font-weight: bold;
      border-radius: 5px;
      outline: none;
      text-transform: uppercase;
      text-decoration: none;
      padding: 0 20px;
      cursor: pointer;
      background: #6996fa;
      color: #fff;
      a {
        color: #fff;
      }
    }
    button.btn-voltar {
      background: #cccccc;
      a {
        font-size: 16px;
        font-weight: bold;
        color: #707070;
      }
    }
  }
  @media (min-width: 768px) {
    .fixed {

      width: 95%;
      button {
        min-width: 150px;
      }
    }
  }

  @media (min-width: 992px) {
    form {
      max-width: 400px;
    }
    footer.fixed {
      width: 100%;
      justify-content: flex-start;
      flex-direction: row;
      button + button,
      a + a,
      a + button,
      button + a {
        margin-right: 20px;
      }
      button,
      a {
        order: 1;
        &:first-child {
          order: 2;
        }
      }
    }
  }
`;
