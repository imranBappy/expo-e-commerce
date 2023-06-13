import { configureStore } from '@reduxjs/toolkit'
import cardReducers from './features/cartFeatures'
import productFeatures from './features/productFeatures'

export const store = configureStore({
    reducer: {
        cart: cardReducers,
        product: productFeatures,
    },
})