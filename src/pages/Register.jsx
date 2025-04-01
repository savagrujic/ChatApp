import { FaGoogle } from "react-icons/fa";
import './css/Register.css'
import { useNavigate } from "react-router";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from "../firebase-config";
export default function() {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmpassword] = useState('')
    const [canRegister, setCanRegister] = useState(false)
    let naviage = useNavigate()

    function hadnelanvigate() {
        naviage('/')
    }

    function HandleRegister(e) {
        e.preventDefault()
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            
            updateProfile(auth.currentUser, {
                displayName: username
            }).then(() => {
                const user = userCredential.user
                console.log(user)
                naviage('/chat')    
            })
        }).catch((err) => {
            console.error(err)
        })
        
    }
    return(
        <div className="wrapper">
            <div className="right-container">
                <form onSubmit={HandleRegister}>
                    <h1>Registration</h1>
                    <input className="input1"  required onChange={(e) => setUsername(e.target.value)} type="" placeholder="Username"/>
                    <input className="input2"  required onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"/>
                    <input className="input1"  required onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                    <input className="input2"  required onChange={(e) => setConfirmpassword(e.target.value)} type="password" placeholder="Confirm Password"/>
                    {password != confirmpassword ? (<p style={{color:'red'}}>Password are not matching!</p> ): ''}
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