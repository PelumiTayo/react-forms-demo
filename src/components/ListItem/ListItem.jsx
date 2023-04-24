/* eslint-disable react/prop-types */
// import { useState } from 'react';
import "./ListItem.css";

function ListItem({ item }) {
  // Destructure food and qty from item object
  const { food, quantity } = item;

  // function increment() {
  //   setQuantity(count => count + 1);
  // }

  // function decrement() {
  //   setQuantity(count => count + 1);
  // }

  return (
    <div className="ListItem">
      <h2>{food}: {quantity}</h2>
      {/* <span>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </span> */}
    </div>
  );
}

export default ListItem;
