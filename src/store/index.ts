import { configureStore } from '@reduxjs/toolkit'

import navbarReducer from './reducers/navbar'

export const store = configureStore({
  reducer: {
    navbar: navbarReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
