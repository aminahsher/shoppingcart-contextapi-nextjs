"use client"
import React, { useState } from 'react'
import {MyContext} from "@/app/context"

interface Obj{
    id:number
    name:string
}

const CartProvider = ({children}:{children: React.ReactNode}) => {
    const [cart, setCart] = useState<Obj[]>([])
    const add=(obj:Obj) => setCart([...cart,obj])
    const del = (id:number)=>{
      const newCart= cart.filter((val)=> val.id !==id)
      return setCart([...newCart])
    }
  return (
    <>
    <MyContext.Provider value={{cart, add, del}}>
    {children}
    </MyContext.Provider>
    </>
  )
}

export default  CartProvider
