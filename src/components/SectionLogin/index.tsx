import * as S from './styles'
import { useForm } from 'react-hook-form';
import logo from "../../assets/img/visao.png"
import linkedin from "../../assets/img/linkedin.png"
import instagram from "../../assets/img/instagram.png"
import youtube from "../../assets/img/youtube2.png"
import whatsapp from "../../assets/img/whatsapp2.png"
import { useState } from 'react';
import { post } from '../../api/service';
import { toast, ToastContainer } from 'react-toastify';
import { nextTick } from 'process';
import { useNavigate } from 'react-router-dom';
export default function SectionLogin() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const url = "/login";
  const navigate = useNavigate()

  const onSubmit = async () => {

    let objToSave = {
      email: email,
      password: password
    }

    await post(url, objToSave)
    .then((response) => {
      toast.success('Login realizado com sucesso!')
      navigate('/')
      reset()
    })
    .catch((error) => {
      toast.warning('Erro ao realizar login! Verifique os campos do formulário e tente novamente.')
    })
  }
  return (
    <S.Container>
      <div className="contact-form">
        <div className="form-header">
          <a href="/home">
            <img src={logo}  alt="logo"/>
          </a>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Login</h1>
          <div className="fields">
            <div className="field">
              <input
                 type="text"
                 placeholder="Email"
                value={email}
                {...register("Email", {
                  required: "Email é obrigatório",
                  onChange: (e) => setEmail(e.target.value)
                })}
              />
            </div>
            <div className="field">
              <input
                type="password"
                placeholder="Senha"
                value={password}
                {...register("Senha", {
                  required: true, maxLength: 16, minLength: 7,
                  onChange: (e) => setPassword(e.target.value)
                })}
              />
            </div>
          </div>
          <div className="container-btn">
            <button type="submit" className="btn"> Entrar</button>
            <span>Ainda não tem uma conta?</span>
            <a href="/users">Criar Conta</a>
          </div>
        </form>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
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
function next() {
  throw new Error('Function not implemented.');
}

