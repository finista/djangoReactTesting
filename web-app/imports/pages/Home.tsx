import Navbar from "@imports/components/shared/navbar"
import ProductsFrame from "@imports/components/ui/products_frame"
import TotalCost from "@imports/components/ui/total_cost"

const Home = () => {
  return (
    <>
      <Navbar />
      <h3>Home! :3</h3>
      <ProductsFrame />
      <TotalCost />
    </>
  )
}

export default Home