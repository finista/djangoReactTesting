import { useSelector } from "react-redux"
import { RootState } from "@imports/core/state"
import { CartMinType } from "./types"

const TotalCost = () => {
    const { items } = useSelector((state: RootState) => state.cart)
    const { products } = useSelector((state: RootState) => state.products)

    let totalCost = 0
    let cartMin: CartMinType[] = []

    for (const [product_id, amount] of Object.entries(items)) {
      const productData = products.find((value) => {
        return value.id === Number(product_id)
      })

      if (!productData) {
        console.log("Failed to find data for product ID: " + product_id)
        return
      }

      totalCost += productData.price * amount
      cartMin.push({
        name: productData.name,
        amount: amount,
        total: productData.price * amount
      })
    }

    return (
      <div className="total-frame">
        <ul>
          {
            cartMin.map((value, index) => {
              return (
                <li key={index}>
                  Product: {value.name} ({value.amount}) - ${value.total}
                </li>
              )
            })
          }
        </ul>
        <span>Total cost: ${totalCost}</span>
      </div>
    )
}

export default TotalCost