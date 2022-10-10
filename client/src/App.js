import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Login from './pages/Authentication/CustomerLogin'
import Register from './pages/Authentication/CustomerRegister'
import SellerLogin from './pages/Authentication/SellerLogin'
import SellerRegister from './pages/Authentication/SellerRegister'
import BusinessPage from './pages/BusinessPage'
import RatingForm from './components/Forms/RatingForm'
import SaleForm from './components/Forms/SaleForm'
import preloader from './assets/newstar.gif'

const App = () => {
	useEffect(() => {
		var preloader = document.getElementById('preLoader');
		window.addEventListener("load", () => {
			preloader.style.display = 'none'
		})
	}, [])

	return (
		<>
			{/* code for preloader */}
			<div id="preLoader" className={`bg-white h-[100vh] w-full fixed z-40 bg-no-repeat bg-center flex justify-center items-center`}>
				<img src={preloader} className='w-[22rem] h-[16rem]' />
			</div>


			<div className='App'>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="/sellers/:id" element={<BusinessPage />} />
						<Route path="/sellerLogin" element={<SellerLogin />} />
						<Route path="/sellerRegister" element={<SellerRegister />} />
						<Route path="/ratingForm" element={<RatingForm />} />
						<Route path="/saleForm" element={<SaleForm />} />
					</Routes>
				</BrowserRouter>
			</div>
		</>
	)
}

export default App
