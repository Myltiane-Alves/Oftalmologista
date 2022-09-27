import styled from "styled-components";

export const Container = styled.section`
  background-image: url("../../../src/assets/img/bg8.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: right;
  background-position-x: center;
  min-height: 300px;
 .contact-form {
   flex-direction: column;
   background-color: #6996faed;
   padding: 40px;
    .form-header {
      padding-top: 20px;
      display: flex;
      a {
        cursor: pointer;
        img {
          width: 50%;
        }
      }
      p {
        font-size: 16px;
        color: #FFFAFA;
        font-weight: 500;
        text-transform: uppercase;
      }

    }
    form {
      flex-direction: column;
      h1 {
        font-size: 32px;
        font-weight: 500;
        color: #FFFAFA;
        text-align: center;
        text-transform: uppercase;
      }
      flex-direction: column;
      padding: 20px;
      width: 80%;
      .fields {
        .field {

          display: grid;
          flex-direction: column;
          padding-bottom: 16px;

          input {
            font-size: 20px;
            font-weight: bold;
            outline: none;
            line-height: 32px;
            border: none;
            border-bottom: 2px solid #FFFAFA;
            padding: 10px;
            background-color: transparent;
            transition: all 0.3s ease-in-out;
          }
          input:focus {
            background-color: #ededed33;
          }
          input::placeholder {
            color: #FFFAFA;
          }
        }
      }
      .container-btn {
        flex-direction: column;
        .btn {
          border: none;
          border-radius: 3px;
          padding: 10px 30px;
          transition: 0.5s ease-in-out;
          background-color: #FFFAFA;
          width: 100%;
          max-width: 300px;
          height: 60px;
          margin: auto;
          cursor: pointer;
          color: #156ac9;
          font-size: 16px;
          line-height: 32px;
          font-weight: 600;
        }
        .btn:hover {
          background-color: transparent;
          border: 1px solid #FFFAFA;
          transition: all 0.5s ease-in-out;
          color: #FFFAFA;
        }
        span {
          padding-top: 20px;
          padding-bottom: 20px;
          font-size: 16px;
          line-height: 36px;
          display: block;
          color: #FFFAFA;
        }
        a {
          font-size: 16px;
          color: #FFFAFA;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          border: 1px solid #FFFAFA;
          border-radius: 3px;
          padding: 10px 30px;
          transition: 0.5s ease-in-out;
        }
        a:hover {
          background-color: #40518a;
        }
      }
    }
  }
  .about-img {
    display: none;
  }
  @media (min-width: 768px) {
    .contact-form {
      width: 100%;
      .form-header {
        width: 100%;
        display: block;
        a {
          cursor: pointer;
          align-items: center;
          img {
            width: 25%;
          }
        }
      }
      form {
        width: 100%;
        h1 {
          font-size: 40px;
          text-align: initial;
        }
        div {
          input {
            width: 80%;
          }
        }
        .container-btn {
          text-align: left;
        }
      }
    }
    .about-img {
      display: none;
    }
  }
  @media (min-width: 1280px) {
    display: flex;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0;
    .contact-form {
      width: 100%;
      .form-header {
        display: none;
      }
      width: 100%;
      form {
        .container-btn {
          span {
            font-size: 20px;
          }
          .btn {
            font-size: 20px;
            line-height: 36px;
          }
        }
      }
      padding-bottom: 200px;
    }
    .about-img {
      background-color: #fff;
      width: 100%;
      padding-top: 100px;
      display: block;
      .logo {
        width: 50%;
      }
      .container-icons {
        padding-top: 50px;
        padding-left: 150px;
        display: flex;
        justify-content: space-between;
        width: 400px;
        text-align: right;
        div {
          width: 100px;
        }
      }
      p {
        font-size: 20px;
        line-height: 36px;
        color: #919191;
      }
    }
  }
  `;

