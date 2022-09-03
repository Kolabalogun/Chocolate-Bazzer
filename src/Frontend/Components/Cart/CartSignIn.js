import React from 'react'
import { useGlobalContext } from '../../../Functions/Context'

const CartSignIn = () => {

    const { handleLogout,
        user, navigate
    } = useGlobalContext()


    return (
        <div className="horizonBox">
            <div className="leftHorizonBox">
                <div className="logoCart">
                    <img src="svg/enter.png" alt="" />
                </div>
                <div className="cartContent">
                    <div className="topCartContent">
                        <p>LOGIN</p>

                        {user ? <img src="svg/check-solid.svg" alt="" /> : <img src="svg/close.svg" alt="" />}

                    </div>
                    <div className="bottomCartContent">
                        <p>{user ? user.displayName : 'Please Sign In to complete your shopping..'}</p>
                        <p style={{ paddingLeft: 15, fontWeight: '400' }}>{user ? user.email : ''}</p>
                    </div>
                </div>
            </div>
            <div className="rightHorizonBox">
                {
                    user ?
                        <button onClick={handleLogout}>SIGN OUT</button>

                        :
                        <button onClick={() => {
                            navigate('/userauthentication')
                        }}>SIGN IN</button>
                }
            </div>
        </div>
    )
}

export default CartSignIn