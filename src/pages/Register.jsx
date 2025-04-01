import { FaGoogle } from "react-icons/fa";
import './css/Register.css'
import { useNavigate } from "react-router";


export default function() {

    let naviage = useNavigate()

    function hadnelanvigate() {
        naviage('/')
    }
    return(
        <div className="wrapper">
            <div className="right-container">
                <form>
                    <h1>Registration</h1>
                    <input className="input1" placeholder="Username" />
                    <input className="input2" placeholder="Email"/>
                    <input className="input1" placeholder="Password" />
                    <input className="input2" placeholder="Confirm Password"/>
                 
                    <button>Register</button>
                    <p>or registrate with platforms</p>
                    <FaGoogle />
                </form>
            </div>
            <div className="left-container">
                    <div className="centered">
                    <h1>Welcome, Back!</h1>
                    <p>Alredy have an account?</p>
                    <button  onClick={hadnelanvigate}>Login</button>
                    </div>
            </div>
        </div>
    )
}