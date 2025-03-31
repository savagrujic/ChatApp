import { FaGoogle } from "react-icons/fa";
import './css/Login.css'
export default function() {

    return(
        <div className="wrapper">
            <div className="left-container">

            </div>
            <div className="right-container">
                <form>
                    <input />
                    <input />
                    <p>Forgot Password</p>
                    <button>Login</button>
                    <p>or login with platforms</p>
                    <FaGoogle />
                </form>
            </div>
        </div>
    )
}