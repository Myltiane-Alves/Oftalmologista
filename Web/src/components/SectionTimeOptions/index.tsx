import Calendar from '../Calendar'
import FooterButton from '../FooterButton'
import * as S from './styles'

export default function SectionTimeOptions() {
  return (
    <S.Container>
      <S.ContainerTitle>
        <h1>Escolha o Horário</h1>
      </S.ContainerTitle>
      <header className="hours">
        <h2>Horários do Dia</h2>
        <hr/>
      </header>
      <form>
        <h3>Sexta, 02 de Setembro 2022</h3>
        <div className="options">
          <label>
            <input type="radio" name="time" value="08:00" checked/>
            <span>08:00</span>
          </label>

          <label>
            <input type="radio" name="time" value="09:00" />
            <span>09:00</span>
          </label>

          <label>
            <input type="radio" name="time" value="10:00" checked/>
            <span>10:00</span>
          </label>

          <label>
            <input type="radio" name="time" value="11:00" checked/>
            <span>11:00</span>
          </label>
          <label>
            <input type="radio" name="time" value="12:00" checked/>
            <span>12:00</span>
          </label>
          <label>
            <input type="radio" name="time" value="13:00" checked/>
            <span>13:00</span>
          </label>
          <label>
            <input type="radio" name="time" value="14:00" checked/>
            <span>14:00</span>
          </label>
          <label>
            <input type="radio" name="time" value="15:00" checked/>
            <span>15:00</span>
          </label>
          <label>
            <input type="radio" name="time" value="16:00" checked/>
            <span>16:00</span>
          </label>
          <label>
            <input type="radio" name="time" value="17:00" checked/>
            <span>17:00</span>
          </label>
          <label>
            <input type="radio" name="time" value="18:00" checked/>
            <span>18:00</span>
          </label>


        </div>
        <FooterButton/>
      </form>
    </S.Container>
  )
}
