import * as S from './styles'
import { useForm } from 'react-hook-form';
import logo from "../../assets/img/visao.png"
import linkedin from "../../assets/img/linkedin.png"
import instagram from "../../assets/img/instagram.png"
import youtube from "../../assets/img/youtube2.png"
import whatsapp from "../../assets/img/whatsapp2.png"
export default function SectionSignup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <S.Container>
      <div className="contact-form">
        <form >
          <h1>Cadastrar Usuário</h1>
          <div className="fields">
            <div className="field">
              <input
                type="text"
                placeholder="Nome Completo"
                {...register("Nome", { required: true, maxLength: 80 })}
              />
            </div>
            <div className="field">
              <input
                type="text"
                placeholder="CPF"
                {...register("CPF", { required: true, maxLength: 80 })}
              />
            </div>

            <div className="field">
              <input type="text" placeholder="CEP" {...register("CEP", { required: true, pattern: /^\S+@\S+$/i })} />
            </div>
            <div className="field">
              <input type="text" placeholder="RUA" {...register("UF", { required: true, pattern: /^\S+@\S+$/i })} />
            </div>
            <div className="field">
              <select placeholder="Estado" {...register("state", { required: true, pattern: /^\S+@\S+$/i })} >
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </select>
            </div>
            <div className="field">
              <input type="text" placeholder="Cidade" {...register("City", { required: true, pattern: /^\S+@\S+$/i })} />
            </div>
            <div className="field">
              <input type="text" placeholder="Bairro" {...register("Bairro", { required: true, pattern: /^\S+@\S+$/i })} />
            </div>
            <div className="field">
              <input
                type="date"
                placeholder="Data de Nascimento"
                {...register("data de nascimento", { required: true, maxLength: 80 })}
              />
            </div>
            <div className="field">
              <input type="text" placeholder="Telefone" {...register("Telefone", { required: true, pattern: /^\S+@\S+$/i })} />
            </div>
            <div className="field">
              <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
            </div>
            <div className="field">
              <input
                type="password"
                placeholder="Criar Senha"
                {...register("Senha", { required: true, maxLength: 80 })}
              />
            </div>
            <div className="field">
              <input
                type="password"
                placeholder="Confirmar Senha"
                {...register("Senha", { required: true, maxLength: 80 })}
              />
            </div>
          </div>
          <div className="container-btn">
            <button type="submit" className="btn"> Cadastrar</button>
          </div>
        </form>
      </div>
      <div className="about-img">
        <a href="/">
          <img src={logo} alt="Logo" className="logo"/>
        </a>
        <div className="container-icons">
          <div>
            <a href="https://www.linkedin.com/in/myltiane-alves/">
              <img src={linkedin} alt="Linkedin" />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com">
              <img src={instagram} alt="Instagram" />
            </a>
          </div>
          <div>
            <a href="https://api.whatsapp.com/send/?phone=5561984915007&text=Vim+Pelo+site&app_absent=0">
              <img src={whatsapp} alt="Whatsapp" />
            </a>
          </div>
          <div>
            <a href="https://youtube.com">
              <img src={youtube} alt="Youtube" />
            </a>
          </div>

        </div>
        <p>Todos os Direitos Reservados @Myltiane 2022</p>
      </div>
    </S.Container>
  )
}

