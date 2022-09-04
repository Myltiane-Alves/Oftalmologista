import styled from 'styled-components';

export const Container = styled.div`
  display: none;
  @media (max-width: 720px) {
    display: flex;
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 5;
  }
`;

export const Nav = styled.div`
  @media (max-width: 720px) {
    border-top-left-radius: 1rem;
    margin-left: auto;
    display: flex;
    background-color: #fff;
    color: #23272a;
    width: 65vw;
    height: 100vh;
    flex-direction: column;
    padding: 2rem 4rem 0 2rem;
    position: relative;

    .logoMenu {
      width: 180px;
      a {
        img {
          width: 100px;
        }
      }

    }

    ul {
      display: flex;
      flex-direction: column;

      li {
        font-size: 1.1rem;
        list-style: none;
        text-align: start;
        & + li {
          margin-top: 0.5rem;
        }

        a {
          font-size: 20px;
          font-weight: 500;
          color: #6996fa;
          padding: 0.5rem;
          display: block;
          /* width: 100%; */
          &:hover {
            text-decoration: underline;
          }
        }
        div {
          padding-top: 30px;
          .btnLogin {
            padding: 0.5rem;
            display: block;
            width: 150px;
            font-weight: bold;
            background-color: #6996fa;
            a {
              font-size: 20px;
              color: #fff;
            }
          }
        }
      }
    }
    .container-closeMenu {

      button.closeMenu {
        position: absolute;
        top: 30px;
        right: 24px;
        padding: 8px;
        background: #6996fa;
        .icon {
          font-size: 32px;
          font-weight: 700;
          color: #fff;
        }
      }

    }
  }
`;
