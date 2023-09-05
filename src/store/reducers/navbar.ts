import { createSlice } from '@reduxjs/toolkit'

type NavbarState = {
  isOpen: boolean
}

const initialState: NavbarState = {
  isOpen: false
}

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    openMenu: (state) => {
      state.isOpen = true
    },
    closeMenu: (state) => {
      state.isOpen = false
    }
  }
})

export const { openMenu, closeMenu } = navbarSlice.actions
export default navbarSlice.reducer
