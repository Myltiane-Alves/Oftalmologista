import * as S from "./styles"
export default function Map() {
  return(
    <S.Container>
      <div id="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.206311665319!2d-43.228717585034445!3d-22.90575998501238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997e58a085b7af%3A0x4d11e9a933d38ce3!2sMuseu+Nacional+-+UFRJ!5e0!3m2!1spt-BR!2sbr!4v1537538326477"
            width="100%"
            height="370"
            // frameborder="0"
            // styles="border: 0"
            // allowfullscreen
          ></iframe>
        </div>
    </S.Container>
  )
}
