import styled from "styled-components";

export const Container = styled.section`
 .hours {
  margin: 20px;
  width: calc(100% - 40px);
  align-items: flex-start;

  h2 {
    font-size: 32px;
    line-height: 36px;
    color: #6996fa;
    margin: 0;
    text-align: initial;
  }
  hr {
    width: 60px;
    border: none;
    border-top:  4px solid #6996fa;
    margin: 10px 0;
  }
 }
 form {
    flex-direction: column;
    padding: 20px;
    h3 {
      font-size: 18px;
      line-height: 36px;
      color: #6996fa;
      margin: 0 0 10px 0;
      text-align: initial;
      text-transform: uppercase;
    }
    .options {
      flex-wrap: wrap;
      justify-content: space-between;
      display: flex;
      padding-bottom: 20px;
      label {
        width: calc(50% - 10px);
        margin-bottom: 20px;
        span {
          min-width: 100px;
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
          background: #eeeeee;
          color: #707070;
        }
        input {
          display: none;
          &:checked + span {
            background: #6996fa;
            color: #fff;
          }
        }
      }
    }
 }
`;

export const ContainerTitle = styled.header`
  width: 100%;
  min-height: 130px;
  background-color: #40518a;
  justify-content: center;
  align-items: center;
  display: flex;
  h1 {
    font-size: 22px;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
  }
`;
