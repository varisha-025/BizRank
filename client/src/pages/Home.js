import React from 'react'
//  ,{ useState, useEffect } from 'react'
// import Basics from '../components/Basics'
import Header from '../components/Layout/Header'
import Navbar from '../components/Layout/Navbar'
import Footer from '../components/Layout/Footer'
import Dashboard from './Dashboard'
import Filters from '../components/Layout/Filters'
import LandingPage from '../components/Layout/LandingPage'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <LandingPage/>
      <Filters/>
      <Dashboard/>
      <Footer/>
    </div>
  )
}

export default Home