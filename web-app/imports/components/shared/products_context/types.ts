export interface ProductType {
    readonly id?: number,
    readonly name: string,
    readonly author: string,
    readonly description?: string,
    readonly price: number,
    readonly created_at: number
}

export interface ProductContext {
    readonly isLoaded: boolean,
    readonly products: ProductType[]
}