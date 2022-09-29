import * as S from "./styles";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineAlignRight } from "react-icons/ai";
import logo from "../../assets/img/visao.png"
import React, { useCallback, useState } from "react";
import MobileMenu from "./MobileMenu";

const Navbar: React.FC  =  () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const OpenMobileMenu = useCallback(() => {
    setMobileMenu(oldValue => !oldValue);
  }, []);

  return (
    <S.Container>
      <S.Content>
        <div className="container-logo">
          <a href="/">
            <img src={logo} alt="logo" className="logo"/>
          </a>
        </div>
        <button
          className="mobileMenu"
          type="button"
          onClick={OpenMobileMenu}
          aria-label="Open Menu"
        >
          <AiOutlineAlignRight size={50}/>
        </button>
        {mobileMenu && <MobileMenu  openMobileMenu={OpenMobileMenu}/>}
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="about">Sobre</a></li>
            <li><a href="blog">Blog</a></li>
            <li><a href="contact">Contato</a></li>
            <li><a href="services">Serviços</a></li>
            <li><a href="schedulesNew">Agendamentos</a></li>
            <li>
              <div className="container-btnLogin">
                <button
                  type="button"
                  className="btnLogin"
                >
                <a href="/login"> Login </a>
                </button>
              </div>
            </li>
          </ul>
        </nav>
      </S.Content>
    </S.Container>
  )
}

export default Navbar;
