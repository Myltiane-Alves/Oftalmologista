import { useState } from 'react';
import * as S from "./styles";
import whats from "../../assets/img/whatsapp.webp"
import { AiFillMail, AiFillGithub } from "react-icons/ai";
import { RiWhatsappFill, RiSendPlaneFill } from "react-icons/ri";

import { useForm } from 'react-hook-form';
export default function SectionContact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [phone, setPhone] = useState('')

  const url = "/contatcs";

  const handleSubmit = async ()
  return (
    <S.Container>
      <div className="contact-form">
        <h2>Fale Conosco</h2>
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
              placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Número" {...register("Número", { required: true, maxLength: 12 })}
            />
          </div>

          <div>
            <textarea
              placeholder="Mensagem"
              {...register("Mensagem", {})}
            />
          </div>
          <input type="submit" className="btn" />
        </form>
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
