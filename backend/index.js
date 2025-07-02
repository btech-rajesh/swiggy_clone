import 'dotenv/config'; // Load environment variables from .env file

import express from 'express';
import mongoose from 'mongoose';
const app=express();
import RestaurantRouterApp from './Router/restaurant.router.js';
import userRouterApp from './Router/user.router.js';

mongoose.connect(process.env.DB_URL)
.then(()=>{console.log("DB connected Successfully")})
.catch((err)=>{console.log("DB connection failed",err)});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/',(req,res)=>{
    res.send("Hello from root route");
});


RestaurantRouterApp(app);
userRouterApp(app);
// Import the restaurant router and use it in the app



const PORT=process.env.PORT || 8080;
app.listen(PORT,(req,res)=>{
    console.log("connexted 8080");
    
})