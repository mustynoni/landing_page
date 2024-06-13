import React from 'react'

function OurWorks() {
  return (

    <div className='lst_grids'>
        <div className='lft_lst_grids'>
        <div className='big'>
            <div className='small'>
            <span className='abtulin'><span className='line'></span> RECENT WORKS</span>
            <h1>Some of <span>our crafts</span> made with love</h1>
            </div>

            <img src={require("../images/work-1.webp")} alt='' />
        
        </div>
        <div className='big'>
            <div className='small'>
            Villa Furnishing & Interior
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.
            </div>

            <button className='cnt_us_btn'> CONTACT US</button>
            
        </div>
        
        </div>

        <div className='rgt_lst_grids'>
        <div className='big'>

            <img src={require("../images/temp desisn.webp")} alt=''/>
            
            <div className='small'>
            Luxury Hotel Renovation
            Lorem ipsum dolor sit amet, consetetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.
            </div>
        </div>

        <div className='big'>
            <img src={require("../images/work-3.webp")} alt='' />
            <div className='small'>
            Residence Swimming Pool
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.
            </div>
            <button className='cnt_us_btn'> CONTACT US</button>
        </div>
        </div>
    </div>
  )
}

export default OurWorks
