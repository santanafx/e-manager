import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { storeItems } from '../../store/reducers/produtos'
import { Produtos } from '../../types'
import BotaoNao from '../BotaoNao'
import BotaoSim from '../BotaoSim'

type Props = {
  setRemoveItem: (value: boolean) => void
  itemId: string
}

export default function PopupRemove({ setRemoveItem, itemId }: Props) {
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const deleteItem = (itemId: string) => {
    const url = `http://localhost:8000/products/${itemId}`

    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na requisição')
        }
        return response.json()
      })
      .then((data) => {
        console.log('Resposta:', data)
        storeData(data)
      })
      .catch((error) => {
        console.error('Erro:', error.message)
      })

    navigate('/produtos/buscarProdutos')
    window.location.reload()
  }

  const storeData = (data: Produtos) => {
    dispatch(storeItems(data))
  }

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
          <BotaoSim
            onClick={() => {
              deleteItem(itemId)
              setRemoveItem(false)
            }}
          />
        </div>
      </div>
    </div>
  )
}
