import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router'
import Login from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
          <Route path='/' element = {<Login />}></Route>
      </Routes>
    </Router>
  )
}

export default App
