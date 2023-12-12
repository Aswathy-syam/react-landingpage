import React from 'react'
import "./App.css"
import NavbarItems from './components/NavbarItems'
import Home from './components/Home'
import Menu from './components/Menu'
import About from './components/About'
import Product from './components/Product'

import Footer from './components/Footer'

function App() {
  return (
    <div>
      <NavbarItems/>
      <Home/>
      <Menu/>
      <About/>
      <Product/>
      
      <Footer/>
    </div>
  )
}

export default App