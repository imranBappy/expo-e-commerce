import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const item = state.cart.find(product => product.id === action.payload.id)
            if (item) {
                item.quantity += 1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 })
            }
        },
        removeToCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id)
        },
        incrementQuantity: (state, action) => {
            const item = state.cart.find(item => item.id === action.payload.id)
            if (item) {
                item.quantity += 1;
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.cart.find(item => item.id === action.payload.id)
            if (item?.quantity > 1) {
                item.quantity -= 1;
            } else if (item?.quantity === 1) {
                state.cart = state.cart.filter(item => item.id !== action.payload.id)
            }
        }
    },
})

export const { addToCart, removeToCart, incrementQuantity, decrementQuantity } = cartSlice.actions
export default cartSlice.reducer