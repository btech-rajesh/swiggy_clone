import  RestaurantModel from '../models/Restaurant.model.js';


export async function createRestaurant(req, res) {
    try{
        
    const newRestaurant = await RestaurantModel.create(req.body)
        
    return res.status(201).json({newRestaurant});
}
catch(err){
    return res.status(500).json({msg: err.message});
}
}
 export async function fetchAllRestaurants(req, res) {


    try{
    const allRestaurant= await RestaurantModel.find({});
    console.log(allRestaurant);
    return res.status(200).json({allRestaurant});
    }

    catch(err){
    return res.status(500).json({mag: err.message});

    }

 }

 export async function updateRestaurant(req, res) {
  try{  const{id}=req.params;
    const{name,  deliveryTime,imageUrl, cuisine,rating,address}=req.body;
   const updatedRestaurant = await RestaurantModel.findByIdAndUpdate(id,{name, deliveryTime,imageUrl, cuisine,rating,address},{new:true});
    return res.status(200).json({updatedRestaurant});
}catch(err){
    return res.status(500).json({msg: err.message});            

 }
}

export async function deleteRestaurant(req, res) {
    try{
        const {id} = req.params;
        const deletedRestaurant = await RestaurantModel.findByIdAndDelete(id);
        return res.status(200).json({deletedRestaurant});
    }
    catch(err){
        return res.status(500).json({msg: err.message});
    }
}
