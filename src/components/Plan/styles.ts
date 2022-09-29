import styled from "styled-components";

export const Container = styled.section`
  flex-direction: column;
  /* padding: 20px; */
  .container-title {
    padding-bottom: 20px;
    flex-direction: column;
    p {
      font-size: 16px;
      font-weight: 500;
      text-align: center;
      color: #919191;
    }
    h2 {
      font-size: 40px;
      color: #6996fa;
      text-align: center;
      margin: 0;
    }
  }
  .container-plan {

    padding-bottom: 20px;
    background-color: #fff;
    .cards {
      flex-direction: column;
      .card {
        flex-direction: column;
        width: 100%;
        max-width: 250px;
        box-shadow: 10px 8px 35px 10px rgba(0,0,0,0.09);
        border-radius: 15px;
        padding-top: 20px;
        margin: 20px auto;
        h3 {
          font-size: 32px;
          color: #6996fa;
          line-height: 36px;
        }
        span {
          font-size: 18px;
          font-weight: 700;
          color: #919191;
        }
        p {
          font-size: 18px;
          line-height: 24px;
          color: #919191;
        }
        .container-icons {
          flex-direction: column;
          padding-bottom: 20px;
          .check {
            padding-top: 10px;
            display: flex;
            p {
              margin: 0 0 0 5px;
            }
          }
        }
        .container-btn {
          button {
            width: 200px;
            height: 40px;
            background-color: #156ac9;
            a {
              color: #fff;
              font-size: 16px;
              font-weight: 700;

            }
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    .container-title {
      div {
        padding: 20px;
        p {
          font-size: 22px;
        }
      }
    }
  }
  @media (min-width: 1024px) {
    .container-plan{
      .cards {

        flex-direction: row;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
      }
    }

  }

  @media (min-width: 1366px) {
    padding-top: 40px;
    .container-title {
      h1 {
        font-size: 62px;
        text-transform: uppercase;
      }
      p {
        text-transform: uppercase;
      }
      div {
        padding: 50px;
        p {
          font-size: 30px;
          line-height: 36px;
          text-transform: uppercase;
        }
      }
    }

  }
`;
