import { Product } from "@imports/core/state/slices/productSlice/types"
import "./styles.scss"

const ProductFrame = (props: Product) => {
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


export {ProductFrame, LoadingProduct}