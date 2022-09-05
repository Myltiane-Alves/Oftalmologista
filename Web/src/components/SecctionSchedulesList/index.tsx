import * as S from './styles';
import sobre from "../../assets/img/aboutus.webp";
export default function SectionSchedulesList() {
  return (
    <S.Container>
      <header className="container-title">
        <h1>Sobre nós</h1>
      </header>
      <ul>
        <li>
          <section>
            <div>
              <label htmlFor="">Data</label>
              <span>05/09/2022</span>
            </div>
            <div>
              <label htmlFor="">Status</label>
              <span>Confirmado</span>
            </div>
            <div>
              <label htmlFor="">Serviço</label>
              <span>Consulta</span>
            </div>
          </section>
          <button></button>
        </li>
      </ul>
    </S.Container>
  )
}
