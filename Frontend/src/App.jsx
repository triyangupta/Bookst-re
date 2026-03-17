import React from 'react'
import './index.css'
import Home from './home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Courses from './course/Courses'
import Signup from './components/Signup'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'
import { useAuth } from './context/AuthProvider'

const App = () => {
  const [authUser, setAuthUser] = useAuth()
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={authUser ? <Courses /> : <Navigate to="/signup" />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
