
import React, { useContext, useEffect, useReducer } from "react";


import { CartReducer } from "./CartReducer";


const AppCartContext = React.createContext();




const AppCartProvider = ({ children }) => {





    const [cart, dispatch] = useReducer(CartReducer, { shoppingCart: JSON.parse(localStorage.getItem("shoppingCart")), totalPrice: JSON.parse(localStorage.getItem("totalPrice")), totalQty: JSON.parse(localStorage.getItem("totalQty")) });



    console.log(cart);


    useEffect(() => {

        if (!cart) {

            localStorage.setItem("shoppingCart", JSON.stringify([]));
            localStorage.setItem("totalPrice", JSON.stringify(0));
            localStorage.setItem("totalQty", JSON.stringify(0))
            localStorage.setItem("reloadCount", false)
        }

    }, [])





    return (
        <AppCartContext.Provider
            value={{
                ...cart, dispatch
            }}
        >
            {children}
        </AppCartContext.Provider >
    );
};

export const useCartContext = () => {
    return useContext(AppCartContext);
};

export { AppCartContext, AppCartProvider };
