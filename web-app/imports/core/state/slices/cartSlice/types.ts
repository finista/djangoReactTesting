export interface CartState {
    readonly items: Record<number, number>
    readonly state: 'idle' | 'loading' | 'succeeded' | 'failed'
}

export interface ItemAction {
    readonly id: number,
    readonly amount?: number
}

export const initialState: CartState = {
    items: {},
    state: 'idle'
}
