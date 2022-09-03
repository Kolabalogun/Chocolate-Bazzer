import React from 'react'
import { useCartContext } from '../../../Functions/CartContext';
import { useGlobalContext } from '../../../Functions/Context'
import CartItem from './CartItem';

const CartVerticalBox = () => {

    const { ProductArray, total, user, isAddressAvailable } = useGlobalContext()
    const { shoppingCart, totalPrice } = useCartContext()



    const CartItems = shoppingCart.map((EachItem, index) => (
        <CartItem
            key={index}
            id={EachItem.dateId}
            name={EachItem.productName}
            price={EachItem.price}
            value={EachItem.qty}
            photo={EachItem.imgUrl}
            product={EachItem}
        />
    ));

    return (
        <div className='verticalBox'>
            <p>Your Order</p>
            {CartItems}

            <div className="citems vbfee">
                <div className="fee">
                    <p>Sub Total</p>
                    {/* <p className='ciParagraph'>N{total}</p> */}
                    <p className='ciParagraph'>N{totalPrice}</p>
                </div>
                <div className="fee">
                    <p>Delivery Fee</p>
                    <p className='ciParagraph'>N0</p>
                </div>
            </div>
            <div className="citems vbfee">
                <div className="fee">
                    <p className='ciParagraph'>Total</p>
                    {/* <p className='ciParagraph red'>N{total}</p> */}
                    <p className='ciParagraph red'>N{totalPrice}</p>
                </div>

            </div>

            {/* {total && user && isAddressAvailable ? <button className='storeBtn'>CheckOut</button> : ''} */}
            {totalPrice && user && isAddressAvailable ? <button className='storeBtn'>CheckOut</button> : ''}

        </div>
    )
}

export default CartVerticalBox