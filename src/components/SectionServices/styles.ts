import styled from "styled-components";

export const Container = styled.section`
  flex-direction: column;
  /* padding: 20px; */
  padding: 40px 0 40px 0;
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
      font-size: 32px;
      line-height: 36px;
      color: #6996fa;
      text-align: center;
      /* margin: 0; */
    }
  }
  .container-cards {

    padding-bottom: 20px;
    background-color: #fff;
    .cards {
      flex-direction: column;
      .card {
        flex-direction: column;
        width: 100%;
        max-width: 250px;
        box-shadow: 10px 8px 35px 0px rgba(0,0,0,0.09);
        border-radius: 15px;
        padding-top: 20px;
        margin: 20px auto;
        h3 {
          font-size: 20px;
          color: #6996fa;
          line-height: 30px;
        }
        p {
          font-size: 16px;
          font-weight: 600;
          line-height: 24px;
          color: #919191;
        }
        .icons {
          color: #6996fa;
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
    .container-cards{
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
