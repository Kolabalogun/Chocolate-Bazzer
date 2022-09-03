import React, { useEffect } from 'react'
import { useState } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Home/Header'
import Products from '../Components/Home/Products'
import ScrolltoTop from '../Components/Home/ScrolltoTop'
import Services from '../Components/Home/Services'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const [reloadCount, reloadCountF] = useState(localStorage.getItem('reloadCount'))



  useEffect(() => {
    // reloadCountF(reloadCount + 1)
    if (!reloadCount) {
      window.location.reload()

    }

    reloadCountF(localStorage.setItem("reloadCount", true))

  }, []);

  console.log(reloadCount);
  return (
    <>
      <Header />
      <Services />
      <Products />
      <Footer />
      <ScrolltoTop />
    </>
  )
}

export default Home