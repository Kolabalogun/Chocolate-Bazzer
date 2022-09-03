import React, { useEffect } from 'react'

import Footer from '../Components/Footer'
import Loader from '../Components/Loader'
import Navbar from '../Components/Navbar'
import ProductList from '../Components/ProductList'
import Caption from '../Components/Shop/Caption'
import { useGlobalContext } from '../../Functions/Context'
import AnimatedPage from '../../Utils/AnimatedPage'
import StoreList from '../Components/StoreList'

const Shop = () => {

    const { loader, loaderF, closeloader } = useGlobalContext()

    useEffect(() => {
        window.scrollTo(0, 0)

    }, []);
    return (

        <AnimatedPage >
            {loader ?


                <Loader /> :
                <div id="shop">



                    <Navbar active='shop' />
                    <Caption />

                    <div className="shopProducts">
                        <StoreList />
                    </div>

                    <Footer />



                </div>}

        </AnimatedPage>

    )
}

export default Shop