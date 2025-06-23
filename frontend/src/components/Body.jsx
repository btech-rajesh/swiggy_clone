import { useEffect, useState } from "react";
import ApiCalling from "./ApiCalling"
import RestaurantCard from "./RestaurantCard";

function Body() {

    const restArr = ApiCalling();//from here we get api data 
    //in this we set the reset functionality for the reset button
     
const [allResetArr, setAllResetArr] = useState(restArr);
// console.log(allResetArr ,"allResetArr");
const [IsActive1,setIsActive1]=useState(false);
const [IsActive2,setIsActive2]=useState(false);


useEffect(function() {
  if(restArr && restArr.length) {
    setAllResetArr(restArr);
  }
}, [restArr]);  


const handleReset= () => {
  setAllResetArr(restArr);
  setIsActive1(false);
  setIsActive2(true);
};


const handleRating = () => {
  //set the data of api of restArr using filter method
  const updatedArr = restArr.filter((restaurantdetails) => restaurantdetails.info.avgRating >= 4.5);
  setAllResetArr(updatedArr);
  setIsActive1(true);
  setIsActive2(false);
};
const searchData = (e) => {
  const searchText = e.target.value.toLowerCase();
  const filteredArr = allResetArr.filter((restaurantdetails) =>
    restaurantdetails.info.name.toLowerCase().includes(searchText)
  );
  setAllResetArr(filteredArr);
  setIsActive1(false);
  setIsActive2(false);
};

return (
  <div className="ml-20 mt-4">
    <h1 className="text-2xl">Restaurants with online food delivery in Aligarh</h1>
    <button className={IsActive1 ? "border bg-green-500 rounded-2xl p-2 mx-4" : "border rounded-2xl p-2 mx-4 bg-gray-200"} onClick={handleRating}>Ratings 4.5+</button>
    <button className={IsActive2 ? "border bg-green-500 rounded-2xl p-2 mx-4" : "border rounded-2xl p-2 mx-4 bg-gray-200"} onClick={handleReset}>Reset</button>
    <input className="border rounded-2xl p-2 mx-4" type="text" placeholder="Search Restaurants" onChange={searchData} />

    <div className="mx-auto">
      <RestaurantCard restArr={allResetArr} />
    </div>
    </div>
  )
}

export default Body