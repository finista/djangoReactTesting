import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useTranslation } from 'react-i18next'

import { AppDispatch, RootState } from '@imports/core/state'
import { fetchProducts } from '@imports/core/state/slices/productSlice'
import { loadCart } from '@imports/core/state/slices/cartSlice'

import { ProductFrame, LoadingProduct } from '../product_frame'
import './style.scss'

const ProductsFrame = () => {
    const dispatch = useDispatch<AppDispatch>()

    const { t } = useTranslation()
    
    const { products, status, error } = useSelector((state: RootState) => state.products)
    const cartState = useSelector((state: RootState) => state.cart.state)

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts())
        }

        if (status === 'succeeded' && cartState === 'idle') {
            dispatch(loadCart())
        }
    }, [dispatch, status])

    if (status === 'loading' || status === 'idle') {
        return (
            <div className="products-frame">
                <span>{t('products.header')}</span>
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
                <span>{t('products.header')}</span>
                <div className="contents no-grid">
                    <span className="message">{error || t('products.no_found_error')}</span>
                </div>
            </div>
        )
    }

    return (
        <div className="products-frame">
            <span>{t('products.header')}</span>
            <div className="contents">
                {products.map((product, index) => (
                    <ProductFrame
                        key={product.id || index}
                        id={product.id}
                        name={product.name}
                        author_name={product.author_name}
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