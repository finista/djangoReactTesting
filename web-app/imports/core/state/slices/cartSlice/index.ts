import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import { initialState, CartState, ItemAction } from "./types";
import { CART_STORE_KEY } from "./constants";

export const loadCart = createAsyncThunk(
    'cart/loadCart',
    async () => {
        const data = localStorage.getItem(CART_STORE_KEY)
        if (!data) {
            return {}
        }

        return JSON.parse(data)
    }
)

export const saveCart = (items: CartState["items"]) => {
    const parsed = JSON.stringify(items)
    localStorage.setItem(CART_STORE_KEY, parsed)
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addItem: (state: CartState, action: PayloadAction<ItemAction>) => {
            const { id, amount = 1 } = action.payload
            state.items[id] = (state.items[id] || 0) + amount

            saveCart(state.items)
        },
        subtractItem: (state: CartState, action: PayloadAction<ItemAction>) => {
            const { id } = action.payload
            if (!state.items[id]) return

            state.items[id] -= 1
            if (state.items[id] <= 0) {
                delete state.items[id]
            }

            saveCart(state.items)
        },
        reset: (state) => {
            state.items = {}
            saveCart({})
        },
    },
    extraReducers(builder) {
        builder
            .addCase(loadCart.pending, (state) => {
                state.state = 'loading'
            })
            .addCase(loadCart.fulfilled, (state, action) => {
                state.state = 'succeeded'
                state.items = action.payload
            })
            .addCase(loadCart.rejected, (state, action) => {
                state.state = 'failed'
                console.log("Failed to load local cart save, error: " + action.error.message || "No message given.")
            })
    },
})

export const { addItem, subtractItem, reset } = cartSlice.actions
export default cartSlice.reducer