import { configureStore } from "@reduxjs/toolkit"

import cartReducer from "@imports/core/state/slices/cartSlice"
import productReducer from "@imports/core/state/slices/productSlice"
import notificationReducer from "@imports/core/state/slices/notificationSlice"

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productReducer,
        notifications: notificationReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch