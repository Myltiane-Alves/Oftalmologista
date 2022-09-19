import styled from 'styled-components';

export const Container = styled.footer`
  flex-direction: column;
  width: 100%;
  button {
    position: fixed;
    a {
      img {

      }
    }
  }
  .columns {
    padding: 20px;
    .columns-text {
      padding: 0px 0 10px 0;
      h4 {
        font-size: 32px;
        font-weight: 500;
        text-align: left;
        color: #6996fa;
        margin: 0;
        margin-bottom: 10px;

      }
      ul {
        margin: 0;
        padding: 0;
        li {
          font-size: 16px;
          font-weight: 500;
          list-style: none;
          text-align: left;
          color: #919191;
          a {
            font-size: 16px;
            font-weight: 500;
            color: #919191;
          }
        }
      }
    }
    .logo {
      a {
        img {
          width: 100%;
        }
      }
    }
  }
  .text-footer {
    width: 250px;
    p {
      font-size: 16px;
      text-align: center;
      color: #919191;
    }
  }
  @media (min-width: 768px) {
    .columns {
      flex-direction: row;
      display: grid;
      grid-template-columns: 1fr 1fr ;
      .columns-text {
        padding-top: 20px;
      }
      .logo {
        text-align-last: left;
        a {
          img {
            width: 50%;
          }
        }
      }
    }
    .text-footer {
      width: 100%;
    }
  }
  @media (min-width: 1024px) {
    .columns {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      .columns-text {
        ul {
          li {
            font-size: 18px;
            line-height: 32px;
            a {
              font-size: 18px;
            }
          }
        }
      }
      .logo {
        a {
          img {
            width: 80%;
          }
        }
      }
    }
  }
`;
