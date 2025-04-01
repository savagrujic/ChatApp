import { FaGoogle } from "react-icons/fa";
import './css/Login.css'
import { useNavigate } from "react-router";
import { useState } from "react";
export default function() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let navigate = useNavigate()

    function handlenavigate() {
        navigate('/register')
    }


    function HandleLogin(e) {
        e.preventDefault()
    }

    return(
        <div className="wrapper">
            <div className="left-container">
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
                    <input className="input2" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                    <p>Forgot Password</p>
                    <button>Login</button>
                    <p>or login with platforms</p>
                    <FaGoogle />
                </form>
            </div>
        </div>
    )
}