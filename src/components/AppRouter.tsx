import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Cart from '../pages/cart/Cart'
import Product from '../pages/product/Product'

const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/cart' element={<Cart />} />
			<Route path='/product/:id' element={<Product />} />
		</Routes>
	)
}

export default AppRouter
