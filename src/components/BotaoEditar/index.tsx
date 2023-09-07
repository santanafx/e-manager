type Props = {
  onClick: () => void
}

export default function BotaoEditar({ onClick }: Props) {
  return (
    <button className="botaoEditar" onClick={onClick}>
      Editar
    </button>
  )
}
