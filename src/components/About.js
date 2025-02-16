import React, { useState } from 'react'
import { useEffect } from 'react';
import AnimatedNumbers from "react-animated-numbers";


export default function About() {
    const [numEmp, setnumEmp] = useState(250)

    useEffect(()=>{
        const Target = document.querySelector('.satified_client');

        if (!Target) {
            console.error("Element with class '.under_text_img' not found.");
            return;
        }
        
        
        function animateCountUp(Target) {
            let currentPercentage = 0;
            const targetNumber = 100;
            const duration = 1500; // how long to animate
            const interval = 200; // Update every 50ms
            const increment = targetNumber / (duration / interval);

            const intervalId = setInterval(() => {
              currentPercentage += increment;
              if (currentPercentage >= targetNumber) {
                currentPercentage = targetNumber;
                clearInterval(intervalId);
              }
              document.querySelector('.satified_client').textContent = `${Math.round(currentPercentage)}%`;
            }, interval);
        }

        // Create an Intersection Observer
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add the 'visible' class to start the animation
                    console.log('visible')
                    Target.classList.add('visible');
                    // setnumEmp((numEmp)=>numEmp+1)
                    animateCountUp()
                    // observer.unobserve(Target);
                }
                else{
                    Target.classList.remove('visible')
                    setnumEmp((numEmp)=>numEmp-1)
                }
            });
        }, { threshold: 0.5 });
        // Start observing the counter element
        observer.observe(Target);
    },[])


  return (

    <>
        <div className='img_text_grid' id='About'>
            <div>
                <span className='abtulin'><span className='line'></span> ABOUT US</span>
                <h2>We help to bring your <br/><span>dream home</span> to reality</h2>
                <section>
                    <p>At Quality Clean, we believe a clean space fosters a happier, healthier life. With a dedicated team and top-notch techniques, we transform your home or office into a pristine sanctuary. Let us handle the mess while you focus on what matters most</p>
                </section>
                {/* <section>
                    Tempor dolor elementum tellus non ipsum faucibus. Justo, magna mauris posuere auctor justo. Habitant proin aliquet volutpat leo ultricies. Dui blandit eget vitae turpis ultrices aliquet nunc. Faucibus sit odio bibendum lobortis diam.
                </section> */}
            </div>

            <div>
                <img src={require("../images/CLEAN_ARRANGING.jpg")} alt='' />
            </div>
        </div>
        <div className='under_text_img'>
            <div><span className='satified_client'>0%</span>{/*content is written in index.css*/}
                <p>SATISFIED <br/> CLIENTS</p>
            </div>
            <div>
                <span>
                    <AnimatedNumbers
                        includeComma
                        transitions={(index) => ({
                        type: "spring",
                        duration: index + 2,
                        })}
                        animateToNumber={numEmp}
                        fontStyle={{
                        fontSize: 40,
                        color: "red",
                        }}
                    />
                </span>
                <p>EMPLOYEES ON<br/> WORLDWIDE</p>
            </div>
            <div>
                <span>500 <span>+</span></span><p>HOURS OF CLEANING<br/>COMPLETED</p> 
            </div>
        </div>      
    </>
  )
}



