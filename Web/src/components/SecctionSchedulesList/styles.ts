import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  .next-header {
    padding-top: 40px;
    padding-left: 20px;
    text-align: left;
    h2 {
      font-size: 32px;
      color: #6996fa;
    }
  }
  .historico-header {
    padding-top: 20px;
    padding-left: 20px;
    h2 {
      font-size: 32px;
      text-align: left;
      color: #6996fa;
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
            /* color: #919191; */
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
          /* display: flex; */
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
      margin-top: 100px;
      padding-top: 100px;
    }
  }
  /* @media (min-width: 768px) {
    display: flex;
    .about-img {
      height: auto;
      width: 100%;
      background-size: cover;
    }
  }
  @media (min-width: 1280px) {
    padding: 20px;
    .about {
      h2 {
        font-size: 48px;
        line-height: 50px;
        text-align: left;
      }
      p {
        font-size: 22px;
        line-height: 30px;
      }
    }
    /* div {
      h2 {
        font-size: 2.5rem;
      }
      p {
        font-size: 1.5rem;
        line-height: 2.25rem;
      }
      button {
        width: 350px;
        height: 50px;
        a {
          font-size: 1.5rem;
          font-weight: 300;
        }
      }
    }
  } */
`;
