"use client"
import React, { useContext } from 'react'
import { MyContext } from './context'

const Cart = () => {
    const obj= useContext(MyContext)
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">

    <h1 className="text-2xl font-semibold text-left mb-4">Cart</h1>
  
    <ol className="list-decimal pl-5 space-y-2">
      {obj.cart[0] && obj.cart.map((val: any, i: number) => {
        return (
          <li key={i} className="flex justify-between items-center p-2 border-b border-gray-200 last:border-b-0">
            <span className="font-medium">{val.id}: {val.name}</span>
            <span
              className="ml-5 text-red-600 hover:text-red-800 cursor-pointer"
              onClick={() => obj.del(val.id)}
            >
              Delete
            </span>
          </li>
        );
      })}
    </ol>
  
  </div>
  
  )
}

export default Cart
