import { createSlice, combineReducers } from '@reduxjs/toolkit'

/* const initialState = {
  isCartOpen: false,
  cart: [],
  items: [],
  //isMenuOpen: false
}
 */
export const cartSlice = createSlice({
  name: 'cart',
  initialState: { isCartOpen: false, cart: [], items: [] },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload
    },

    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload.item]
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id)
    },

    incrementCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.count++
        }
        return item
      })
    },

    reduceCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id && item.count > 1) {
          item.count--
        }
        return item
      })
    },

    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen
    }
  }
})

export const {
  setItems,
  addToCart,
  removeFromCart,
  incrementCount,
  reduceCount,
  setIsCartOpen
} = cartSlice.actions

export const menuSlice = createSlice({
  name: 'menu',
  initialState: { isMenuOpen: false },
  reducers: {
    setIsMenuOpen: (state, action) => {
      state.isMenuOpen = action.payload
    }
  }
})

export const { setIsMenuOpen } = menuSlice.actions

export const userSlice = createSlice({
  name: 'user',
  initialState: { isUserModalOpen: false },
  reducers: {
    setIsUserModalOpen: (state, action) => {
      state.isUserModalOpen = action.payload
    }
  }
})

export const { setIsUserModalOpen } = userSlice.actions

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: undefined
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    }
  }
})

export const { setUser } = authSlice.actions

export default combineReducers({
  cart: cartSlice.reducer,
  menu: menuSlice.reducer,
  user: userSlice.reducer,
  auth: authSlice.reducer
})
