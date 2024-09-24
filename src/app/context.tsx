"use client"
import { createContext } from "react"

interface Cart{
    [x:string]:any
}

export const MyContext=createContext({} as Cart)