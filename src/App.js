import './App.css';
// import Head from './components/head';
// import Body from './components/body';
// import Footer from './components/footer';
import { ReactSVG } from "react-svg";
import mySvg from "./images/sitelogo.svg";
import roundsvg from "./images/cta-button-487f725c7d7d0729437bd09dc6f9b120.svg";

function App() {
    console.log(window.innerHeight, window.innerWidth)
    const mistyle = {"flex-grow": "1",
    display: "flex",
    "flex-direction": "column",
    "align-items": "flex-start",
    "justify-content": "space-around"}
  return (
    <div className="App">
      {/* <header className="App-header">
        <Head />
      </header>
      <body className='App-body'>
        <Body />
      </body>
      <footer className='App-footer'>
        <Footer />
      </footer> */}
      <>
        <header className='head'> 
          <div className='head_left'><ReactSVG src= {mySvg} /></div>
          <div className='head_right'>
            <a href='/About'>About</a>
            <a href='/service'>Services</a>
            <a href='/our_works'>Our Work</a>
            <button className='cnt_us_btn' onClick={''}> CONTACT US</button>
          </div>
        </header>

        <body>
          <div className='top_div'>
            <h1>Make <span>your home</span> an ode to joy</h1>
            <section>We turn your empty house to a lovely home, making the compact spaces with sapce saving <br/>furnitures. Making the unique tastes of yours into reality!</section>
          
          </div>
          <div className='image_in_between'><div className='roundsvg'><ReactSVG src={roundsvg} /></div><img src={require("./images/hero-image.webp")} alt='' /> </div>
          <div>
            {/* <image className='main_pic'></image>
            <image className='Bottm_ribbon'></image> */}
          </div>
          <div className='img_text_grid'>
            <div>
              <span className='abtulin'><span className='line'></span> ABOUT US</span>
              <h2>We help to bring your <br/><span>dream home</span> to reality</h2>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.
              </span>
              <span>
                Tempor dolor elementum tellus non ipsum faucibus. Justo, magna mauris posuere auctor justo. Habitant proin aliquet volutpat leo ultricies. Dui blandit eget vitae turpis ultrices aliquet nunc. Faucibus sit odio bibendum lobortis diam.
              </span>
              
            </div>
            <div>
            <img src={require("./images/about-creative.webp")} alt='' />
            </div>
          </div>
          <div className='under_text_img'>
            <div>100%
              SATISFITATION
              CLIENTS
            </div>
            <div>250
              EMPLOYEES ON 
              WORLDWIDE</div>
            <div>3469 PROJECTS COMPLETED ON 60 COUNTRIES</div>
          </div>
          <section className='long_line'></section>
          <div>
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
              
          </div>

          <div className='lst_grids'>

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
          </div>
        </body>

      </>
    </div>
  );
}

export default App;
