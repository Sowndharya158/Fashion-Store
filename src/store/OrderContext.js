import { createContext, useState } from 'react';

const initialState={
    orderDetails:[],
    addOrderDetails:()=>{}
}

export const orderContext=createContext(initialState)

export const OrderProvider=({children})=>{
    const [orderDetails,setOrderDetails]=useState([])

    const addOrderDetails=(cartItem)=>{
        setOrderDetails((prev)=>[...prev,[cartItem]])
    }

    return(<orderContext.Provider value={{orderDetails,addOrderDetails}}>{children}</orderContext.Provider>)
}