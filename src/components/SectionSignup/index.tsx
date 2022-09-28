import  { useState } from 'react';
import * as S from './styles'
import { useForm } from 'react-hook-form';
import logo from "../../assets/img/visao.png"
import linkedin from "../../assets/img/linkedin.png"
import instagram from "../../assets/img/instagram.png"
import youtube from "../../assets/img/youtube2.png"
import whatsapp from "../../assets/img/whatsapp2.png"
import { post } from '../../api/service';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export default function SectionSignup() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [name, setName] = useState('')
  const [cpf, setCPF] = useState('')
  const [cep, setCep] = useState('')
  const [street, setStreet] = useState('')
  const [uf, setUF] = useState('')
  const [city, setCity] = useState('')
  const [district, setDistrict] = useState('')
  const [state, setState] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();
  const url = "/users";

  const onSubmit = async () => {
    let objToSave = {
      name: name,
      cpf: cpf,
      cep: cep,
      street: street,
      uf: uf,
      city: city,
      district: district,
      state: state,
      phone: phone,
      email: email,
      password: password
    }
    console.log(objToSave)

    await post(url, objToSave)
    .then((response) => {
      if(objToSave) {
        toast.success('Cadastro realizado com sucesso!')
        navigate('/login')

      }
      // toast.success('Cadastro realizado com sucesso!')
      // navigate('/login')
    })
    .catch((error) => {
      toast.warning('Erro ao realizar cadastro! Usuário Já Existe.')
    })
  }

  const checkCEP = (e: any) => {
    const cep = e.target.value.replace(/\D/g, '');

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(res => res.json()).then(data => {
        setStreet(data.logradouro)
        setUF(data.uf)
        setCity(data.localidade)
        setDistrict(data.bairro)
        setState(data.uf)
      })

  }
  return (
    <S.Container>
      <div className="contact-form">
        <form onSubmit={handleSubmit(onSubmit)} >
          <h1>Cadastrar Usuário</h1>
          <div className="fields">
            <div className="field">
              <input
                type="text"
                value={name}
                placeholder="Nome Completo"
                {...register("Nome", {
                  required: true, maxLength: 80,
                  onChange: (e) => setName(e.target.value)
                })}
              />
            </div>
            <div className="field">
              <input
                type="text"
                value={cpf}
                placeholder="CPF"
                {...register("CPF", {
                  required: "Verifique os dados dos campos",
                  onChange: (e) => setCPF(e.target.value)
                })}
              />
              {/* {errors.CPF && <span className="error">{errors.CPF.message}</span>} */}
            </div>

            <div className="field">
              <input
                type="text"
                value={cep}
                placeholder="CEP"
                {...register("CEP", {
                  required: true,
                  onChange: (e) => setCep(e.target.value),
                  onBlur: (e) => checkCEP(e)
                })}
              />
              {/* {errors.CEP && <span className="error">{errors.CEP.message}</span>} */}
            </div>
            <div className="field">
              <input
                type="text"
                value={street}
                placeholder="RUA"
                {...register("uf", {
                  required: true, maxLength: 80,
                  onChange: (e) => setStreet(e.target.value)
                })}
              />
              {/* {errors.uf && <span className="error">{errors.uf.message}</span>} */}
            </div>
            <div className="field">
              <select
                placeholder="Estado"
                value={state}
                {...register("state", {
                  required: true,
                  onChange: (e) => setState(e.target.value)
                })}
              >
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
              <input
                type="text"
                value={city}
                placeholder="Cidade"
                {...register("City", {
                  required: "Verifique os dados dos campos", maxLength: 80,
                  onChange: (e) => setCity(e.target.value)
                })}
              />
              {/* {errors.City && <span className="error">{errors.City.message}</span>} */}
            </div>
            <div className="field">
              <input
                type="text"
                value={district}
                placeholder="Bairro"
                {...register("Bairro", {
                  required: "Verifique os dados dos campos", maxLength: 80,
                  onChange: (e) => setDistrict(e.target.value)
              })}

              />
              {/* {errors.Bairro && <span className="error">{errors.Bairro.message}</span>} */}
            </div>
            <div className="field">
              <input
                type="text"
                value={uf}
                placeholder="UF"
                {...register("UF", {
                  required: "Verifique os dados dos campos", maxLength: 80,
                  onChange: (e) => setUF(e.target.value)
              })}
              />
              {/* {errors.UF && <span className="error">{errors.UF.message}</span>} */}
            </div>
            <div className="field">
              <input
                type="number"
                value={phone}
                placeholder="Telefone"
                {...register("phone", {
                  required: "Preencha o campo Telefone", minLength: 11, maxLength: 20,
                  onChange: (e) => setPhone(e.target.value)

              })}
              />
              {/* {errors.phone && <span className="error">{errors.phone.message}</span>} */}
            </div>
            <div className="field">
              <input
                type="text"
                value={email}
                placeholder="Email"
                {...register("Email", {
                  required: "Preencha o Campo com um email  Válido", pattern: /^\S+@\S+$/i,
                  onChange: (e) => setEmail(e.target.value)
                })}
              />
              {/* {errors.Email && <span className="error">{errors.Email.message}</span>} */}
            </div>
            <div className="field">
              <input
                type="password"
                value={password}
                placeholder="Senha"
                {...register("Senha", {
                  required: true, maxLength: 80,
                  onChange: (e) => setPassword(e.target.value)
                })}
              />
              {/* {errors.Senha && <span className="error">{errors.Senha.message}</span>} */}
            </div>

          </div>
          <div className="container-btn">
            <button
              type="submit"
              className="btn"
              onClick={handleSubmit(onSubmit)}
            >
              Cadastrar
            </button>
          </div>
        </form>
        <ToastContainer
          position="top-right"
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

