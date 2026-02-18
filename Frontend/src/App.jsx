import React from 'react'
import './index.css'
import Home from './home/Home'
import { Route, Routes } from 'react-router-dom'
import Courses from './course/Courses'
import Signup from './components/Signup'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={<Courses />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/contact' element={<Contact />} />


      </Routes>
    </div>
  )
}

export default App
