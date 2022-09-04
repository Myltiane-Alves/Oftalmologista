import * as S from "./styles";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineAlignRight } from "react-icons/ai";
import logo from "../../../assets/img/visao.png"
import React from "react";
interface MobileMenuProps {
  openMobileMenu(): void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({openMobileMenu}) => {
  return (
    <S.Container>
      <S.Nav>
        <div className="logoMenu">
          <a>
            <img src={logo} alt="logo" />
          </a>
        </div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="about">Sobre</a></li>
          <li><a href="blog">Blog</a></li>
          <li><a href="contact">Contato</a></li>
          <li><a href="services">Serviços</a></li>
          <li><a href="schedulesNew">Agendamentos</a></li>
          <li>
            <div>
              <button
                type="button"
                className="btnLogin"
              >
               <Link to="/login"> Login </Link>
              </button>
            </div>
          </li>
        </ul>
        <div className="container-closeMenu">
          <button className="closeMenu" type="button" onClick={openMobileMenu}>
            <AiOutlineClose className="icon"/>
          </button>
        </div>

      </S.Nav>
    </S.Container>
  )
}

export default MobileMenu;
