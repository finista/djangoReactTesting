import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '@imports/core/api'

import { initialState } from './types'

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        return [
            {
                id: 0,
                name: "Product 1",
                author: "admin",
                description: "Product description",
                price: 0,
                created_at: 0
            },
            {
                id: 1,
                name: "Product 2",
                author: "admin",
                description: "Product description",
                price: 0,
                created_at: 0
            },
            {
                id: 2,
                name: "Product 3",
                author: "admin",
                description: "Product description",
                price: 0,
                created_at: 0
            },
        ]
    }
)

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading'
                state.error = null
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.products = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message || "Something went wrong."
            })
    }
})

export default productSlice.reducer