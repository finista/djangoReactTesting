import { useProductsContext } from '@imports/components/shared/products_context/'

import './style.scss'

const ProductsFrame = () => {
    const productContext = useProductsContext()

    if (!productContext.isLoaded) {
        return (
            <div className="products-frame">
                <span>Products</span>
                <div className="contents loading"></div>
            </div>
        )
    }

    return (
        <div className="products-frame">
            <span>Products</span>
            <div className="contents">
                {productContext.products.map((product, index) => (
                    <div key={index} className="product">
                        <span className='name'>{product.name}</span>
                        <span className='author'>{product.author}</span>
                        <span className='description'>{product.description}</span>
                        <span className='price'>Price: ${product.price}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductsFrame