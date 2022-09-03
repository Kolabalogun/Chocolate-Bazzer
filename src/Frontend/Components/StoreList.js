import React, { useState } from 'react'
import { BoxProducts } from '../Data/ProductArray'
import { useGlobalContext } from '../../Functions/Context'
import { useCartContext } from '../../Functions/CartContext'

const StoreList = () => {

    const { addtocart, productsFromDB, user } = useGlobalContext()


    const { dispatch } = useCartContext()





    const userId = user?.uid;
    const points = productsFromDB;

    points.sort(function (a, b) {
        return b.dateId - a.dateId;
    });




    return (
        <div className="homeProductsrow" >
            {points?.map(product => <div key={product.dateId} className="product">


                <div className="productImg" >
                    <img src={product.imgUrl} alt="" />
                </div>
                <div className="productContent">
                    <div className="titlePrice">
                        <h3>{product.productName}</h3>
                        <span>N{product.price}</span>
                    </div>
                    <div className="addToCart">
                        <div onClick={() => {
                            dispatch({ type: 'ADD_TO_CART', id: product.dateId, product })
                        }} className="cart cc">
                            <span>Cart</span>
                            <img src="svg/bag.svg" alt="" />
                        </div>


                    </div>
                </div>


            </div>)}





        </div>
    )
}

export default StoreList