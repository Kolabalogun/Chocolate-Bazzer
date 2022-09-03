import React from 'react'
import { useGlobalContext } from '../Functions/Context'

const EachSocials = () => {

    const { signInWithGoogle } = useGlobalContext()
    return (
        <div className="social-container">

            <div className="eachSocial">
                <img src='svg/facebook-brands.svg' alt='' />
            </div>
            <div onClick={signInWithGoogle} className="eachSocial">
                <img src='svg/google-brands.svg' alt='' />
            </div>
            <div className="eachSocial">
                <img src='svg/twitter-brands.svg' alt='' />
            </div>

        </div>
    )
}

export default EachSocials