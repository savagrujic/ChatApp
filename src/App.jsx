import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router'
import Login from './pages/Login'
import Register from './pages/Register'
import Chat from './pages/Chat'
import { useNavigate } from 'react-router'
function App() {
  const [auth, isAuth] = useState(false)
  
  useEffect(() => {
    let tempvalue = JSON.parse(localStorage.getItem('auth'))
    console.log(tempvalue)
    if(tempvalue) {
      isAuth(tempvalue)
    }
  },[])

  return (
    <Router>
        < AppRoutes auth={auth} isAuth={isAuth}/>
    </Router>
  )
}

function AppRoutes({auth,isAuth}) {
 
  const navigate = useNavigate()

  useEffect(() => {
    if(auth) {
      navigate('/chat')
      localStorage.setItem('auth',JSON.stringify(auth))
    }
  }, [auth,navigate])




  return(
  <Routes>
          <Route path='/' element = {<Login isAuth={isAuth} />}></Route>
          <Route path='/register' element = {<Register isAuth={isAuth} />}></Route>
          <Route path='/chat' element = {auth ? <Chat isAuth={isAuth} />: <Login isAuth={isAuth} />}></Route>
      </Routes>
  )
}

export default App
