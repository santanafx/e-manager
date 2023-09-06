import { useSelector } from 'react-redux'
import lupa from '../../assets/images/lupa.png'
import { RootReducer } from '../../store'
import BotaoEditar from '../../components/BotaoEditar'
import BotaoRemover from '../../components/BotaoRemover'
import { parseToBrl } from '../../utils'

export default function BuscarProdutos() {
  const { items } = useSelector((state: RootReducer) => state.produtos)
  return (
    <section className="buscarProdutos__container">
      <h2 className="buscarProdutos__container__title">Produtos</h2>
      <div className="buscarProdutos__container__search">
        <input
          className="buscarProdutos__container__search__input"
          type="text"
          placeholder="Buscar produto"
        />
        <img
          className="buscarProdutos__container__search__img"
          src={lupa}
          alt="Search"
        />
      </div>
      <table className="buscarProdutos__container__table">
        <thead className="buscarProdutos__container__table__head">
          <tr className="buscarProdutos__container__table__head__row">
            <th className="buscarProdutos__container__table__head__item">ID</th>
            <th className="buscarProdutos__container__table__head__item">
              Nome
            </th>
            <th className="buscarProdutos__container__table__head__item">
              Categoria
            </th>
            <th className="buscarProdutos__container__table__head__item">
              Preço
            </th>
            <th className="buscarProdutos__container__table__head__item">
              Quantidade
            </th>
            <th className="buscarProdutos__container__table__head__item">
              Ações
            </th>
          </tr>
        </thead>
        <tbody className="buscarProdutos__container__table__body">
          {items.map((element) => (
            <tr key={element.id}>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>{element.category}</td>
              <td>{parseToBrl(element.price)}</td>
              <td>{element.quantity}</td>
              <td>
                <BotaoEditar />
                <BotaoRemover />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
