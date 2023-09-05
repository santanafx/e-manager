import BotaoAdicionar from '../../components/BotaoAdicionar'

export default function Produtos() {
  return (
    <section className="produtos__container">
      <h2 className="produtos__container__title">Adicionar produto</h2>
      <form className="produtos__container__form">
        <label className="produtos__container__form__label" htmlFor="">
          Nome
        </label>
        <input className="produtos__container__form__input" type="text" />
        <label className="produtos__container__form__label" htmlFor="">
          Categoria
        </label>
        <input className="produtos__container__form__input" type="text" />
        <label className="produtos__container__form__label" htmlFor="">
          Preço
        </label>
        <input className="produtos__container__form__input" type="text" />
        <label className="produtos__container__form__label" htmlFor="">
          Quantidade
        </label>
        <input className="produtos__container__form__input" type="text" />
        <BotaoAdicionar />
      </form>
    </section>
  )
}
