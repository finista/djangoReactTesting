import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '@imports/core/api'

import { initialState } from './types'

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const request = await api.get("/products/get-products/")
        if (request.status !== 200) {
            throw new Error(`Failed to fetch products, error: ${request.statusText || "No error given."}`)
        }
        
        console.log(request)
        return request.data
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