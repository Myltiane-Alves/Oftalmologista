import styled from "styled-components";

export const Container = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  background-color: #6996fa;
  .contact-info {

    h2 {
      color: #fff;
    }
    .email {
      padding-top: 32px;
    }
    .phone {
      padding-top: 32px;
    }
    .github {
      padding-top: 32px;
    }
    .address {
      width: 100%;
      padding-top: 32px;
      display: block;

      ul {
        margin: 0;
        padding-left: 33px;
        li {
          font-size: 16px;
          line-height: 20px;
          color: #FFFAFA;
          list-style: none;
        }
      }
    }

    div {
      display: flex;
      p {
        font-size: 16px;
        font-weight: 400;
        padding-left: 10px;
        color: #FFFAFA;
        margin: 0;
      }
    }
    padding-bottom: 16px;
  }
  .contact-form {
    flex-direction: column;
    h2 {
      font-size: 32px;
      font-weight: bold;
      color: #FFFAFA;
      text-align: center;
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
          border: none;
          padding: 10px;
          border-radius: 5px;
          background-color: #FFFAFA;
        }
        input:focus {
          background-color: #ededed;
          border: none;
        }
        textarea {
          height: 200px;
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
        }
      }
      .btn {
        border: none;
        border-radius: 30px;
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
  .address {
    h2 {
      color: #fff;
    }
    .address-info {

      flex-direction: column;
      padding-left: 15px;
      div {
        width: 340px;
        h3 {
          color: #fff;
          text-align: initial;
        }
        p {
          font-size: 15px;
          color: #d1cece;
          text-align: initial;
        }
      }
    }
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1280px) {
    display: flex;
    width: 100%;
    .contact-info {
      width: 50%;
      h2 {
        font-size: 40px;
      }
      .email {
        padding-top: 32px;
        p {
          font-size: 24px;
        }
      }
      .phone {
        padding-top: 32px;
        p {
          font-size: 24px;
        }
      }
      .github {
        padding-top: 32px;
        p {
          font-size: 24px;
        }
      }
      .address {
        width: 50%;
        padding-top: 16px;
        display: block;
        p {
          font-size: 24px;
          line-height: 36px;
        }
        ul {
          margin: 0;
          li {
            font-size: 20px;
            line-height: 36px;
            color: #FFFAFA;
            list-style: none;
          }
        }
      }
    }
    .contact-form {
      width: 50%;
    }
    .address {
      h2 {
        font-size: 40px;
      }
      .address-info {
        display: grid;
        grid-template-columns: 1fr 1fr;

      }
    }
  }
`;
