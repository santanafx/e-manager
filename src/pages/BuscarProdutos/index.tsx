import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { parseToBrl } from '../../utils'
import { Produtos } from '../../types'
import { storeItems } from '../../store/reducers/produtos'

import lupa from '../../assets/images/lupa.png'
import BotaoEditar from '../../components/BotaoEditar'
import BotaoRemover from '../../components/BotaoRemover'
import PopupRemove from '../../components/PopupRemove'

export default function BuscarProdutos() {
  const { items } = useSelector((state: RootReducer) => state.produtos)
  const [removeItem, setRemoveItem] = useState(false)
  const [itemId, setItemId] = useState('')
  const navigate = useNavigate()

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

  const edit = (id: string) => {
    navigate(`/produtos/editarProdutos/${id}`)
  }

  const remove = (id: string) => {
    setRemoveItem(true)
    setItemId(id)
  }

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
                <BotaoEditar onClick={() => edit(element.id || '')} />
                <BotaoRemover onClick={() => remove(element.id || '')} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {removeItem ? (
        <>
          <div className="overlay"></div>
          <PopupRemove setRemoveItem={setRemoveItem} itemId={itemId} />
        </>
      ) : (
        ''
      )}
    </section>
  )
}
