import { cert, initializeApp, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore"
import { service_account } from "../secrets.js"


export default function dbConnect(){
    // check if not connected
    if (!getApps().length){
        //connect
        initializeApp({
            credential: cert(service_account)
        })
    }
    
    // return db-connection
    return getFirestore()
}
