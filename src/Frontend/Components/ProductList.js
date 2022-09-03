import React, { useState } from 'react'
import { BoxProducts } from '../Data/ProductArray'
import { useGlobalContext } from '../../Functions/Context'

const ProductList = () => {

    const { ProductArray, increment, decrement } = useGlobalContext()


    const [boxproducts, boxproductsF] = useState(BoxProducts)
    return (
        <div className="homeProductsrow" >
            {ProductArray.map(product => <div key={product.id} className="product">

                <div className="productImg" >
                    <img src={product.img} alt="" />
                </div>
                <div className="productContent">
                    <div className="titlePrice">
                        <h3>{product.name}</h3>
                        <span>N{product.price}</span>
                    </div>
                    <div className="addToCart">
                        <div className="cart">
                            <span>Cart</span>
                            <img src="svg/shopping-bag.png" alt="" />
                        </div>
                        <div className="atc">
                            <button onClick={() => {
                                increment(product.id)
                            }} >+</button>
                            <span>{product.value}</span>
                            <button onClick={() => {
                                decrement(product.id)
                            }} >-</button>
                        </div>

                    </div>
                </div>


            </div>)}
            {boxproducts.map(product => <div key={product.id} className="product">
                <div className="productImg">
                    <img src={product.img} alt="" />
                </div>
                <div className="productContent">
                    <div className="titlePrice">
                        <h3>{product.name}</h3>
                        <span>{product.price}</span>
                    </div>
                    <div className="addToCart">
                        <div className="cart">
                            <span>Cart</span>
                            <img src="svg/shopping-bag.png" alt="" />
                        </div>
                        <div className="atc">
                            <button>+</button>
                            <span>{product.value}</span>
                            <button>-</button>
                        </div>

                    </div>
                </div>

            </div>)}
        </div>
    )
}

export default ProductList