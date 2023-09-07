type Props = {
  onClick?: () => void
}

export default function BotaoSim({ onClick }: Props) {
  return (
    <button className="botaoSim" onClick={onClick}>
      Sim
    </button>
  )
}
