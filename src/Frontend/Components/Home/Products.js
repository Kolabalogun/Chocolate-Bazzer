import React from 'react'
import { Link } from 'react-router-dom'

import ProductList from '../ProductList'
import StoreList from '../StoreList'

const Products = () => {

    return (
        <div className='homeProducts' id='shop'>
            <div className="title">
                <h2> Our Products</h2>
                <p>Asides from box packages, all items can be sold individually</p>
            </div>

            <StoreList />

            <div className="storebtnDiv">

                <Link to='/shop'
                    className='storeBtn'
                >
                    <p>
                        See Our Shop
                    </p>
                    <img src="svg/arrow-right-solid.svg" alt="" />

                </Link>


            </div>
        </div>
    )
}

export default Products