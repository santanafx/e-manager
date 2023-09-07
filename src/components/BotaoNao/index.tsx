type Props = {
  onClick: () => void
}

export default function BotaoNao({ onClick }: Props) {
  return (
    <button className="botaoNao" onClick={onClick}>
      Não
    </button>
  )
}
