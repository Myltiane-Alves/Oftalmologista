import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  .container-title {
    background-color: #6996fa;
    min-height: 160px;
    padding-top: 40px;
    h1 {
      font-size: 32px;
      color: #fff;
      text-transform: uppercase;
    }
    button {
      a {
        font-size: 16px;
        font-weight: 500;
        color: #6996fa
      }
    }
  }
  .next-header {
    padding: 40px 0 40px 20px;
    text-align: left;
    h2 {
      font-size: 32px;
      color: #6996fa;
    }
    .hr-next {
      width: 80px;
      border: none;
      border-top: 4px solid #6996fa;
      margin: 10px 0;
    }
    button {
      width: 200px;
      height: 50px;
      background-color: #6996fa;
      a {
        font-size: 16px;
        font-weight: 600;
        color: #fff;
      }
    }
  }
  .historico-header {
    padding: 40px 0 40px 20px;
    h2 {
      font-size: 32px;
      text-align: left;
      color: #6996fa;
    }
    .hr-historico {
      width: 80px;
      border: none;
      border-top: 4px solid #6996fa;
      margin: 10px 0;
    }
  }
  ul {
    display: flex;
    margin: 0;
    padding: 0 20px;
    flex-direction: column;
    li {
      text-align: left;
      display: flex;
      flex-direction: column;
      list-style: none;
      > section {
        display: flex;
        flex-wrap: wrap;
        > div {
          display: flex;
          width: 50%;
          flex-direction: column;
          label, span {
            font-size: 16px;
            margin: 10px 0;
          }
          label {
            font-weight: bold;
          }
        }
      }
      .container-btn {
        padding-top: 20px;
        display: flex;
        justify-content: space-around;
        width: 100%;
        button {
          width: 100px;
          align-self: center;
          cursor: pointer;
          border: none;
          color: #fff;
          .icons {
            color: #fff;
          }
        }
        button:hover {
          cursor: pointer;
          background-color: aliceblue;
        }
        .btn-save {
          background-color: #00d25b;
        }
        .btn-save:hover {
          background-color: #00f56a;
        }
        .btn-edit {
          background-color: #6996fa;
        }
        .btn-edit:hover {
          background-color: #6996fac9;
        }
        .btn-cancel {
          background-color: #fc424a;
        }
        .btn-cancel:hover {
          background-color: #fc424ade;

        }
      }
    }
    li + li {
      border-top: #eeeeee 1px solid;
      /* margin-top: 100px; */
      padding-top: 50px;
    }
  }

 @media (min-width: 768px) {
    /* .container-title {
      flex-direction: row;
      display: grid;
      grid-template-columns: 1fr 1fr;
      button {
        width: 200px;
        height: 40px;
      }
      h1 {
        margin: 0;
      }
    } */
   ul {
    li {
      section {
        width: 100%;
        > div {
          label, span {
            font-size: 24px;
          }
        }
      }
    }
   }
  }

 @media (min-width: 1024px) {
   ul {
    li {
      flex-direction: row;
      section {
        flex-wrap: nowrap;
        flex: 1;
        > div {
          width: initial;
          min-width: 150px;
          label, span {
            font-size: 18px;
          }
        }
      }
      .container-btn {
        width: 100%;
      }
    }
   }
 }
 @media (min-width: 1280px) {
   .next-header {
    padding-left: 50px;
    h2 {
      font-size: 48px;
    }
   }
   .historico-header {
    padding-left: 50px;
    h2 {
      font-size: 48px;
    }
   }
   ul {
    padding: 50px;
    li {
      flex-direction: row;
      section {
        flex-wrap: nowrap;
        flex: 1;
        > div {
          width: initial;
          min-width: 200px;
          label, span {
            font-size: 24px;
          }
        }
      }
      .container-btn {
        width: 100%;
      }
    }
   }
 }
`;
