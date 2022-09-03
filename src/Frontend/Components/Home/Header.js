import React from 'react'
import { Link } from 'react-scroll'
import AnimatedPage from '../../../Utils/AnimatedPage'


import Navbar from '../Navbar'

const Header = () => {








  return (
    <AnimatedPage>
      <div className="header" id='home' >

        <Navbar active='home' />

        <div className="caption">
          <span className='bob'>Your No. 1 Chocolate Plug in Nigeria...</span>
          <span className='thraoy'>Unlike therapy you don't need an appointment for chocolate. Plus, it's way CHEAPER.</span>
          <Link
            activeClass=""
            to="shop"
            style={{ cursor: 'pointer' }}
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="shopBtn"



          >
            SHOP NOW
          </Link>
        </div>


      </div>
    </AnimatedPage>
  )
}

export default Header