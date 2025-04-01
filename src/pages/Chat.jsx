
import { auth } from "../firebase-config"


export default function Chat() {

    return(<div>{auth.currentUser.displayName}</div>)
}