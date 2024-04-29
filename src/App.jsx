import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Components/footer'

function App() {
  return (
    <div>
     <Outlet/>
     <Footer/>
    </div>
  )
}

export default App
