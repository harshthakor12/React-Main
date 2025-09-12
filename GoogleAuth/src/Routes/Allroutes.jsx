import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Components/Dashboard'
import Login from '../Components/Login'
import Privatepage from '../Components/Privatepage'
import Product from '../Components/Product'
import Addproduct from '../Components/Addproduct'

const Allroutes = () => {
  return (
    <Routes>

        <Route path='/' element={<Dashboard/>}></Route>

        <Route path='/add-product' element={<Addproduct/>}></Route>

        <Route path="/products" element={
          <Privatepage>
          <Product/>
          </Privatepage>
          
          }></Route>
        <Route path='/login' element={<Login/>}></Route>
        
    </Routes>
  )
}

export default Allroutes