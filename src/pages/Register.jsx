import { FaGoogle } from "react-icons/fa";
import './css/Register.css'
export default function() {

    return(
        <div className="wrapper">
            <div className="right-container">
                <form>
                    <h1>Registration</h1>
                    <input className="input1" placeholder="Username" />
                    <input className="input2" placeholder="Email"/>
                    <input className="input1" placeholder="Password" />
                    <input className="input2" placeholder="Confirm Password"/>
                    <p>Forgot Password</p>
                    <button>Login</button>
                    <p>or registrate with platforms</p>
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