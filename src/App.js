import React from 'react'
import Cart from './pages/cart/Cart'
import Not from './pages/notfound/Not'
import Product from './pages/product/Product'
import Products from './pages/products/Products'
import { Route, Routes, createSearchParams, useNavigate, useParams } from 'react-router-dom'
import Nav from './component/navbar/Nav'
import {useCart} from './context/cart'

const App = () => {

  const navigate = useNavigate();
  const{cartitemcount}=useCart()
  const onSearch = (searchquery) => {
    navigate(`/?${createSearchParams({ q: searchquery })}`)
  }
  return (
    <>
      <Nav onSearch={onSearch} cartItemcount={cartitemcount()} />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path="/product/:productId" element={<Product/>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<Not />} />
      </Routes>

    </>
  )
}

export default App
