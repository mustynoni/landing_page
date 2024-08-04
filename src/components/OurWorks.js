import React, { useState } from 'react'
import {BiChevronRight, BiChevronLeft} from 'react-icons/bi'
import CleanKitchen from '../images/Clean_kitchen.jpg';
import CleanDining from '../images/clean_dinning.jpeg';

const Images = (imgLinks, nextimg)=> {
    console.log(imgLinks, nextimg )
    return(
        <>
            <img src={imgLinks} alt=''></img>
            <BiChevronLeft onClick={(e)=>{e.preventDefault(); nextimg()}}/>
            <BiChevronRight onClick={(e)=>{e.preventDefault(); nextimg()}}/>
        </>
    )
}


function OurWorks() {

    const [imgLinks, setimgLinks] = useState([CleanKitchen])
    const nextimg = ()=>{imgLinks===CleanKitchen ? setimgLinks(CleanDining) : setimgLinks(CleanKitchen)}


  return (

    <div className='lst_grids'>
        <div className='lft_lst_grids'>
            <div className='title'>
                <span className='abtulin'><span className='line'></span> RECENT WORKS</span>
                <h2>Some of <span>our works</span><br></br> done with love</h2>
            </div>
            <div className='big'>
            <div className='img_container'>
                <Images imgLinks nextimg/>
            </div>
                <div className='small'>
                    <h3>kitchen and Appliances Cleaning</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.</p>
                </div>
                
            </div>
            <button className='cnt_us_btn' style={{width:'10vw'}}> CONTACT US</button>
        </div>

        <div className='rgt_lst_grids'>
        <div className='big'>

            <img src={require("../images/cleaned room.jpg")} alt=''/>
            
            <div className='small'>
            <h3>Housekeeping</h3>
            <p>Lorem ipsum dolor sit amet, consetetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.</p>
            </div>
        </div>
        <div className='big'>
            <div className='img_container'>
                <img src={require("../images/CHAIR SHELVE.jpg")} alt='' />
                <BiChevronLeft />
                <BiChevronRight />
            </div>
            <div className='small'>
            <h3>Spring and window Cleaning</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.</p>
            </div>
            <button className='cnt_us_btn'> CONTACT US</button>
        </div>
        </div>
    </div>
  )
}

export default OurWorks
