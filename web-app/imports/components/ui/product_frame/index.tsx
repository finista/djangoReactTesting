import { useSelector } from "react-redux"

import { Product } from "@imports/core/state/slices/productSlice/types"
import { RootState } from "@imports/core/state"

import ActionButton from "./action_button"

import "./styles.scss"

const ProductFrame = (props: Product) => {
    const { items } = useSelector((state: RootState) => state.cart)

    if (!props.id) {
        throw new Error("Props must contain product ID.")
    }

    return (
        <div className="product">
            <span className='name'>{props.name}</span>
            <span className='author'>{props.author_name}</span>
            <span className='description'>{props.description}</span>
            <span className='price'>Price: ${props.price}</span>

            <div className="product-actions">
                <ActionButton
                    target_id={props.id}
                    action="add"
                />
                <span className="product-amount">{items[props.id] || 0 }</span>
                <ActionButton
                    target_id={props.id}
                    action="subtract"
                />
                <ActionButton
                    target_id={props.id}
                    action="remove"
                />
            </div>
        </div>
    )
}

const LoadingProduct = () => {
    return (
        <div className="product loading" />
    )
}


export {ProductFrame, LoadingProduct}