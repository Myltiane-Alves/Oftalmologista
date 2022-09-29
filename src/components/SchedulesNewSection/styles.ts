import styled from "styled-components";

export const Container = styled.section`
 .contact-form {
    flex-direction: column;
    background-color: #6996fa;
    padding-bottom: 10px;
    .form-header {
      padding-top: 20px;
      .container-icons {
        padding-left: 20px;
        display: flex;
        a {
          .icon-back {
            color: #fff;
          }
        }
      }
      h2 {
        font-size: 32px;
        line-height: 40px;
        font-weight: bold;
        color: #FFFAFA;
        text-align: center;
        text-transform: uppercase;
      }
      p {
        font-size: 16px;
        line-height: 32px;
        color: #FFFAFA;
        font-weight: 500;
        text-transform: uppercase;
      }

    }
    form {
      flex-direction: column;
      padding: 20px;
      width: 80%;
      div {
        display: grid;
        flex-direction: column;
        padding-bottom: 16px;
        label {
          font-size: 16px;
          line-height: 16px;
          padding-right: 32px;
          color: #FFFAFA;
        }
        input {
          /* height: 2.5rem; */
          width: 95%;
          border: none;
          padding: 10px;
          border-radius: 5px;
          color: #919191;
          background-color: #FFFAFA;
        }
        input:focus {
          background-color: #ededed;
          border: none;
        }
        textarea {
          height: 150px;
          width: 100%;
          border: none;
          border-radius: 5px;
          background-color: #FFFAFA;
        }
        textarea::placeholder {
          padding-left: 16px;
          padding-top: 16px;
        }
        textarea:hover {
          background-color: #ededed;
        }
        textarea:focus {
          background-color: #ededed;
          border: none
        }
        select {
          width: 100%;
          padding: 10px;
          border: none;
          border-radius: 2px;
          background-color: #FFFAFA;
          color: #919191;
          option {
            color: #919191;

          }
        }

      }
      .container-btn {
        .btn {
          border: none;
          border-radius: 3px;
          padding: 10px 30px;
          transition: 0.5s ease-in-out;
          background-color: #FFFAFA;
          width: 100%;
          max-width: 300px;
          margin: auto;
          cursor: pointer;
          a {
            font-size: 16px;
            color: #156ac9;
            line-height: 32px;
            font-weight: 600;

          }
        }
        .btn:hover {
          background-color: #f1f0f0;
          transition: all 0.5s ease-in-out;
        }
      }
    }
  }
 /* .about-img {
     background-image: url("../../../src/assets/img/bg8.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 400px;
    height: 300px;
    padding-top: 1.375rem;

  } */
  @media (min-width: 768px) {
    .contact-form {
      padding-top: 50px;
      width: 100%;
      form {
        width: 90%;
        .container-form {
          display: grid;
          flex-direction: row;
          grid-template-columns: 1fr 1fr;

          width: 100%;
        }
        div {
          width: 100%;
          input {
            width: 90%;
          }
        }
        div {
          textarea {
            width: 95%;
          }
        }
        .container-btn {
          justify-content: flex-start;
          .btn {

          }
        }
      }
    }
    .about-img {
      width: 100% ;
      height: 500px;
    }
  }
  @media (min-width: 1280px) {
    display: flex;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    .contact-form {
      .form-header {
        padding: 20px;
        .container-icons {
          padding: 0;

        }
        h2 {
          text-align: initial;
        }
        p {
          text-align: initial;

        }
      }
      form {
        width: 90%;
      }
      width: 100%;
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
