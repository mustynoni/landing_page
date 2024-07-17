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
    const a= [window.innerHeight, window.innerWidth]
    const [isModalOpen, setModalOpen] = useState(false);
    console.log(a)
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
            <button type='button' className='cnt_us_btn' onClick={() => setModalOpen(true)}> CONTACT US</button>
          </div>
        </header>
        <body>
          <div className='top_div'>
            <h1>Come <span>home</span> to a clean enviroment</h1>
            <section><p>We clean it all so you don't have to go through the stress, making your comfort spaces even more comforting. let save you the hussle by doing all the cleaning.</p></section>
          
          </div>
          <section className='image_in_between'><div className='roundsvg'><ReactSVG src={roundsvg} /></div><img src={require("./images/top_div_img.jpg")} alt='' /> </section>
          <div>
            {/* <image className='main_pic'></image>
            <image className='Bottm_ribbon'></image> */}
          </div>


          
      <Contactmodal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2>CONTACT US</h2>
        <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', padding:'20px'}}>
          <span className='cnt_us_icon'><a href='mailto:someone@example.com'><img src={require('./images/email.png')} alt = 'Phone'></img></a></span> 
          <span className='cnt_us_icon'><a href='wa.link'><img style ={{width:'88%', 'padding-inline':'10px'}}  src={require('./images/whatsapp-logo.png')} alt = 'Whatsapp'></img></a></span> 
          <span className='cnt_us_icon'><a href='tel:07590228369'><img style ={{width:'80%', 'padding-inline':'10px'}} src={require('./images/phone.png')} alt = 'Email'></img></a></span> 
        </div>
        

      </Contactmodal>

          {/* <div className='img_text_grid'>
            <div>
              <span className='abtulin'><span className='line'></span> ABOUT US</span>
              <h1>We help to bring your <br/><span>dream home</span> to reality</h1>
              <section>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.
              </section>
              <section>
                Tempor dolor elementum tellus non ipsum faucibus. Justo, magna mauris posuere auctor justo. Habitant proin aliquet volutpat leo ultricies. Dui blandit eget vitae turpis ultrices aliquet nunc. Faucibus sit odio bibendum lobortis diam.
              </section>
            </div>

            <div>
            
            <img src={require("./images/about-creative.webp")} alt='' />
            </div>
          </div>
          <div className='under_text_img'>
            <div><span>100%</span>
              <p>SATISFITATION <br/> CLIENTS</p>
            </div>
            <div><span>250</span>
              <p>EMPLOYEES ON<br/> WORLDWIDE</p></div>
            <div><span>3469</span><p>PROJECTS COMPLETED <br/>ON 60 COUNTRIES</p> </div>
          </div> */}
          {/* <section className='long_line'></section> */}
          <About />
          <Services />
          <Pricing />
          {/* <div>
            <span className='abtulin'><span className='line'></span> OUR SERVICES</span>
            <h1>We provide the <span>best solutions</span> for your dream home</h1>
            
          </div>
         
          <div className='tri_divs_after'>
              <div>Architectural & Interior design

Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.</div>
              <div>Building Renovation

Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.</div>
              <div>Construction Management

Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.</div>
              
          </div> */}

          {/* <div className='lst_grids'>

            <div className='lft_lst_grids'>
              <div className='big'>
                <div className='small'>
                  <span className='abtulin'><span className='line'></span> RECENT WORKS</span>
                  <h1>Some of <span>our crafts</span> made with love</h1>
                </div>

                <img src={require("./images/work-1.webp")} alt='' />
              
              </div>
              <div className='big' style={mistyle}>
                <div className='small'>
                  Villa Furnishing & Interior
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.
                </div>

                <button className='cnt_us_btn'> CONTACT US</button>
                
              </div>
              
            </div>

            <div className='rgt_lst_grids'>
              <div className='big'>

                <img src={require("./images/temp desisn.webp")} alt=''/>
                
                <div className='small'>
                  Luxury Hotel Renovation
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.
                </div>
              </div>

              <div className='big'>
                <img src={require("./images/work-3.webp")} alt='' />
                <div className='small'>
                  Residence Swimming Pool
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.
                </div>
                <button className='cnt_us_btn'> CONTACT US</button>
              </div>
            </div>
          </div> */}
          <OurWorks />
        </body>
        {/* <Footer /> */}

      </>
    </div>
  );
}

export default App;
