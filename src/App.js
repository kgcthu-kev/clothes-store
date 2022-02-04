import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Product from './pages/Product'
import Products from './pages/Products'
import NavComponent from './components/NavComponent'
import Footer from './components/Footer'

import 'swiper/css/bundle'
// Styles must use direct files imports
// import 'swiper/swiper.scss' // core Swiper
// import 'swiper/modules/navigation/navigation.scss' // Navigation module
// import 'swiper/modules/pagination/pagination.scss' // Pagination module

function App() {
  return (
    <Router>
      <NavComponent />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:product' element={<Product />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
