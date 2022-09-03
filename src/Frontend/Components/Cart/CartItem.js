
import React from "react";
import { useCartContext } from "../../../Functions/CartContext";
import { useGlobalContext } from "../../../Functions/Context";

const CartItem = ({ photo, name, price, value, id, product }) => {

    const { removeItem } = useGlobalContext()

    const { shoppingCart, dispatch, } = useCartContext()
    return (
        <>
            {value ? (
                <div className="citems">
                    <div className="ciImg" >
                        <img src={photo} alt="" style={{

                        }} />
                    </div>
                    <div style={{
                        justifyContent: "space-between",
                        display: 'flex',
                        flexDirection: 'column',
                        flex: 1,
                    }}>
                        <p className="ciParagraph" >{name} </p>
                        {/* <p className="ciamount fade">Amount: {value} </p> */}
                        <div className="atc">
                            <button onClick={() => dispatch({ type: 'INC', id: id, product })}>+</button>
                            <span>{value}</span>
                            <button onClick={() => dispatch({ type: 'DEC', id: id, product })}>-</button>

                        </div>
                    </div>
                    <div style={{
                        justifyContent: "space-between",
                        display: 'flex',
                        flexDirection: 'column',

                    }}>
                        <p className="ciParagraph" >N{price * value} </p>

                        {/* <img onClick={() => {
                            removeItem(id)
                        }} className="detele" src="svg/delete.svg" alt="" /> */}
                        <img onClick={() => dispatch({ type: 'DELETE', id: id, product })} className="detele" src="svg/delete.svg" alt="" />
                    </div>
                </div>
            ) : (
                <div></div>
            )
            }
        </>
    );
};

export default CartItem;
