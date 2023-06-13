import { createSlice } from "@reduxjs/toolkit";


export const productSlice = createSlice({
    name: "product",
    initialState: {
        product: []
    },
    reducers: {
        getProducts: (state, action) => {
            state.product = action.payload
        },
        incrementQty: (state, action) => {
            const item = state.product.find(item => item.id === action.payload.id)
            item.quantity += 1;
            // console.log({ item });
        },
        decrementQty: (state, action) => {
            const item = state.product.find(item => item.id === action.payload.id)
            if (item?.quantity > 1) {
                item.quantity -= 1;
            } else if (item?.quantity === 1) {
                state.product = state.product.filter(item => item.id !== action.payload.id)
            }
        }
    }
})

export const { getProducts, incrementQty, decrementQty } = productSlice.actions;
export default productSlice.reducer;