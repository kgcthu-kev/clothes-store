import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Product from './pages/Product'
import Products from './pages/Products'
import NavComponent from './components/NavComponent'

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
    </Router>
  )
}

export default App
