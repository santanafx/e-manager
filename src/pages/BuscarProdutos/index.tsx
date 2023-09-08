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
  const [searchProduct, setSearchProduct] = useState('')
  const [searching, setSearching] = useState(false)
  const [searchProductObj, setSearchProductObj] = useState<Produtos>()
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

  const search = (searchProduct: string) => {
    setSearching(true)
    const product = items.find((item) => item.name === searchProduct)
    if (product) {
      setSearchProductObj(product)
    } else {
      setSearching(false)
      alert(
        `O produto com o nome ${searchProduct} não existe, tente novamente.`
      )
    }
  }

  return (
    <section className="buscarProdutos__container">
      <h2 className="buscarProdutos__container__title">Produtos</h2>
      <div className="buscarProdutos__container__search">
        <input
          className="buscarProdutos__container__search__input"
          type="text"
          placeholder="Buscar produto"
          value={searchProduct}
          onChange={(event) => setSearchProduct(event.target.value)}
          onKeyPress={() => search(searchProduct)}
        />
        <img
          className="buscarProdutos__container__search__img"
          src={lupa}
          alt="Search"
        />
      </div>
      <div className="buscarProdutos__container__table">
        <div className="buscarProdutos__container__table__head">
          <span className="buscarProdutos__container__table__head__item">
            ID
          </span>
          <span className="buscarProdutos__container__table__head__item">
            Nome
          </span>
          <span className="buscarProdutos__container__table__head__item">
            Categoria
          </span>
          <span className="buscarProdutos__container__table__head__item">
            Preço
          </span>
          <span className="buscarProdutos__container__table__head__item">
            Quantidade
          </span>
          <span className="buscarProdutos__container__table__head__item">
            Ações
          </span>
        </div>

        {searching && searchProductObj ? (
          <div
            className="buscarProdutos__container__table__body"
            key={searchProductObj.id}
          >
            <span>{searchProductObj.id}</span>
            <span>{searchProductObj.name}</span>
            <span>{searchProductObj.category}</span>
            <span>{parseToBrl(searchProductObj.price)}</span>
            <span>{searchProductObj.quantity}</span>
            <span>
              <BotaoEditar onClick={() => edit(searchProductObj.id || '')} />
              <BotaoRemover onClick={() => remove(searchProductObj.id || '')} />
            </span>
          </div>
        ) : (
          <>
            {items.map((element) => (
              <div
                key={element.id}
                className="buscarProdutos__container__table__body"
              >
                <span>{element.id}</span>
                <span>{element.name}</span>
                <span>{element.category}</span>
                <span>{parseToBrl(element.price)}</span>
                <span>{element.quantity}</span>
                <span>
                  <BotaoEditar onClick={() => edit(element.id || '')} />
                  <BotaoRemover onClick={() => remove(element.id || '')} />
                </span>
              </div>
            ))}
          </>
        )}
      </div>
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
