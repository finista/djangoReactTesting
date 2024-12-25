import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '@imports/core/state'
import { fetchProducts } from '@imports/core/state/slices/productSlice'

import { ProductFrame, LoadingProduct } from './product_frame/'
import './style.scss'

const ProductsFrame = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { products, status, error } = useSelector((state: RootState) => state.products)

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts())
        }
    }, [dispatch, status])

    if (status === 'loading') {
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

    if (status === 'failed' || products.length <= 0) {
        return (
            <div className="products-frame">
                <span>Products</span>
                <div className="contents no-grid">
                    <span className="message">{error || 'No products found.'}</span>
                </div>
            </div>
        )
    }

    return (
        <div className="products-frame">
            <span>Products</span>
            <div className="contents">
                {products.map((product, index) => (
                    <ProductFrame
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