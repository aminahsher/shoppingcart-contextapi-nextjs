"use client";
import React, { useContext } from "react";
import { MyContext } from "./context";

const Shop = () => {
  const obj = useContext(MyContext);
  const arr = [
    { name: "tops", id: 1 },
    { name: "pants", id: 3 },
    { name: "jeans", id: 2 },
  ];
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
  
    <h1 className="text-2xl font-semibold text-left mb-4">Shopping</h1>
  
    <ol className="list-decimal pl-5 space-y-2">
      {arr.map((val, i) => {
        return (
          <li key={i} className="flex justify-between items-center p-2 border-b border-gray-200 last:border-b-0">
            <span className="font-medium">{val.id}: {val.name}</span>
            <span
              className="ml-5 text-blue-600 hover:text-blue-800 cursor-pointer"
              onClick={() => obj.add({ name: val.name, id: val.id })}
            >
              Add to Cart
            </span>
          </li>
        );
      })}
    </ol>
  
  </div>
  
  );
};

export default Shop;
