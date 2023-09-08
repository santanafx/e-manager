import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { storeItems } from '../../store/reducers/produtos'
import { useDispatch, useSelector } from 'react-redux'
import { Produtos as ProdutosType } from '../../types'
import BotaoAtualizar from '../../components/BotaoAtualizar'
import { useParams } from 'react-router-dom'
import { RootReducer } from '../../store'

export default function EditarProdutos() {
  const { id } = useParams()
  const { items } = useSelector((state: RootReducer) => state.produtos)

  const [nome, setNome] = useState('')
  const [categoria, setCategoria] = useState('')
  const [preco, setPreco] = useState('')
  const [quantidade, setQuantidade] = useState('')

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const updateItem = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const url = `http://localhost:8000/products/${id}`

    const data = {
      name: nome,
      price: Number(preco),
      quantity: Number(quantidade),
      category: categoria
    }

    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
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

  useEffect(() => {
    const product = items.find((item) => item.id === id)

    if (product) {
      setNome(product.name)
      setCategoria(product.category)
      setPreco(String(product.price))
      setQuantidade(String(product.quantity))
    }
  }, [items, id])

  const storeData = (data: ProdutosType) => {
    dispatch(storeItems(data))
  }

  return (
    <section className="produtos__container">
      <h2 className="produtos__container__title">Editar produto {nome}</h2>
      <form
        onSubmit={(event) => updateItem(event)}
        className="produtos__container__form"
      >
        <label className="produtos__container__form__label" htmlFor="nome">
          Nome
        </label>
        <input
          className="produtos__container__form__input"
          type="text"
          placeholder="Nome do produto"
          id="nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
        <label className="produtos__container__form__label" htmlFor="categoria">
          Categoria
        </label>
        <input
          className="produtos__container__form__input"
          type="text"
          placeholder="Categoria do produto"
          id="categoria"
          value={categoria}
          onChange={(event) => setCategoria(event.target.value)}
        />
        <label className="produtos__container__form__label" htmlFor="preco">
          Preço
        </label>
        <input
          className="produtos__container__form__input"
          type="text"
          placeholder="0"
          id="preco"
          value={preco}
          onChange={(event) => setPreco(event.target.value)}
        />
        <label
          className="produtos__container__form__label"
          htmlFor="quantidade"
        >
          Quantidade
        </label>
        <input
          className="produtos__container__form__input"
          type="text"
          placeholder="0"
          id="quantidade"
          value={quantidade}
          onChange={(event) => setQuantidade(event.target.value)}
        />
        <BotaoAtualizar />
      </form>
    </section>
  )
}
