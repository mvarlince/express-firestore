// RESTAURANTS
// app.get('/restaurants', getAllRestaurants)
// app.get('/restaurants'/:restID', getRestaurantByID)
// app.post('/restuarants', createRestaurant)

import dbConnect from "./dbConnect"

export function getAllRestaurants(req,res){
    const db = dbConnect()
    res.send('All Restaurants')
}

export function getRestaurantByID(req,res){
    const {restID} = req.params
    // const restID = req.params.restID
    res.send(`Got restaurant: ${restID}`)
}

export function createRestaurant(req, res){
    const newRestaurant = req.body
    res.status(201).send(`Created ${newRestaurant}`)
}


// const person = {
//     age: 26,
//     name: 'sir',
//     birthday: 'dec 10'
// }

// const {age,birthday} = person

// console.log(age,birthday)