import React, {useState } from 'react'
import CleanKitchen from '../images/Clean_kitchen.jpg';
import CleanDining from '../images/clean_dinning.jpeg';
import cleanRoom from "../images/cleaned room.jpg";
import CleanandLandury from"../images/CHAIR SHELVE.jpg"
import Room from "../images/room.jpg"
import Palour from "../images/palour.jpg"
import Bath from "../images/bath.jpg"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function OurWorks({ onOpen }) {

        /*
        create a state that carry's the slide thats changed then state afterchange of the slide to setstate the then on set state let a funcion that switch to the next sliderer image which trigger a after changewhich would have a setimeout that would hold for a few seconds before triggering
        */
    const [play, setPlay] = useState([true, false, false])
    const [settings, setSettings] = useState({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: play[0],
        arrows: true,
        pauseOnDotsHover: true,
        pauseOnFocus: true,

      })
    

  return (

    <div className='lst_grids'>
        <div className='lft_lst_grids'>
            <div className='title'>
                <span className='abtulin'><span className='line'></span> RECENT WORKS</span>
                <h2>Some of <span>our works</span><br></br> done with love</h2>
            </div>
            <div className='big'>
                <Slider {...{...settings, autoplaySpeed:2500}}>
                    <img src={cleanRoom} alt=''></img>
                    <img src={Room} alt=''></img>
                </Slider>

                <div className='small'>
                    <h3>Housekeeping</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.</p>
                </div>
                
            </div>
            <button className='cnt_us_btn' style={{width:'10vw'}} onClick={onOpen}> CONTACT US</button>
        </div>

        <div className='rgt_lst_grids'>
        <div className='big'>
            <Slider {...{...settings, autoplaySpeed:3200}}>
                <img src={CleanKitchen} alt=''></img>
                <img src={CleanDining} alt=''></img>
            </Slider>
            
            
            <div className='small'>
            <h3>kitchen and Appliances Cleaning</h3>
            <p>Lorem ipsum dolor sit amet, consetetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.</p>
            </div>
        </div>
        <div className='big'>

            <div className='big'>
                <Slider {...{...settings, autoplaySpeed:4000, afterChange: (afterChange)=>{ setSettings({...settings, autoplay:false})}}}>
                    <img src={CleanandLandury} alt=''></img>
                    <img src={Palour} alt=''></img>
                    
                </Slider>
            </div>
            <div className='small'>
            <h3>Spring and window Cleaning</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.</p>
            </div>
            <button className='cnt_us_btn' onClick ={onOpen}> CONTACT US</button>
        </div>
        </div>
    </div>
  )
}

export default OurWorks
