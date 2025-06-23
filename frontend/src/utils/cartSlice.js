import { createSlice } from "@reduxjs/toolkit";


//crete slice have 3 parts: name, initialState, reducers
//cartSlice k andr action and reducer store huye and ise m s export krenge
const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
    },

    // we write in this action k coresponding reducer function(have acces-state(i can acces intial state or first value),action-ke coresponds reducer funcc)
    reducers:{
        addItem: (state,action)=>{
            state.items.push(action.payload); //action.payload is the foodItem we get from RestaurantDetails.jsx
        },
        removeItem: (state,action)=>{
            state.items.pop(); //this will remove the last item from the cart
        },
        resetCart:(state,action)=>{
            state.items.length=0; //this will reset the cart by making the length of items array 0
        },
    }
})

export const {addItem,removeItem,resetCart} = cartSlice.actions;
export default cartSlice.reducer;