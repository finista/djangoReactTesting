import Navbar from "@imports/components/shared/navbar"
import ProductsFrame from "@imports/components/ui/products_frame"
import ProductsProvider from "@imports/components/shared/products_context"

const Home = () => {
  return (
    <>
      <Navbar />
      <h3>Home! :3</h3>
      <ProductsProvider>
        <ProductsFrame />
      </ProductsProvider>
    </>
  )
}

export default Home