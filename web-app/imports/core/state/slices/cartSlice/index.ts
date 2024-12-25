import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, CartState, ItemAction } from "./types";

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addItem: (state: CartState, action: PayloadAction<ItemAction>) => {
            const { id, amount = 1 } = action.payload
            state.items[id] = (state.items[id] || 0) + amount
        },
        subtractItem: (state: CartState, action: PayloadAction<ItemAction>) => {
            const { id } = action.payload
            if (!state.items[id]) return

            state.items[id] -= 1
            if (state.items[id] <= 0) {
                delete state.items[id]
            }
        },
        reset: (state) => {
            state.items = {}
        },
    }
})

export const { addItem, subtractItem, reset } = cartSlice.actions
export default cartSlice.reducer