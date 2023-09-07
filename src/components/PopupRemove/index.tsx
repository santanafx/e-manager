import BotaoNao from '../BotaoNao'
import BotaoSim from '../BotaoSim'

type Props = {
  setRemoveItem: (value: boolean) => void
}

export default function PopupRemove({ setRemoveItem }: Props) {
  return (
    <div className="popupRemove">
      <div className="popupRemove__container">
        <div className="popupRemove__container__text">
          <p className="popupRemove__container__text__paragraph">
            Tem certeza que deseja remover esse produto?
          </p>
        </div>
        <div className="popupRemove__container__buttons">
          <BotaoNao onClick={() => setRemoveItem(false)} />
          <BotaoSim />
        </div>
      </div>
    </div>
  )
}
