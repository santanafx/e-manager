import { useEffect, useState } from 'react'
import CardProdutos from '../../components/CardProdutos'
import { parseToBrl } from '../../utils'
import { Produtos } from '../../types/index'
import { useDispatch } from 'react-redux'
import { storeItems } from '../../store/reducers/produtos'

export default function Dashboard() {
  const [getData, setGetData] = useState<Produtos[]>([])

  const dispatch = useDispatch()

  useEffect(() => {
    const url = 'http://localhost:8000/products'
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na requisição')
        }
        return response.json()
      })
      .then((data) => {
        console.log('Dados recebidos:', data)
        setGetData(data)
        data.forEach((item: Produtos) => {
          storeData(item)
        })
      })
      .catch((error) => {
        console.error('Erro:', error)
      })
  }, [])

  const storeData = (data: Produtos) => {
    dispatch(storeItems(data))
  }

  return (
    <section className="dashboard__container">
      <CardProdutos title="Produtos com estoque baixo">
        <div className="dashboard__container__estoque">
          {getData
            .sort((a, b) => a.quantity - b.quantity)
            .map((element) => (
              <div
                className="dashboard__container__estoque__item"
                key={element.id}
              >
                <p>{element.name}</p>
                <p>{element.quantity}</p>
              </div>
            ))}
        </div>
      </CardProdutos>
      <CardProdutos title="Produtos mais caros">
        <div className="dashboard__container__caros">
          {getData
            .sort((a, b) => b.price - a.price)
            .map((element) => (
              <div
                className="dashboard__container__caros__item"
                key={element.id}
              >
                <p>{element.name}</p>
                <p className="dashboard__container__caros__item__price">
                  {parseToBrl(element.price)}
                </p>
              </div>
            ))}
        </div>
      </CardProdutos>
      <CardProdutos title="Produtos">
        <div className="dashboard__container__produtos">
          <span className="dashboard__container__produtos__numero">
            {getData.length}
          </span>
          <p>Produtos adicionados</p>
        </div>
      </CardProdutos>
    </section>
  )
}
