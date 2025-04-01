import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router'
import Login from './pages/Login'
import Register from './pages/Register'
import Chat from './pages/Chat'
function App() {
  const [auth, isAuth] = useState(false)

  return (
    <Router>
      <Routes>
          <Route path='/' element = {<Login />}></Route>
          <Route path='/register' element = {<Register />}></Route>
          <Route path='/chat' element = {<Chat />}></Route>
      </Routes>
    </Router>
  )
}

export default App
