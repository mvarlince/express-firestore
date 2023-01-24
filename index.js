import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { getAllRestaurants, getRestaurantByID, createRestaurant } 
    from "./src/restaurants.js"


dotenv.config()

const PORT = process.env.PORT || 3030

const app = express()
app.use(cors())
app.use(express.json())


// set up routes
// RESTAURANTS
// app.get('/restaurants', getAllRestaurants)
// app.get('/restaurants'/:restID', getRestaurantByID)
// app.post('/restuarants', createRestaurant)

app.get('/restaurants', getAllRestaurants)
app.get('/restaurants/:restID', getRestaurantByID)
app.post('/restaurants', createRestaurant)

// listen on port
app.listen(PORT, () => {
    console.log(`Listening on HTTP://localhost:${PORT}...`)
})