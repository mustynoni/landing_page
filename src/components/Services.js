import React from 'react'
import '../App.css';

export default function Services() {
  return (
    <>
        <div className='services' id='services'>
            <span className='abtulin'><span className='line'></span> OUR SERVICES</span>
            <h2>We provide the <span>best solutions</span> for your dream home</h2>

        </div>

        {/* Service Cards: Introduce a hover effect that zooms slightly into the image and reveals service details. */}
        {/* add maybe image that will slowly fade to top of card while card rotates to reveal details */}
        <div className='tri_divs_after'>
            <div><h2>Office Cleaning</h2> Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.</div>
            <div><h2>Apartment Cleaning</h2> Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.</div>
            <div><h2>Laundary Services</h2> Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.</div>

        </div>
    </>

    

  )
}