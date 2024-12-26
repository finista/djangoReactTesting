import { useDispatch } from "react-redux"

import { addItem, subtractItem, reset } from "@imports/core/state/slices/cartSlice"
import { AppDispatch } from "@imports/core/state"

import { ButtonConfiguration } from "./types"

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
            actionName = 'Remove'
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
                dispatch(
                    reset()
                )
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