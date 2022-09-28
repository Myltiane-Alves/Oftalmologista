import * as S from './styles'
import { useForm } from 'react-hook-form';
import agendamento from "../../assets/img/agenda.png"
export default function SchedulesNewSection() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <S.Container>
      <div className="contact-form">
        <div className="form-header">
          <h2>Consulta</h2>
          <h2>Agende sua Consulta</h2>
          <p>Preencha o Formulário abaixo</p>
        </div>
        <form >
          <div>
            <input
              type="text"
              placeholder="Nome"
              {...register("Nome", { required: true, maxLength: 80 })}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}

            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Número"
              {...register("Número", { required: true, maxLength: 12 })}

            />
          </div>
          <div>
            <select placeholder="Selecione" >
              <option value="">Selecione</option>
              <option value="Mr">Agendamento de Consultas</option>
              <option value="Mr">Agendamento de Exames</option>
              <option value="Mr">Atendimento para lentes de Contato</option>
              <option value="Mr">Marcar Cirurgia</option>

            </select>
          </div>
          <div>
            <input
              type="datetime-local"
              placeholder="Escolha o Horário"
              {...register("Escolha o Horário", {})}

            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Mensagem"
              {...register("Mensagem", {})}

            />
          </div>
          <div className="container-btn">
            <button type="submit" className="btn" >
              <a>Agendar Consulta</a>
            </button>
          </div>
        </form>
      </div>
      <div className="about-img">
        <img src={agendamento} alt="agendamento de consulta" />

      </div>
    </S.Container>
  )
}
