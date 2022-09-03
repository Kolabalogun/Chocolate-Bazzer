import React, { useState } from 'react'
import { Link } from 'react-scroll';
import { useCartContext } from '../../Functions/CartContext';
import { useGlobalContext } from '../../Functions/Context';

const Navbar = ({ active }) => {

    const { navigate, navAmount, user, search, handleSearchSubmit,

        handleSearch } = useGlobalContext()


    const { totalQty } = useCartContext()


    const [bgColor, bgColorF] = useState();

    const bg = {
        backgroundColor: bgColor ? "transparent" : "rgb(221, 208, 200)",
    };

    function handleSetActive(to) {
        if (to === "home") {
            bgColorF(null);
        } else {
            bgColorF("transparent");
        }


    }
    return (
        <div className="navContainer" style={bg}>
            <div className="logo">
                <h2>THE CHOCOLATE BAZZAR</h2>
            </div>

            <div className="navsBar">
                <div className="navs">


                    {
                        active !== 'shop' &&
                        <Link
                            activeClass="activeNav"
                            to="home"
                            style={{ cursor: 'pointer' }}
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            className="nav activeNav"
                            onSetActive={handleSetActive}

                            onClick={() => {
                                navigate("/");

                            }}
                        >
                            Home
                        </Link>
                    }


                    <Link
                        activeClass="activeNav"
                        // to="shop"

                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        className={active === 'shop' ? 'nav activeNav' : 'nav'}
                        onSetActive={handleSetActive}
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                            navigate("/shop");

                        }}
                    >
                        Shop
                    </Link>
                    <Link
                        activeClass="activeNav"
                        // to="contact"
                        style={{ cursor: 'pointer' }}
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        className="nav"
                        onSetActive={handleSetActive}

                        onClick={() => {
                            navigate("/contact");

                        }}
                    >
                        Contact
                    </Link>







                </div>
                <div className="cartorlogin">
                    {
                        user ?
                            <div className="avater">
                                <img src="svg/user (1).png" alt="" />
                            </div> :
                            <Link
                                activeClass="activeNav"
                                to="userauthentication"
                                style={{ cursor: 'pointer' }}
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                                className="nav"
                                onSetActive={handleSetActive}

                                onClick={() => {
                                    navigate("/userauthentication");

                                }}
                            >
                                Login
                            </Link>
                    }

                    <div onClick={() => {
                        navigate('/cart')
                    }} className={active === 'cart' ? 'cart, activeNav' : 'cart'} style={{ margin: 0, cursor: 'pointer' }}>
                        <img src="svg/shopping-bag.png" alt="" />
                        <span>Cart</span>

                        {/* <span>({navAmount})</span> */}
                        <span>({totalQty})</span>
                    </div>

                    {active === 'shop' &&
                        (
                            <form className='navForm'>
                                <input type='text'
                                    value={search}
                                    name='search'
                                    onChange={handleSearch}
                                    placeholder='Search... ' />
                                <img onClick={handleSearchSubmit} src='svg/search.svg' alt='' />
                            </form>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar