import { FaGoogle } from "react-icons/fa";
import './css/Login.css'
import { useNavigate } from "react-router";
import { useState } from "react";
import { app} from "../firebase-config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default function({isAuth}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error,setError] = useState('')
    let navigate = useNavigate()

    function handlenavigate() {
        navigate('/register')
    }


    function HandleLogin(e) {
        e.preventDefault()
        let auth = getAuth(app)
        signInWithEmailAndPassword(auth,email,password)
        .then (() => {
            navigate('/chat')
            isAuth(true)
        })
        .catch((error) => {
            console.error(error)
            setError(error)
        })
    }

    return(
        <div className="wrapper">
            <div className="left-container-2">
                    <div className="centered">
                    <h1>Hello, Welcome!</h1>
                    <p>Don't have an account?</p>
                    <button onClick={handlenavigate}>Register</button>
                    </div>
            </div>
            <div className="right-container">
                <form onSubmit={HandleLogin}>
                    <h1>Login</h1>
                    <input className="input1" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input className="input2" placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                    {error.message?.includes('auth/invalid-email')? (<p style={{color:'red', width: '30vw', textAlign:'center'}}>The email or password you entered does not exist. Please check your credentials and try again.</p>) : ''}
                    <p>Forgot Password</p>
                    <button>Login</button>
                    <p>or login with platforms</p>
            
                    <FaGoogle />
                </form>
            </div>
        </div>
    )
}