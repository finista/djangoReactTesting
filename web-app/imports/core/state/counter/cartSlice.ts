import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
    readonly items: Record<number, number>
}

interface ItemAction {
    readonly id: number,
    readonly amount?: number
}

const initialState: CartState = {
    items: {}
}

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

export default cartSlice.reducer