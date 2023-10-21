
import { useLoaderData } from "react-router-dom";

import CartItem from "./CartItem";
import { useState } from "react";

const MyCart = () => {
    const myProducts = useLoaderData()
    const[cart,setCart] =useState(myProducts)
    
    return (
        <div className="text-center">
            <h2 className="my-5 text-4xl font-semibold">Your Cart products</h2>
            <div className="">
                {
                  cart.map((item, idx) => <CartItem key={idx} cartData={item} cart={cart} setCart={setCart}></CartItem>)
                }
            </div>
        </div>
    );
};

export default MyCart;