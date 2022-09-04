
import * as S from "./styles";
import whats from "../../assets/img/whatsapp.webp"
import logo from "../../assets/img/visao.png"
export default function Footer() {
  return (
    <S.Container>
      <button
        type="button"
      >
        {/* <a
          href="https://api.whatsapp.com/send/?phone=5561984915007&text=Vim+Pelo+site&app_absent=0"
          ><img src={whats} alt="Botão do Whatsapp"
        /></a> */}
      </button>
      <div className="columns">

        <div className="columns-text">
          <h4>Nossos Serviços</h4>
          <ul>
            <li>Exames</li>
            <li>ULTRASSONOGRAFIA OCULAR</li>
            <li>ACUIDADE VISUAL </li>
            <li>Cirurgias</li>
            <li>RETINOGRAFIA</li>
            <li>TONOMETRIA</li>
          </ul>
        </div>

        <div className="columns-text">
          <h4>Links</h4>
          <ul >
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">Sobre</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="contact.html">Contato</a></li>
            <li><a href="services.html">Serviços</a></li>
            <li><a href="schedules-new.html">Agendamentos</a></li>
          </ul>
        </div>
        <div className="columns-text">
          <h4>Endereço</h4>
          <ul>
            <li>
              Brasília - DF
            </li>
            <li>
              Setor Comecial Sul
            </li>
            <li>
              Distrito Federal
            </li>
          </ul>
        </div>
        <div className="logo">
          <a>
            <img src={logo} alt="Logo " />
          </a>
        </div>
      </div>
      <div className="text-footer">
        <p>Todos os direitos reservados @Myltiane 2022</p>
      </div>
    </S.Container>
  )
}
