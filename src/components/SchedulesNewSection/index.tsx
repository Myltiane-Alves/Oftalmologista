import * as S from './styles'
import { useForm } from 'react-hook-form';
import agendamento from "../../assets/img/agenda.png"
import { useEffect, useState } from 'react';
import { post } from '../../api/service';
import { toast, ToastContainer } from 'react-toastify';
import config from '../../api/config';
import { useParams } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
export default function SchedulesNewSection() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  let { id } = useParams();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState('')

  const url = "/schedules"

  const onSubmit = async () => {
    let objToSave = {
      name: name,
      email: email,
      message: message,
      phone: phone,
      date: date,
    }

    console.log(objToSave)

    await post(url, objToSave)
    .then((response) => {
      toast.success('Consulta agendada com sucesso!')
      reset()
    })
    .catch((error) => {
      toast.warning('Erro ao agendar consulta! Verifique os dados e tente novamente.')
    })
  }
  return (
    <S.Container>
      <div className="contact-form">
        <div className="form-header">
          <div className="container-icons">
            <a href="/">
              <AiOutlineArrowLeft
                className='icon-back'
                size={35}
              />
            </a>

          </div>
          <h2>Consulta</h2>
          <h2>Agende sua Consulta</h2>
          <p>Preencha o Formulário abaixo</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="container-form">
            <div>
              <input
                type="text"
                value={name}
                placeholder="Nome"
                {...register("Nome", {
                  required: true, maxLength: 20,
                  onChange: (e) => setName(e.target.value)
                })}
              />
            </div>
            <div>
              <input
                type="text"
                value={email}
                placeholder="Email"
                {...register("Email", {
                  required: true, pattern: /^\S+@\S+$/i,
                  onChange: (e) => setEmail(e.target.value)
                })}

              />
            </div>
            <div>
              <input
                type="tel"
                value={phone}
                placeholder="Número"
                {...register("Número", {
                  required: "Número é obrigatório",
                  maxLength: 12,
                  onChange: (e) => setPhone(e.target.value)
                })}

              />
            </div>
            <div>
              <input
                type="datetime-local"
                value={date}
                placeholder="Escolha o Horário"
                {...register("Escolha o Horário", {
                  required: "Horário é obrigatório",
                  onChange: (e) => setDate(e.target.value)
                })}

              />
            </div>
            <div>
              <textarea
                value={message}
                placeholder="Mensagem"
                {...register("Mensagem", {
                  required: "Mensagem é obrigatório",
                  onChange: (e) => setMessage(e.target.value)
                })}

              />
            </div>

          </div>
          <div className="container-btn">
            <button type="submit" className="btn" >
              <a>Agendar Consulta</a>
            </button>
          </div>
        </form>
        <ToastContainer
            position='top-right'
            autoClose={8000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover

        />
      </div>
      <div className="about-img">
        <img src={agendamento} alt="agendamento de consulta" />

      </div>
    </S.Container>
  )
}
