import React, {useState, useRef, useEffect} from 'react'
import CleanKitchen from '../images/Clean_kitchen.jpg';
import CleanDining from '../images/clean_dinning.jpeg';
import cleanSink from "../images/cleaning_kitchen_sink.jpg";
import CleanandLandury from"../images/CHAIR SHELVE.jpg"
import Room from "../images/room.jpg"
import Palour from "../images/palour.jpg"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Swipelements from './Swipelements';


function OurWorks({ onOpen }) {

    const swiper1Ref = useRef(null);
    const swiper2Ref = useRef(null);
    const swiper3Ref = useRef(null);
    const [Interacted, setInteracted] = useState(false)
    const interactedRef = useRef(Interacted)

    const handleInteraction = () => {
        if (!Interacted) {
          setInteracted(true); // Set interaction state to true
          interactedRef.current = true; 
        }
        console.log('interacted', Interacted)
    }

    useEffect(() => {
      let swiper1Timer, swiper2Timer, swiper3Timer;
  
      // Function to start Swiper 1
      const startSwiper1 = () => {
        swiper1Timer = setTimeout(() => {
          if (!interactedRef.current){
            if (swiper1Ref.current) swiper1Ref.current.slideNext(); // Move to the next slide  
            startSwiper2();   // After Swiper 1, start Swiper 2
          }
        }, 1000); // Start immediately
      };
  
      // Function to start Swiper 2
      const startSwiper2 = () => {
        swiper2Timer = setTimeout(() => {
          if (!interactedRef.current){
              if (swiper2Ref.current) swiper2Ref.current.slideNext(); // Move to the next slide
              startSwiper3(); // After Swiper 2, start Swiper 3
          }
        }, 1000); // 1 seconds delay
      };
  
      // Function to start Swiper 3
      const startSwiper3 = () => {
        swiper3Timer = setTimeout(() => {
          if (!interactedRef.current){
            if (swiper3Ref.current) swiper3Ref.current.slideNext(); // Move to the next slide
            setTimeout(()=>{
              swiper1Ref.current.slideNext()
              swiper2Ref.current.slideNext()
              swiper3Ref.current.slideNext()
              
              setTimeout(()=>{startSwiper1();}, 1000)
            }, 3000)
            }
        }, 1000); // 1 seconds delay
      };
  
      // Start the autoplay loop
      startSwiper1();
  
      // Clear timers on component unmount to prevent memory leaks
      return () => {
        clearTimeout(swiper1Timer);
        clearTimeout(swiper2Timer);
        clearTimeout(swiper3Timer);
      };
    }, [Interacted]);
    
  return (

    <div className='lst_grids'>
        <div className='lft_lst_grids'>
            <div className='title'>
                <span className='abtulin'><span className='line'></span> RECENT WORKS</span>
                <h2>Some of <span>our works</span><br></br> done with love</h2>
            </div>
            <div className='big'>
                <Swipelements images = {[Room, Palour]} swipenexter={swiper1Ref} handleInteraction={handleInteraction}/>

                <div className='small'>
                    <h3>Housekeeping</h3>
                    <p>Our housekeeping services provide routine or deep cleaning tailored to your needs. From dusting to mopping, leave your chores to us and enjoy your spotless space.</p>
                </div>
                
            </div>
            <button className='cnt_us_btn' style={{width:'10vw'}} onClick={onOpen}> CONTACT US</button>
        </div>

        <div className='rgt_lst_grids'>
        <div className='big'>

            <Swipelements images={[CleanKitchen, CleanDining]} swipenexter={swiper2Ref} handleInteraction={handleInteraction} />
            
            <div className='small'>
            <h3>kitchen and Appliances Cleaning</h3>
            <p>Lorem ipsum dolor sit amet, consetetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.</p>
            </div>
        </div>
        <div className='big'>

            <div className='big'>
                <Swipelements images={[CleanandLandury, cleanSink]} swipenexter={swiper3Ref} handleInteraction={handleInteraction}/>
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
