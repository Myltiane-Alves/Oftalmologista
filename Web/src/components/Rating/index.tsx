import * as S from "./styles";

export default function Rating() {
  return (
    <S.Container>
      <div className="container-title">
        <h2>Faça uma avaliação <strong>Gratuita</strong>.</h2>
        <p>A sua saúde é a nossa prioridade.</p>
      </div>
      <div>
        <button>
          <a href="schedulesNew">Avaliação Grátis</a>
        </button>
      </div>
    </S.Container>
  )
}
