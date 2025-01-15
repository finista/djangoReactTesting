import Navbar from "@imports/components/shared/navbar"
import ProductsFrame from "@imports/components/ui/products_frame"
import TotalCost from "@imports/components/ui/total_cost"
import ResetCartButton from "@imports/components/ui/reset_cart_button"

import { useTranslation } from "react-i18next"

const Home = () => {
  const { t } = useTranslation()

  return (
    <>
      <Navbar />
      <h3>{t('home.top_text')}</h3>
      <ProductsFrame />
      <TotalCost />
      <ResetCartButton />
    </>
  )
}

export default Home