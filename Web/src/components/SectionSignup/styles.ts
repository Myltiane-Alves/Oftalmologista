import styled from "styled-components";

export const Container = styled.section`
  background-color: #FAFAFA;
  padding: 20px;
 .contact-form {
   flex-direction: column;
   padding: 10px;
   .form-header {
      padding-top: 20px;
      display: flex;
      a {
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
      padding-bottom: 20px;

      h1 {
        font-size: 24px;
        font-weight: 500;
        color: #6996fa;
        text-align: center;
        text-transform: uppercase;
      }
      flex-direction: column;
      width: 100%;
      .fields {
        .field {
          display: grid;
          flex-direction: column;
          padding-bottom: 16px;

          select {
            font-size: 20px;
            font-weight: bold;
            outline: none;
            line-height: 32px;
            border: 2px solid #E6E5E5;
            padding: 10px;
            background-color: #EDEDED;
            transition: all 0.3s ease-in-out;
            color: #919191;

          }
          select::placeholder {
            color: #919191;
          }
          input {
            font-size: 20px;
            font-weight: 500;
            outline: none;
            line-height: 32px;
            border-radius: 4px;
            border: 2px solid #E6E5E5;
            padding: 10px;
            background-color: #EDEDED;
            transition: all 0.3s ease-in-out;
          }
          input:focus {
            background-color: #ededed33;
          }
          input::placeholder {
            color: #919191;
          }
          input[type="date"] {
            color: #919191;
          }
        }
      }
      .container-btn {
        flex-direction: column;
        .btn {
          border: 2px solid #E6E5E5;
          border-radius: 3px;
          padding: 10px 30px;
          transition: 0.5s ease-in-out;
          background-color: #E6E5E5;
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
      width: 98%;
      .form-header {
        width: 100%;
        display: block;
        a {
          align-items: center;
          img {
            width: 25%;
          }
        }
      }
      form {
        width: 100%;
        .fields {
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 90%;
          padding: 50px 50px 0 50px;
        }
        h1 {
          font-size: 40px;
        }
        div {
          input {
            width: 80%;
          }
          select {
            width: 87%;
          }
        }
        .container-btn {
          text-align: left;
          padding-left: 50px;
        }
      }
    }
  }
  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    .contact-form {
      width: 100%;
      .form-header {
        display: none;
      }
      width: 100%;
      form {
        width: 100%;
        background-color: transparent;
        h1 {
          margin: 0;
          margin-top: 80px;
        }
        .fields {
          .field {
            min-width: 300px;
            input {
              width: 90%;
            }
            select {
              width: 97%;
            }
          }

        }
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

    }
    .about-img {
      display: block;
      width: 100%;
      padding-top: 100px;
      .logo {
        width: 50%;
      }
      .container-icons {
        display: flex;
        justify-content: space-between;
        padding-left: 150px;
        padding-top: 50px;
        width: 400px;
      }
    }
  }
  `;

