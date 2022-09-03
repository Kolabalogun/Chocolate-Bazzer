import React from 'react'


const CartForm = () => {
    return (
        <div className='cartForm'>
            <div className="horizonBox">
                <div className="leftHorizonBox">
                    <div className="logoCart">
                        <img src='svg/house.svg' alt="" />
                    </div>
                    <div className="cartContent">
                        <div className="topCartContent">
                            <p>DELIVERY ADDRESS</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="inputrow">
                <div className="cartInput">
                    <label htmlFor="fn">Full Name *</label>
                    <input required type="text" id='fn' />
                </div>
                <div className="cartInput pn">
                    <label htmlFor="pn">Phone Number *</label>
                    <input required type="text" id='pn' />
                </div>
            </div>
            <div className="inputrow">
                <div className="cartInput">
                    <label htmlFor="add">Address *</label>
                    <input required type="text" id='add' />
                </div>

            </div>
            <div className="inputrow">
                <div className="cartInput">
                    <label htmlFor="ci">City *</label>
                    <input required type="text" id='ci' />
                </div>
                <div className="cartInput pn">
                    <label htmlFor="st">State *</label>
                    <input required type="text" id='st' />
                </div>
                <div className="cartInput pn">
                    <label htmlFor="pc">Postal Code</label>
                    <input type="text" id='pc' />
                </div>

            </div>

            <div className="storeBtn">
                Save and Delivery Here
            </div>
        </div>
    )
}

export default CartForm