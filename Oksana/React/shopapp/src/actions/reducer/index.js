import { createSlice } from '@reduxjs/toolkit'

const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    totalCount: 0,
    totalAmount: 0,
    filter:''
  },
  reducers: {
    addCartProduct: {
      reducer: (state, action) => {
        let cartIndex = state.cartItems.findIndex(
          (item) => item.id === action.payload.id,
        )
        if (cartIndex >= 0) {
          state.cartItems[cartIndex].quantity = state.cartItems[cartIndex].quantity+action.payload.count;
         } else {
          let tempProduct = { ...action.payload, quantity: action.payload.count }
          state.cartItems.push(tempProduct)
        }
      },
    },
    getCartProducts: (state, action) => {
       return {
        ...state
      }
    },
    getCartCount: (state, action) => {
      let cartCount = state.cartItems.reduce((total, item) => {
        return item.quantity + total
      }, 0)
      state.totalCount = cartCount
    },
    getTotalAmount: (state, action) => {
      state.totalAmount = state.cartItems.reduce((acc, item) => {
         return acc + item.price * item.quantity;
      }, 0);
      
    },
    removeCartItem: (state, action) => {
      let index = state.cartItems.findIndex(
        (item) => item.id === action.payload,
      )
      if (index !== -1) {
        state.cartItems.splice(index, 1)
      }
    },
    increment: (state, action) => {
      let index = state.cartItems.findIndex(
        (item) => item.id === action.payload,
      )
      state.cartItems[index].quantity += 1
    },
    decrement: (state, action) => {
      let index = state.cartItems.findIndex(
        (item) => item.id === action.payload,
      )
      if (state.cartItems[index].quantity <= 0) {
        state.cartItems[index].quantity = 0
      } else {
        state.cartItems[index].quantity -= 1
      }
    },
    setFilter: (state, action) => {
      state.filter=action.payload
    },

  },
})

export const {
  addCartProduct,
  getCartProducts,
  removeCartItem,
  getCartCount,
  getTotalAmount,
  increment,
  decrement,
  setFilter
} = CartSlice.actions

export default CartSlice.reducer