import styled from "styled-components";

export const Container = styled.section`
  flex-direction: column;
  padding: 20px;
  background-color: #40518a;
  .container-title {
    h2 {
      font-size: 32px;
      line-height: 36px;
      color: #fff;
      margin: 0;
      strong {
        color: #ffd700;

      }
    }
    p {
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
      color: #fff;
    }

  }
  div {
    padding: 10px;
    button {
      width: 200px;
      height: 60px;
      background-color: #fff;
      border: none;
      a {
        font-size: 20px;
        font-weight: bold;
        color: #5764c1;
      }
    }
    button:hover {
      transition: all 0.3s ease-in-out;
      background-color: #F8F8F8;
      color: #fff;
    }
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    display: grid;
    grid-template-columns: 1fr 1fr ;
    .container-title {
      width: 100%;

    }
    div {
      padding: 0;
      top: 30px;
      justify-self: end;
      button {
      }
    }
  }
  @media (min-width: 1366px) {
    flex-direction: row;
    display: grid;
    grid-template-columns: 1fr 1fr ;
    padding: 50px;
    .container-title {
      width: 700px;
      h2 {
        font-size: 48px;
        line-height: 52px;
        text-align: left;
      }
      p {
        font-size: 24px;
        line-height: 28px;
        text-align: left;
      }
    }
    div {

      top: 30px;
      justify-self: end;
      button {
      }
    }
  }
`;
