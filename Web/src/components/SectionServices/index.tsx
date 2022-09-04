import * as S from './styles';
import sobre from "../../assets/img/aboutus.webp";
import { MdOutlineMedicalServices } from "react-icons/md";
import { FaRegHospital } from "react-icons/fa";
import { Ri24HoursFill } from "react-icons/ri";
export default function SectionServices() {
  return (
    <S.Container>
      <div className="container-title">
        <h2>
          Nossos Serviços
        </h2>
      </div>

      <div className="container-cards">
        <div className="cards">
          <div className="card">
            <MdOutlineMedicalServices size={70} className="icons"/>
            <h3>Ambiente Seguro</h3>
            <p>
              Adotamos diversas medidas sanitárias de prevenção ao contágio do Covid-19 em nossas instalações.
            </p>
          </div>
          <div className="card">
            <FaRegHospital size={70} className="icons"/>
            <h3>Taxas mais baixas da cidade</h3>
            <p>
              Saiba mais sobre nossas especialidades oftalmológicas e os serviços que prestamos.
            </p>
          </div>
          <div className="card">
            <Ri24HoursFill size={70} className="icons"/>
            <h3>Agende um horário</h3>
            <p>
              Veja nossos horários disponíveis e marque sua consulta com toda comodidade e
              rapidez de onde você estiver.
            </p>
          </div>

        </div>
      </div>

    </S.Container>
  )
}
