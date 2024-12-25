export interface Product {
    readonly id?: number,
    readonly name: string,
    readonly author: string,
    readonly description?: string,
    readonly price: number,
    readonly created_at: number
}

export interface ProductState {
    readonly products: Product[],
    readonly status: 'idle' | 'loading' | 'succeeded' | 'failed',
    readonly error: string | null
}

export const initialState: ProductState = {
    products: [],
    status: 'idle',
    error: null,
}