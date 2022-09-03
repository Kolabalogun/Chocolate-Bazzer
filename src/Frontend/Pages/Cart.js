import React, { useEffect } from 'react'
import CartComponent from '../Components/Cart/Cart'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import AnimatedPage from '../../Utils/AnimatedPage'

const Cart = () => {

    useEffect(() => {
        window.scrollTo(0, 0)

    }, []);

    return (
        <div id="cart">
            <AnimatedPage>

                <Navbar />
                <CartComponent />
                <Footer />


            </AnimatedPage>
        </div>
    )
}

export default Cart