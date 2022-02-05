import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'

import Product from './pages/Product'
import Products from './pages/Products'
import NavComponent from './components/NavComponent'
import Cart from './components/Cart'
import Wishlist from './components/Wishlist'

import Footer from './components/Footer'

import 'swiper/css/bundle'
import { ShopProvider } from './contexts/ShopContext'
import { WishProvider } from './contexts/WishContext'
// react toastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// Styles must use direct files imports
// import 'swiper/swiper.scss' // core Swiper
// import 'swiper/modules/navigation/navigation.scss' // Navigation module
// import 'swiper/modules/pagination/pagination.scss' // Pagination module
function App() {
  const [showCart, setShowCart] = useState(false)
  const [showWish, setShowWish] = useState(false)

  return (
    <ShopProvider>
      <WishProvider>
        <Router>
          <NavComponent
            showCart={showCart}
            setShowCart={setShowCart}
            showWish={showWish}
            setShowWish={setShowWish}
          />
          {showCart && <Cart showCart={showCart} setShowCart={setShowCart} />}
          {showWish && (
            <Wishlist showWish={showWish} setShowWish={setShowWish} />
          )}

          <Routes>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:productType' element={<Product />} />
          </Routes>
          <Footer />
        </Router>
        <ToastContainer />
      </WishProvider>
    </ShopProvider>
  )
}

export default App
