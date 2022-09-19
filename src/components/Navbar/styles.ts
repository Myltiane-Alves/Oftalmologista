import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 130px;
  /* background-color: red; */
`;

export const Content = styled.div`
  max-width: 1230px;
  padding: 0 2rem;
  height: 130px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: no-wrap;
  .container-logo {
    top: 10px;
    a {
      .logo {
         width: 100px;
      }
    }
  }
  a.logo {
    font-family: var(--text-title);
    font-size: 2rem;
    line-height: 2.68rem;
    font-weight: bold;
    color: var(--green);
  }

  button.mobileMenu {
    display: none;
  }

  @media (max-width: 720px) {


    button.mobileMenu {
      display: flex;
      padding: 16px;
      font-size: 32px;
      color: #6996fa;
      background: transparent;
    }

    nav {
      display: none;
    }
  }

  @media (max-width: 500px) {


    button.mobileMenu {
      color: #6996fa;
    }
  }

  nav {
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px;

      li {

        line-height: 22px;
        list-style: none;
        a {
          font-size: 22px;
          font-weight: 500;
          transition: filter 0.2s;

          &:hover {
            filter: brightness(0.9);
          }
        }
        .container-btnLogin {
          .btnLogin {
            padding: 1rem 1.87rem;
            border-radius: 0.25rem;
            line-height: 1.3rem;
            transition: filter 0.2s;
            background-color: #6996fa;
            a {
              font-size: 20px;
              font-weight: 500;
              color: #fff;

            }
            &:hover {
              filter: brightness(0.9);
            }
          }

        }
      }
    }
  }
`;
