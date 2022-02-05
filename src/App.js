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

import Footer from './components/Footer'

import 'swiper/css/bundle'
import { ShopProvider } from './contexts/ShopContext'
// Styles must use direct files imports
// import 'swiper/swiper.scss' // core Swiper
// import 'swiper/modules/navigation/navigation.scss' // Navigation module
// import 'swiper/modules/pagination/pagination.scss' // Pagination module
function App() {
  const [showCart, setShowCart] = useState(true)
  return (
    <ShopProvider>
      <Router>
        <NavComponent showCart={showCart} setShowCart={setShowCart} />
        {showCart && <Cart />}
        <Routes>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:productType' element={<Product />} />
        </Routes>
        <Footer />
      </Router>
    </ShopProvider>
  )
}

export default App
