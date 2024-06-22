import React from 'react'


export default function About() {
  return (
    <>
        <div className='img_text_grid' id='About'>
            <div>
                <span className='abtulin'><span className='line'></span> ABOUT US</span>
                <h2>We help to bring your <br/><span>dream home</span> to reality</h2>
                <section>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.
                </section>
                <section>
                    Tempor dolor elementum tellus non ipsum faucibus. Justo, magna mauris posuere auctor justo. Habitant proin aliquet volutpat leo ultricies. Dui blandit eget vitae turpis ultrices aliquet nunc. Faucibus sit odio bibendum lobortis diam.
                </section>
            </div>

            <div>
                <img src={require("../images/CLEAN_ARRANGING.jpg")} alt='' />
            </div>
        </div>
        <div className='under_text_img'>
            <div><span>100%</span>
                <p>SATISFIED <br/> CLIENTS</p>
            </div>
            <div><span>250</span>
                <p>EMPLOYEES ON<br/> WORLDWIDE</p>
            </div>
            <div>
                <span>500 <span>+</span></span><p>HOURS OF CLEANING<br/>COMPLETED</p> 
            </div>
        </div>      
    </>
  )
}



