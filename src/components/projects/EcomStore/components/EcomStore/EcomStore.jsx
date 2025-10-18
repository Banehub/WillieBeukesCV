import './EcomStore.css'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import Products from '../Products/Products'
import ProductDetail from '../ProductDetail/ProductDetail'
import Cart from '../Cart/Cart'
import Checkout from '../Checkout/Checkout'
import Footer from '../Footer/Footer'

function EcomStore() {
  return (
    <div className="ecom-store">
      <Navbar />
      <main className="main-content">
        <Home />
        <Products />
        <ProductDetail />
        <Cart />
        <Checkout />
      </main>
      <Footer />
    </div>
  )
}

export default EcomStore
