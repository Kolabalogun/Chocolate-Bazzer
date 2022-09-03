import React from 'react'

const Services = () => {
    return (
        <div className='services' id='shop'>
            <div className="service">
                <div className="icon">
                    <img src="svg/free-delivery.png" alt="" />
                </div>
                <div className="content">
                    <h5>Free Delivery</h5>
                    <p>Free delivery on all orders</p>
                </div>
            </div>
            <div className="service">
                <div className="icon">
                    <img src="svg/gift-box.png" alt="" />
                </div>
                <div className="content">
                    <h5>Order Discount</h5>
                    <p>We give fair discount on our products</p>
                </div>
            </div>
            <div className="service">
                <div className="icon">
                    <img src="svg/24-hours-support.png" alt="" />
                </div>
                <div className="content">
                    <h5>24/7 Support</h5>
                    <p>We offer 24/7 supports to our customers</p>
                </div>
            </div>

        </div>
    )
}

export default Services