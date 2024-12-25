export interface CartState {
    readonly items: Record<number, number>
}

export interface ItemAction {
    readonly id: number,
    readonly amount?: number
}

export const initialState: CartState = {
    items: {}
}
