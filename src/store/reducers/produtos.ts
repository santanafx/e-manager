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
    }
  }
})

export const { storeItems } = produtosSlice.actions
export default produtosSlice.reducer
