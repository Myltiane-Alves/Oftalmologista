import styled from "styled-components";

export const Container = styled.section`
  flex-direction: column;
  /* padding: 20px; */
  background-color: #fff;
  .container-title {
    padding: 20px 0 20px 0;
    flex-direction: column;
    background-color: #6996fa;
    border-top: 1px solid #e6e6e6;
    p {
      font-size: 16px;
      font-weight: 500;
      text-align: center;
      color: #919191;
    }
    h1 {
      font-size: 40px;
      color: #fff;
      text-align: center;
      /* margin: 0; */
    }
  }
  .container-plan {

    /* padding-bottom: 20px; */
    background-color: #fff;
    .cards {
      flex-direction: column;
      .card {
        flex-direction: column;
        padding: 0;
        .container-icons {
          padding: 40px 0;
          flex-direction: column;
          background-color: #6996fa;
          align-items: center;
          justify-content: center;
          position: relative;
            &::before {
            content: '';
            width: 55px;
            height: 55px;
            position: absolute;
            background-color: #6996fa;
            bottom: -27.5px;
            transform: rotate(135deg);
          }
          p {
            font-size: 16px;
            font-weight: 500;
            text-transform: uppercase;
          }
          .icons {
            color: #fff;
          }
          p {
            font-size: 16px;
            font-weight: 600;
            color: #fff;
          }
        }
        .card-text {
          padding: 30px 10px 20px 10px;

          p {
            font-size: 16px;
            font-weight: 500;
            text-align: center;
            text-transform: uppercase;
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
        .card {
          display: grid;
          grid-template-columns: minmax(150px, 25%) 1fr;
          margin-bottom: 100px;
          .container-icons {
            &::before {
              top: 130px;
              bottom: initial;
              right: -25.5px;
            }
            p {
              font-size: 24px;
            }
          }
          .card-text {
            margin-top: 0;
            align-items: center;
            justify-content: center;
            padding: 20px 60px;
            border: 1px solid #6996fa;
            border-left: none;
            padding-top: 50px;
            p {
              font-size: 20px;
              color: #919191
            }
          }
        }

      }
    }

  }

  @media (min-width: 1366px) {
    padding-top: 40px;
    .container-title {
      h1 {
        font-size: 62px;
        text-transform: uppercase;
        margin: 0;
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
    .container-plan {
      padding-top: 40px;
      padding: 40px;
    }
  }
`;
