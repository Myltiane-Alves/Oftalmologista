import * as S from './styles'
import { useForm } from 'react-hook-form';
import logo from "../../assets/img/visao.png"
import linkedin from "../../assets/img/linkedin.png"
import instagram from "../../assets/img/instagram.png"
import youtube from "../../assets/img/youtube2.png"
import whatsapp from "../../assets/img/whatsapp2.png"
export default function SectionForget() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <S.Container>
      <div className="contact-form">
        <div className="form-header">
          <a href="/home">
            <img src={logo}  alt="logo"/>
          </a>
        </div>
        <form >
          <h1>Esqueceu a Senha?</h1>
          <div className="fields">

            <div className="field">
              <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
            </div>
          </div>
          <div className="container-btn">
            <button type="submit" className="btn"> Entrar</button>
            <span>Ainda não tem uma conta?</span>
            <a href="/signup">Criar Conta</a>
          </div>
        </form>
      </div>
      <div className="about-img">
        <a href='/'>
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
