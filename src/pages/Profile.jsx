import { useState } from "react";
import { auth } from "../firebase-config";
import { updateProfile } from "firebase/auth";
import './css/Profile.css'
import { useNavigate } from "react-router";

export default function Profile() {

    const [newName, setNewName] = useState('')
    const [name, setName] = useState(auth.currentUser.displayName)
    const navigate = useNavigate()
    function ChangeName(e) {
        e.preventDefault()
        updateProfile(auth.currentUser, {
            displayName: newName
        }).then(() => {
            setName(auth.currentUser.displayName)
        })
       

    }
    return(
        <>
        <p onClick={() => {navigate('/chat')}}>Back</p>
        <div className="wrapper">
        <form onSubmit={ChangeName}>
        <p>Your name is: <span style={{color: '#7094E9'}}>{name}</span> </p>
        <input placeholder="Enter new name: " onChange={((e) => setNewName(e.target.value))} />
        <button>Submit</button>
        </form>
        </div>
        </>
    )


}