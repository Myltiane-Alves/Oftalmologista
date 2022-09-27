import { useState } from 'react';
import * as S from "./styles";

import { useForm } from 'react-hook-form';
import { post } from '../../api/service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { ContactProps } from '../../@types/Contatc';

export default function SectionContact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactProps>()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [phone, setPhone] = useState('')
  const [sent, setSent] = useState(false)
  const url = "/contacts";

  const onSubmit = async () => {

    let objToSave = {
      name: name,
      email: email,
      message: message,
      phone: phone
    }

    await post(url, objToSave)
    .then((response) => {
      toast.success('Mensagem enviada com sucesso!')
      reset()

    })
    .catch((error) => {
      toast.warning('Erro ao enviar mensagem! Verifique os dados e tente novamente.')
    })
  }

  return (
    <S.Container>
      <div className="contact-form">
        <h2>Fale Conosco</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="text"
              placeholder="Nome"
              value={name}
              {...register("name", {
                required: "Nome é obrigatório",
                onChange: (e) => setName(e.target.value)
              })}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              value={email}
              {...register("email", {
                required: "Email é obrigatório",
                onChange: (e) => setEmail(e.target.value)
              })}
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Número"
              value={phone}
              {...register("phone", {
                required: "Número é obrigatório",
                onChange: (e) => setPhone(e.target.value),
                pattern: {
                  value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                  message: "Numero Inválido",
                },
              })}
            />
          </div>

          <div>
            <textarea
              placeholder="Mensagem"
              value={message}
              onFocus={(e) => e.target.placeholder = ""}
              {...register("message", {
                required: "Descreva sua Mensagem",
                onChange: (e) => setMessage(e.target.value),
                minLength: {
                  value: 5,
                  message: "Mensagem muito curta descreva melhor",
                }
              })}
            />
          </div>
          <input
            type="submit"
            className="btn"
            onClick={onSubmit}
            value="Enviar Mensagem"
          />
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

      <div className="address">
        <h2>Nossas Unidades</h2>
        <div className="address-info">
          <div>
            <h3>Ceilândia DF</h3>
            <p>
              QNN QD 20, Conjunto P, Lote 56 - Brasília DF<br />
              Seg-Sex: 8h às 18h / Sáb: 8h às 12h
            </p>
          </div>

          <div>
            <h3>Taguatinga DF</h3>
            <p>
              24h: CNC 01, Lote 14 - Edifício Isob - Brasília - DF<br />
              & Asa Sul: 714/914 Sul - Edifício Talento, Térreo - Próximo ao
              LBV
            </p>
          </div>

          <div>
            <h3>Samambaia DF</h3>
            <p>
              QN 204, Conj. 1 - Lote 17, Loja 01, - Brasília -
              DF<br />
              Seg-Sex: 8h às 18h / Sáb: 8h às 12h
            </p>
          </div>

          <div>
            <h3>Asa sul DF</h3>
            <p>
              714/914 Sul - Edifício Talento, Térreo - <br />
              Brasília - DF <br />
              Seg-Sex: 8h às 18h / Sáb: 8h às 12h
            </p>
          </div>
          <div>
            <h3>Samambaia DF</h3>
            <p>
              QN 204, Conj. 1 - Lote 17, Loja 01, - Brasília -
              DF<br />
              Seg-Sex: 8h às 18h / Sáb: 8h às 12h
            </p>
          </div>

          <div>
            <h3>Asa sul DF</h3>
            <p>
              714/914 Sul - Edifício Talento, Térreo - <br />
              Brasília - DF <br />
              Seg-Sex: 8h às 18h / Sáb: 8h às 12h
            </p>
          </div>
        </div>
      </div>

    </S.Container>
  )
}
