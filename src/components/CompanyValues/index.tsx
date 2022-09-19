import * as S from "./styles";
import { HiOutlineUserGroup } from "react-icons/hi";
import { GiHospital } from "react-icons/gi";
import { BsHeadset } from "react-icons/bs";
export default function CompanyValues() {
  return (
    <S.Container>
      <div className="container-title">
        <h1>Sobre nós</h1>
      </div>
      <div className="container-plan">
        <div className="cards">
          <div className="card">
            <div className="container-icons">
              <HiOutlineUserGroup size={170} className="icons" />
              <p> Sobre </p>
            </div>
            <div className="card-text">
              <p>
                Todos os anos, nossos oftalmologistas tratam centenas de pacientes com uma grande variedade de condições oculares.
                Esse alto volume nos proporciona uma vasta experiência que se traduz no melhor atendimento possível aos nossos pacientes.
                Os pacientes oftalmológicos têm acesso aos mais recentes e eficazes tratamentos e tecnologias.
                Os nossos profissionais compartilham a expertise da equipe e a importância de um atendimento ocular integral e único.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="container-icons">
              <GiHospital size={170} className="icons" />
              <p> Nossa Empresa </p>
            </div>
            <div className="card-text">
              <p>
                Promover a saúde visual com profissionalismo, inovação cientifica e humanização,
                contribuindo assim para a melhoria da qualidade de vida de todos os nossos pacientes, parceiros e colaboradores

              </p>
              <p>
                Conquistar a liderança com excelência em Brasília, por meio da prática diária dos nossos valores e com atuação capilarizada em unidades satélites.

              </p>
            </div>
          </div>
          <div className="card">
            <div className="container-icons">
              <BsHeadset size={170} className="icons" />
              <p> Atendimento </p>
            </div>
            <div className="card-text">
              <p>
                Oferecemos atendimentos a urgências 24 horas por dia, incluindo finais de semanas e feriados,
                e a realização de tratamentos por agendamento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </S.Container>
  );
}
