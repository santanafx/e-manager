type Props = {
  title: string
  children?: string
}

export default function CardProdutos({ title, children }: Props) {
  return (
    <div className="cardProdutos__container" tabIndex={3}>
      <h2 className="cardProdutos__container__title">{title}</h2>
      {children}
    </div>
  )
}
