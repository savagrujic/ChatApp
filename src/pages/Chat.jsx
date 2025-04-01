
import { signOut } from "firebase/auth"
import { auth } from "../firebase-config"
import { useNavigate } from "react-router"

export default function Chat() {

    const navigate = useNavigate()
    function singOut() {
        signOut(auth).then(() => {
            navigate('/')
        }).catch((error) => {
            console.error(error)
        })
    }
    return(
    <div>
     
 
    <h2>Hello {auth.currentUser.displayName}!</h2>
    <div className="messagebox">
        Messages wil be Here
    </div>
        <input placeholder="Enter Your Messages Here" />
        <button>Send</button>
        <button onClick={singOut}>LogOut</button>
  
    
    
    </div>


)
}