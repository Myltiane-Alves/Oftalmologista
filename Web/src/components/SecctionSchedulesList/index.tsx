import * as S from './styles';
import { AiOutlineEdit, AiOutlineSave, AiOutlineClose } from "react-icons/ai";
export default function SectionSchedulesList() {
  return (
    <S.Container>
      <header className="container-title">
        <h1>Sobre nós</h1>
      </header>
      <header className="next-header">
        <h2>Próximos</h2>
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
              <label htmlFor="">Valor</label>
              <span>100,00</span>
            </div>
            <div>
              <label htmlFor="">Serviço</label>
              <span>Consulta</span>
            </div>
          </section>
          <div className="container-btn">
            <button
              className="btn-save"
            >
              <AiOutlineSave size={24} className="icons"/>
              Salvar
            </button>
            <button
              className="btn-edit"
            >
              <AiOutlineEdit size={24} className="icons"/>
              Editar
            </button>
            <button
              className="btn-cancel"
            >
              <AiOutlineClose size={24} className="icons"/>
              Cancelar
            </button>
          </div>
        </li>
      </ul>
      <header className="historico-header">
        <h2>Histórico</h2>
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
              <label htmlFor="">Valor</label>
              <span>100,00</span>
            </div>
            <div>
              <label htmlFor="">Serviço</label>
              <span>Consulta</span>
            </div>
          </section>
          <div className="container-btn">
            <button
              className="btn-save"
            >
              <AiOutlineSave size={24} className="icons"/>
              Salvar
            </button>
            <button
              className="btn-edit"
            >
              <AiOutlineEdit size={24} className="icons"/>
              Editar
            </button>
            <button
              className="btn-cancel"
            >
              <AiOutlineClose size={24} className="icons"/>
              Cancelar
            </button>
          </div>
        </li>
      </ul>
    </S.Container>
  )
}
