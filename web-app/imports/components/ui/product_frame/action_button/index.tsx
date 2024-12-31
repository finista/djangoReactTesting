import { useDispatch } from "react-redux"

import { addItem, subtractItem, removeItem } from "@imports/core/state/slices/cartSlice"
import { AppDispatch } from "@imports/core/state"

import { ButtonConfiguration } from "./types"
import "./styles.scss"

const ActionButton = (props: ButtonConfiguration) => {
    const dispatch = useDispatch<AppDispatch>()

    var actionName: string
    switch (props.action) {
        case 'add':
            actionName = '+'
            break
            
        case 'subtract':
            actionName = '-'
            break
            
        case 'remove':
            actionName = 'X'
            break

        default:
            actionName = '?'
    }

    const handleClick = () => {
        switch (props.action) {
            case 'add':
                dispatch(addItem({
                    id: props.target_id,
                }))
                break
                
            case 'subtract':
                dispatch(subtractItem({
                    id: props.target_id
                }))
                break

            case 'remove':
                dispatch(removeItem({
                    id: props.target_id
                }))
                break
        }
    }

    return (
        <button className="product-action-button" onClick={handleClick}>
            {actionName}
        </button>
    )
}

export default ActionButton