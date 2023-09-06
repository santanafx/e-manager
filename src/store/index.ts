import { configureStore } from '@reduxjs/toolkit'

import navbarReducer from './reducers/navbar'
import produtosReducer from './reducers/produtos'

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    produtos: produtosReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
