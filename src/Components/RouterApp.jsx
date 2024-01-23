import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import CardGallery from '../Pages/CardGallery'
import ProductDetails from './ProductDetails'


const router=createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path='' element={<Home/>} />
            <Route path='about' element={<About/>} />
            <Route path='cardgallery' element={<CardGallery/>} />
            <Route path='product/:id' element={<ProductDetails/>} />
        </Route>
    )
)


const RouterApp = () => {
  return (

    <RouterProvider router={router} />
  )
}

export default RouterApp
