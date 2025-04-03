
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth,db } from "../firebase-config"
import { useNavigate } from "react-router"
import { useEffect, useState } from "react"
import { collection, addDoc,doc,onSnapshot, query, serverTimestamp, orderBy } from "firebase/firestore"
import { ThreeDot } from "react-loading-indicators"
import './css/Chat.css'

export default function Chat({isAuth}) {
    const [message, setMessage] = useState('')
    const [messageList, setMessageList] = useState([])
    const [name, displayName] = useState('Loading...')
    const [userid, stUserId] = useState('')
    const navigate = useNavigate()
    function singOut() {
        signOut(auth).then(() => {
            localStorage.clear()
            isAuth(false)
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
                    name: mess.data().author.name,
                    id: mess.data().author.id
                }))
               setMessageList(tempmessage)
            
        })

        const setuserinfo = onAuthStateChanged( auth, (user) => {
            if(user) {
                displayName(user.displayName)
                stUserId(user.uid)
            }
        })
       
    }, [])
    
    return( 
    <div className="wrapperchat">
     
 
    <h2 style={{marginTop: '30px'}}>Welcome <span style={{color:'#7094E9'}}>{name}</span> </h2>
    <div className="messagebox" style={{
        display:'flex',
        flexDirection: 'column'
    }}>
      
       {messageList.length === 0 ? (<ThreeDot className='loading' color="#7094E9" size="medium" text="" textColor="" />): (messageList.map((item)=> (
       
         <div style={{
                margin: '10px',
                display: 'flex',
                flexDirection: 'column',
                marginLeft: userid === item.id ? 'auto' : '',
                margin: '10px',
                backgroundColor: '#7094E9',
                width: '20vh',
                padding: '10px',
                borderRadius: '10px'
            }}>
            {userid != item.id ? <p>{item.name}</p>: ''}
            <h3>{item.message}</h3>
            </div>
        )))}
    </div>
   
        <input className="sendmsginput" value = {message}placeholder="Enter Your Messages Here" onChange={(e) => setMessage(e.target.value)}/>
        <button  className='btn' onClick={SendMessage}>Send</button>
        <button className='btn' onClick={singOut}>LogOut</button>
  
    
    
    </div>


)
}