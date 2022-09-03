import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../../Functions/CartContext'
import { useGlobalContext } from '../../../Functions/Context'
import CartAddressPage from './CartAddressPage'
import CartForm from './CartForm'

import CartSignIn from './CartSignIn'
import CartVerticalBox from './CartVerticalBox'
import EmptyCart from './EmptyCart'


const CartComponent = () => {

    const { user, navigate } = useGlobalContext()

    const { totalPrice, dispatch, } = useCartContext()


    return (
        <div className='cartcomponent'>
            <div className="topcart">
                <h1>Cart</h1>
                <div className="cartNavlinks">
                    <Link className='cartlink fade' to='/'>
                        Home
                    </Link>
                    <p className='cartlink'>/</p>
                    <Link className='cartlink fade' to='/'>
                        Shop
                    </Link>
                    <p className='cartlink'>/</p>
                    <Link className='cartlink' to='/'>
                        Cart
                    </Link>

                </div>
            </div>

            <div className="cartSection">
                <div className="sidesection">
                    <CartVerticalBox />
                </div>
                <div className="mainsection">



                    <CartSignIn />

                    {totalPrice ?
                        user &&
                        <>

                            <CartAddressPage />


                        </> :
                        <EmptyCart />
                    }

                    <div onClick={() => {
                        navigate('/shop')
                    }} className="goback">
                        <img src="svg/arrow-left-solid.svg" alt="" />
                        <p>Continue Shopping</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CartComponent