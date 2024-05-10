import { createContext, useContext, useState } from "react";


const initialstate = {
    cart: [],
    cartitemcount: () => 0,
    addtocart: () => null,
    removefromcart: () => null,
    increasequantity: () => null,
    decreasequantity: () => null,
}

const Cartcontext = createContext(initialstate);

const useCart = () => useContext(Cartcontext);

const Cartprovider = ({ children }) => {
    const [cart, setcart] = useState(initialstate.cart);

    const cartitemcount = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }

    const addtocart = (product) => {
        const productIdx = cart.findIndex((item) => item.product.id === product.id)

        if(productIdx!== -1){
         increasequantity(product.id)
        }else{
            setcart([...cart,{product,quantity:1}])
        }
    }
    const removefromcart=(productId)=>{
        setcart(cart.filter((item)=>item.product.id !== productId))
    }

    const increasequantity=(productId)=>{
        const copy=cart.slice()
        const productIdx=copy.findIndex((item)=>item.product.id===productId)
        if(productIdx!== -1){
            copy[productIdx].quantity += 1
            setcart(copy)
        }
    }
    const decreasequantity=(productId)=>{
        const copy=cart.slice()
        const productIdx=copy.findIndex((item)=>item.product.id===productId)
        if(productIdx!== -1 && copy[productIdx].quantity>1){
            copy[productIdx].quantity -= 1
            setcart(copy)
        }
    }
    return (
        <Cartcontext.Provider
        value={{cart,cartitemcount,addtocart,removefromcart,increasequantity,decreasequantity}}
        >
            {children}
        </Cartcontext.Provider>
    )
}

export {useCart,Cartprovider}