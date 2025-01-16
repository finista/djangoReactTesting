import { useAppDispatch, useAppSelector } from "@imports/core/state/hooks"
import { useTranslation } from "react-i18next"

import { AppDispatch, RootState } from "@imports/core/state"
import { reset } from "@imports/core/state/slices/cartSlice"

const ResetCartButton = () => {
    const { t } = useTranslation()

    const dispatch = useAppDispatch<AppDispatch>()    
    const { items } = useAppSelector((selector: RootState) => selector.cart)

    const resetCart = () => {
        dispatch(reset())
    }

    if (Object.entries(items).length <= 0) {
        return (<></>)
    } 

    return (
        <button onClick={resetCart}>{t('products.reset_card_btn')}</button>
    )
}

export default ResetCartButton