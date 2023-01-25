import { FieldValue } from "firebase-admin/firestore"
import dbConnect from "./dbConnect.js"
const collectionName = 'restaurants'

//Get aLL
export async function getAllRestaurants(req,res){
    const db = dbConnect()
    // *****  check
    const collection = await db.collection(collectionName).orderBy('createdAt', 'desc').get()
    const restaurants = collection.docs.map(doc => ({...doc.data(), restID: doc.id}))
    res.send(restaurants)
}

// Rest ID
export async function getRestaurantByID(req,res){
    const db = dbConnect()
    const {restID} = req.params
    // const restID = req.params.restID
    const doc = db.collection(collectionName).doc(restID).get()
    const rest = doc.data()
    res.send(`Got restaurant: ${rest}`)
}

// Create
export async function createRestaurant(req, res){
    const db = dbConnect()
    let newRestaurant = req.body
    // add a timestamp to the new restaurant
    newRestaurant.createdAt = FieldValue.serverTimestamp() 
    await db.collection(collectionName).add(newRestaurant)
    res.status(201).send(`Created ${newRestaurant}`)
}

// Update
export async function updateRestaurant(req, res){
    const {restID } = req.params
    const updateInfo = req.body

    const db = dbConnect()
    // ADD UPDATED AT FIELD FOR WHEN UPDATING RESTAURANT
    await db.collection(collectionName).doc(restID).update(updateInfo)
    res.status(202).send('Restaurant updated')
}

//delete
export async function deleteRestaurant (req, res) {
    const {restID} = req.params
    
    const db = dbConnect()
    await db.collection(collectionName).doc(restID).delete()
    res.send("Restaurant Dleted")
}