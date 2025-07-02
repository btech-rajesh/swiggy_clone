import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  deliveryTime: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  rating: {
    type: String,
  },
  cuisines: {
    type: String,
  },
  address: String,
});

const RestaurantModel = mongoose.model("Restaurant", restaurantSchema);
export default RestaurantModel;
