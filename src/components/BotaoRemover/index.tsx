type Props = {
  onClick: () => void
}

export default function BotaoRemover({ onClick }: Props) {
  return (
    <button className="botaoRemover" onClick={onClick}>
      Remover
    </button>
  )
}
