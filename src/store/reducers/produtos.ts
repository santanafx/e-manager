import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produtos } from '../../types'

type ProdutosState = {
  items: Produtos[]
}

const initialState: ProdutosState = {
  items: []
}

const produtosSlice = createSlice({
  name: 'produtos',
  initialState,
  reducers: {
    storeItems: (state, action: PayloadAction<Produtos>) => {
      const produto = state.items.find((item) => item.id === action.payload.id)
      if (!produto) {
        state.items.push(action.payload)
      }
    },
    addItems: (state, action: PayloadAction<Produtos>) => {
      const produto = state.items.find(
        (item) => item.name.toLowerCase() === action.payload.name.toLowerCase()
      )
      if (!produto) {
        state.items.push(action.payload)
      } else {
        alert('Um produto com este nome já existe!')
      }
    }
  }
})

export const { storeItems, addItems } = produtosSlice.actions
export default produtosSlice.reducer
