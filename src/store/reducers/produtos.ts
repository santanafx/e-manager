import { createSlice } from '@reduxjs/toolkit'
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
    //  add: (state, action: PayloadAction<Produtos>) =>{
    //  }
  }
})

// export const {  } = produtosSlice.actions
export default produtosSlice.reducer
