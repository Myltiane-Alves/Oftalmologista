import * as S from "./styles";
import { AiOutlineCheck } from "react-icons/ai";
export default function Plan() {
  return (
    <S.Container>
      <div className="container-title">
        <p>Conheça nossos planos</p>
        <h2>Planos</h2>

      </div>
      <div className="container-plan">
        <div className="cards">

          <div className="card">
            <h3>Individual</h3>
            <span>R$99.00</span>
            <div className="container-icons">
              <div className="check">
                <AiOutlineCheck size={24} style={{ color: "#07b632" }} />
                <p> Lorem Inpsum </p>
              </div>
              <div className="check">
                <AiOutlineCheck size={24} style={{ color: "#07b632" }} />
                <p> Lorem Inpsum </p>
              </div>
              <div className="check">
                <AiOutlineCheck size={24} style={{ color: "#07b632" }} />
                <p> Lorem Inpsum </p>
              </div>
              <div className="check">
                <AiOutlineCheck size={24} style={{ color: "#07b632" }} />
                <p> Lorem Inpsum </p>
              </div>
              <div className="check">
                <AiOutlineCheck size={24} style={{ color: "#07b632" }} />
                <p> Lorem Inpsum </p>
              </div>
            </div>

            <div className="container-btn">
              <button
                type="button"
                aria-label="Escolha seu plano"
              >
                <a href="/">
                  Escolha seu Plano
                </a>
              </button>
            </div>
          </div>
          <div className="card">
            <h3>Familiar</h3>
            <span>R$99.00</span>
            <div className="container-icons">
              <div className="check">
                <AiOutlineCheck size={24} style={{ color: "#07b632" }} />
                <p> Lorem Inpsum </p>
              </div>
              <div className="check">
                <AiOutlineCheck size={24} style={{ color: "#07b632" }} />
                <p> Lorem Inpsum </p>
              </div>
              <div className="check">
                <AiOutlineCheck size={24} style={{ color: "#07b632" }} />
                <p> Lorem Inpsum </p>
              </div>
              <div className="check">
                <AiOutlineCheck size={24} style={{ color: "#07b632" }} />
                <p> Lorem Inpsum </p>
              </div>
              <div className="check">
                <AiOutlineCheck size={24} style={{ color: "#07b632" }} />
                <p> Lorem Inpsum </p>
              </div>
            </div>

            <div className="container-btn">
              <button
                type="button"
                aria-label="Escolha seu Plano"
              >
                <a href="/">
                  Escolha seu Plano
                </a>
              </button>
            </div>
          </div>
          <div className="card">
            <h3>Empresarial</h3>
            <span>R$99.00</span>
            <div className="container-icons">
              <div className="check">
                <AiOutlineCheck size={24} style={{ color: "#07b632" }} />
                <p> Lorem Inpsum </p>
              </div>
              <div className="check">
                <AiOutlineCheck size={24} style={{ color: "#07b632" }} />
                <p> Lorem Inpsum </p>
              </div>
              <div className="check">
                <AiOutlineCheck size={24} style={{ color: "#07b632" }} />
                <p> Lorem Inpsum </p>
              </div>
              <div className="check">
                <AiOutlineCheck size={24} style={{ color: "#07b632" }} />
                <p> Lorem Inpsum </p>
              </div>
              <div className="check">
                <AiOutlineCheck size={24} style={{ color: "#07b632" }} />
                <p> Lorem Inpsum </p>
              </div>
            </div>

            <div className="container-btn">
              <button
                type="button"
                aria-label="Escolha seu Plano"
              >
                <a href="/">
                  Escolha seu Plano
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </S.Container>
  );
}
