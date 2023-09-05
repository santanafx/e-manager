import lupa from '../../assets/images/lupa.png'

export default function BuscarProdutos() {
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

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>{/* add map here */}</tbody>
      </table>
    </section>
  )
}
