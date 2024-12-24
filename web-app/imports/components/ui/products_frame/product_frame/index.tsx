import { ProductType } from "@imports/components/shared/products_context/types"
import "./styles.scss"

const Product = (props: ProductType) => {
    return (
        <div className="product">
            <span className='name'>{props.name}</span>
            <span className='author'>{props.author}</span>
            <span className='description'>{props.description}</span>
            <span className='price'>Price: ${props.price}</span>
        </div>
    )
}

const LoadingProduct = () => {
    return (
        <div className="product loading" />
    )
}


export {Product, LoadingProduct}