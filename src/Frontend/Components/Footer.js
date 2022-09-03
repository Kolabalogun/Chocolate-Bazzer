import React from 'react'
import { Link } from 'react-scroll'

const Footer = () => {
    return (
        <div className='footer' id='contact'>
            <div className="businessBrand">

                <h2>THE CHOCOLATE BAZZER</h2>
                <p>© 2021 TCB. <br />
                    All Right Reserved</p>

                <div className="socials">
                    <a href='https://www,facebook.com' className="social">
                        <img src="svg/facebook-brands.svg" alt="" />
                    </a>
                    <a href='https://www,facebook.com' className="social">
                        <img src="svg/instagram-brands.svg" alt="" />
                    </a>
                    <a href='https://www,facebook.com' className="social">
                        <img src="svg/twitter-brands.svg" alt="" />
                    </a>
                    <a href='https://www,facebook.com' className="social">
                        <img src="svg/whatsapp-brands.svg" alt="" />
                    </a>
                </div>

            </div>

            <div className="footerLinks">
                <div className="footitle">
                    <h4>Pages</h4>
                </div>
                <ul>

                    <Link className='links' to='/'>
                        <p>Home</p>
                    </Link>


                    <Link className='links' to='/shop'>
                        <p>Shop</p>
                    </Link>


                    <Link className='links' to='/contact'>
                        <p>Contact</p>
                    </Link>

                </ul>
            </div>
            <div className="footerLinks">
                <div className="footitle">
                    <h4>Address</h4>
                </div>
                <p>
                    PS, Tanke <br />
                    Ilorin, Kwara State. <br /><br />
                    Orita Challenge, <br />
                    Ibadan, Oyo State.
                </p>
            </div>
            <div className="newsletter">
                <div className="newsTitle">
                    Subscribe to our Newsletter
                </div>

                <form>
                    <input type="email" placeholder='Your Email Address' required />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Footer