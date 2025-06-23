import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../utils/cartSlice'; // Adjust the path if needed

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  
  

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold my-4">Cart Items</h1>
      {cartItems.map((foodItem) => (
        <div
          key={foodItem.card.info.id || foodItem.card.info.name}
          className="flex w-3/4 mx-auto mb-10 border-b-4 p-4"
        />
      ))}
    </div>
  );
}

export default Cart;
