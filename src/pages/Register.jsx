import { FaGoogle } from "react-icons/fa";
import './css/Register.css'
export default function() {

    return(
        <div className="wrapper">
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
            <div className="left-container">
                    <div className="centered">
                    <h1>Hello, Welcome!</h1>
                    <p>Don't have an account?</p>
                    <button>Register</button>
                    </div>
            </div>
        </div>
    )
}