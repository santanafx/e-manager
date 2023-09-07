import { useState } from 'react'
import BotaoAdicionar from '../../components/BotaoAdicionar'
import { addItems } from '../../store/reducers/produtos'
import { useDispatch } from 'react-redux'
import { Produtos as ProdutosType } from '../../types'

export default function Produtos() {
  const [nome, setNome] = useState('')
  const [categoria, setCategoria] = useState('')
  const [preco, setPreco] = useState('')
  const [quantidade, setQuantidade] = useState('')

  const dispatch = useDispatch()

  const addItem = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const url = 'http://localhost:8000/products'

    const data = {
      name: nome,
      price: Number(preco),
      quantity: Number(quantidade),
      category: categoria
    }

    const options = {
      method: 'POST',
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

    setNome('')
    setCategoria('')
    setPreco('')
    setQuantidade('')
  }

  const storeData = (data: ProdutosType) => {
    dispatch(addItems(data))
  }

  return (
    <section className="produtos__container">
      <h2 className="produtos__container__title">Adicionar produto</h2>
      <form
        onSubmit={(event) => addItem(event)}
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
        <BotaoAdicionar />
      </form>
    </section>
  )
}
