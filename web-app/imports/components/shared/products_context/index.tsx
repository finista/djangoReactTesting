import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { ProductContext, ProductType } from "./types"

const ProductsContext = createContext<ProductContext>({
    isLoaded: false,
    products: []
})

const ProductsProvider = ({ children }: { children: ReactNode }) => {
    const [items, setItems] = useState<ProductType[]>([]);
    const [isLoaded, setLoaded] = useState<boolean>(false)

    useEffect(() => {
        const productData: ProductType[] = [
            {
                name: "Product 1",
                author: "admin",
                description: "Product description",
                price: 0,
                created_at: 0
            },
            {
                name: "Product 2",
                author: "admin",
                description: "Product description",
                price: 0,
                created_at: 0
            },
            {
                name: "Product 3",
                author: "admin",
                description: "Product description",
                price: 0,
                created_at: 0
            },
        ]

        setTimeout(() => {
            setItems(productData)
            setLoaded(true)
        }, 1500)
    }, [])

    return (
        <ProductsContext.Provider value={{
            isLoaded: isLoaded,
            products: items
        }}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = (): ProductContext => {
    const context = useContext(ProductsContext)
    if (!context) {
        throw new Error("useProductsContext can be only called from within products context.")
    }

    return context
}

export default ProductsProvider