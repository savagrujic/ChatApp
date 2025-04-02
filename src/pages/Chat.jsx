
import { signOut } from "firebase/auth"
import { auth,db } from "../firebase-config"
import { useNavigate } from "react-router"
import { useEffect, useState } from "react"
import { collection, addDoc,doc,onSnapshot, query, serverTimestamp, orderBy } from "firebase/firestore"
import './css/Chat.css'

export default function Chat() {
    const [message, setMessage] = useState('')
    const [messageList, setMessageList] = useState([])
    const navigate = useNavigate()
    function singOut() {
        signOut(auth).then(() => {
            navigate('/')
        }).catch((error) => {
            console.error(error)
        })
    }
    const collectionreference = collection(db,'messages')
    const SendMessage = async () => {
        try{
        await addDoc((collectionreference), {
            message,
            author: {name: auth.currentUser.displayName, id: auth.currentUser.uid},
            time: serverTimestamp()
        })
        }
        catch(err) {
            console.error(err)
        }
        setMessage('')
    }

    useEffect(()=> {
        const q = query(collection(db,'messages'), orderBy('time', 'asc'))
        const data = onSnapshot(q, (col) => {

                const tempmessage = col.docs.map((mess) => ({
                    message: mess.data().message,
                    name: mess.data().author.name
                }))
               setMessageList(tempmessage)
            
        })
    }, [])
    
    return( 
    <div className="wrapperchat">
     
 
    <h2>Hello {auth.currentUser.displayName}!</h2>
    <div className="messagebox">
        {messageList.map((item)=> (
            <div style={{margin: '10px'}}>
            <p>{item.name}</p>
            <h3>{item.message}</h3>
            </div>
        ))}
    </div>
        <input className="sendmsginput" value = {message}placeholder="Enter Your Messages Here" onChange={(e) => setMessage(e.target.value)}/>
        <button  className='btn' onClick={SendMessage}>Send</button>
        <button className='btn' onClick={singOut}>LogOut</button>
  
    
    
    </div>


)
}