import './App.css';
// import Head from './components/head';
// import Body from './components/body';
// import Footer from './components/footer';
import { ReactSVG } from "react-svg";
// import mySvg from "./images/sitelogo.svg";
import roundsvg from "./images/cta-button-487f725c7d7d0729437bd09dc6f9b120.svg";
import Services from './components/Services';
import About from './components/About';
import Pricing from './components/Pricing';
import OurWorks from './components/OurWorks';
import Footer from './components/Footer';
import { useState } from 'react';
import Contactmodal from './components/Contactmodal';


function App() {
    console.log(window.innerHeight, window.innerWidth)
    
    const [isModalOpen, setModalOpen] = useState(false);
    const onClose = () => {setModalOpen(false)}
    const HandleOpen = () => {
      setTimeout((isModalOpen) => {
        setModalOpen(true)
      }, 100);
    }
    // const mistyle = {"flex-grow": "1",
    //   display: "flex",
    //   "flex-direction": "column",
    //   "align-items": "flex-start",
    //   "justify-content": "space-around"
    // }
  return (
    <div className="App">
      <>
        <header className='head' id='head'> 
          <div className='head_left' onClick={(e)=>{"window.location='http://google.com';"}}>
            {/* <ReactSVG src= {mySvg} /> */}
            <img src= {require('./images/Quality Clean2.png')} alt='logo'></img>
          </div>
          <div className='head_right'>
            <a href='#About'>About</a>
            <a href='#services'>Services</a>
            <a href='#pricing'>Pricing</a>
            <button type='button' className='cnt_us_btn' onClick={HandleOpen}> CONTACT US</button>
          </div>
        </header>
        <body>
          <div className='top_div'>
            <h1>Come <span>home</span> to a clean enviroment</h1>
            <section><p>We clean it all so you don't have to go through the stress, Making your comfort spaces even more comforting. Let save you the hussle by doing all the cleaning.</p></section>
          
          </div>
          <section className='image_in_between'><div className='roundsvg'><ReactSVG src={roundsvg} /></div><img src={require("./images/top_div_img.jpg")} alt='' /> </section>
          <div>
            {/* <image className='main_pic'></image>
            <image className='Bottm_ribbon'></image> */}
          </div>


      <Contactmodal isOpen={isModalOpen} onClose={onClose}/>
          
          <About />
          <Services />
          <Pricing />
          <OurWorks onOpen={HandleOpen} />
          <Footer />

        </body>

      </>
    </div>
  );
}

export default App;
