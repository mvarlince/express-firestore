import { cert, initializeApp, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore"



export default function dbConnect(){
    // check if not connected
    if (getApps().length === 0){
        //connect
        initializeApp({
            credential: cert(serviceAccount)
        })
    }
    
    // return db-connection
    return getFirestore()
}