import { createRestaurant,fetchAllRestaurants ,updateRestaurant,deleteRestaurant} from "../controller/restaurant.controller.js";
import  verifyToken  from "../middleware/verifyToken.js";

function RestaurantRouterApp(app){
    app.get('/api/restuarant', verifyToken,fetchAllRestaurants);
    app.post('/api/restuarant',createRestaurant);
    app.patch('/api/restuarant/:id',updateRestaurant);
    app.delete('/api/restuarant/:id',deleteRestaurant);
}

export  default RestaurantRouterApp;
