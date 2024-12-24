import { useProductsContext } from '@imports/components/shared/products_context/'
import { Product, LoadingProduct } from './product_frame/'

import './style.scss'

const ProductsFrame = () => {
    const productContext = useProductsContext()

    if (!productContext.isLoaded) {
        return (
            <div className="products-frame">
                <span>Products</span>
                <div className="contents">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <LoadingProduct key={index} />
                    ))}
                </div>
            </div>
        )
    }

    if (productContext.products.length <= 0) {
        return (
            <div className="products-frame">
                <span>Products</span>
                <div className="contents no-grid">
                    <span className="message">No products found.</span>
                </div>
            </div>
        )
    }

    return (
        <div className="products-frame">
            <span>Products</span>
            <div className="contents">
                {productContext.products.map((product, index) => (
                    <Product
                        key={product.id || index}
                        name={product.name}
                        author={product.author}
                        created_at={product.created_at}
                        description={product.description}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductsFrame