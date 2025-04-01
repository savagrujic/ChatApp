import { FaGoogle } from "react-icons/fa";
import './css/Login.css'
import { useNavigate } from "react-router";
export default function() {

    let navigate = useNavigate()

    function handlenavigate() {
        navigate('/register')
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
                <form>
                    <h1>Login</h1>
                    <input className="input1" placeholder="Username" />
                    <input className="input2" placeholder="Password"/>
                    <p>Forgot Password</p>
                    <button>Login</button>
                    <p>or login with platforms</p>
                    <FaGoogle />
                </form>
            </div>
        </div>
    )
}