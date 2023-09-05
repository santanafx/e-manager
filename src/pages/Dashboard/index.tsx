import CardProdutos from '../../components/CardProdutos'

export default function Dashboard() {
  return (
    <section className="dashboard__container">
      <CardProdutos title="Produtos com estoque baixo"></CardProdutos>
      <CardProdutos title="Produtos mais caros"></CardProdutos>
      <CardProdutos title="Produtos"></CardProdutos>
    </section>
  )
}
