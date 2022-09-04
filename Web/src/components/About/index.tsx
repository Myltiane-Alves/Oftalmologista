import * as S from './styles';
import sobre from "../../assets/img/aboutus.webp";
export default function AboutSection() {
  return (
    <S.Container>
      <div className="about">
        <h2>O centro de saúde Hospital Nacional</h2>
        <p>
          Todos os anos, nossos oftalmologistas tratam centenas de pacientes com uma grande variedade de condições oculares.
          Esse alto volume nos proporciona uma vasta experiência que se traduz no melhor atendimento possível aos nossos pacientes.
          Os pacientes oftalmológicos têm acesso aos mais recentes e eficazes tratamentos e tecnologias.
          Os nossos profissionais compartilham a expertise da equipe e a importância de um atendimento ocular integral e único.
        </p>
      </div>
      <div className="about-img">
        {/* <img src={sobre} alt="sobre" /> */}

      </div>
    </S.Container>
  )
}
