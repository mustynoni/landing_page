import React, { useState } from 'react'
import { useEffect } from 'react';
import AnimatedNumbers from "react-animated-numbers";
import NumberFlow from "@number-flow/react";
import { continuous } from 'number-flow';



export default function About() {
    const [value, setValue] = useState(0);
    const [reviewValues, setreviewValues] = useState([0, 0])

    const handleVisible = () =>{
        setreviewValues([100, 250, 500])

    }

    const handleClick = () => {
      // Change the number value on button click
      setValue(prevValue => prevValue + 30);
    };

    // const [numEmp, setnumEmp] = useState(250)

    useEffect(()=>{
        const Target = document.querySelector('.satified_client');

        if (!Target) {
            console.error("Element with class '.under_text_img' not found.");
            return;
        }
        
        // function animateCountUp() {
        //     let currentPercentage = 0;
        //     const targetNumber = 100;
        //     const duration = 5500; // how long to animate
        //     const interval = 200; // Update every 50ms
        //     const increment = targetNumber / (duration / interval);

        //     const intervalId = setInterval(() => {
        //       currentPercentage += increment;
        //       if (currentPercentage >= targetNumber) {
        //         currentPercentage = targetNumber;
        //         clearInterval(intervalId);
        //       }
        //       document.querySelector('.satified_client').textContent = `${Math.round(currentPercentage)}%`;
        //     }, interval);
        // }

        // Create an Intersection Observer
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add the 'visible' class to start the animation
                    console.log('visible')
                    Target.classList.add('visible');
                    // setnumEmp((numEmp)=>numEmp+1)
                    // animateCountUp()
                    handleVisible()
                    console.log(reviewValues[1])
                    
                    // observer.unobserve(Target);
                }
                else{
                    Target.classList.remove('visible')
                    setreviewValues([0,0,0])
                    // setnumEmp((numEmp)=>numEmp-1)
                    
        
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
            <div>
                <NumberFlow 
                    value={value} 
                    duration={3000} 
                    plugins={[continuous]}
                    timing="ease-in-out"
                    // Used for layout-related transforms:
                    transformTiming={{ duration: 2000, easing: 'ease-out' }}
                    // Used for the digit spin animations.
                    // Will fall back to `transformTiming` if unset:
                    spinTiming={{ duration: 1000, easing: 'ease-out' }}
                    // Used for fading in/out characters:
                    opacityTiming={{ duration: 500, easing: 'ease-out' }}
                />
                <button onClick={handleClick}>Change Number</button>
            </div>
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
            <div><span className='satified_client'>
                <NumberFlow 
                    value={reviewValues[0]} 
                    duration={2000} 
                    plugins={[continuous]}
                    timing="ease-in-out"
                    // Used for layout-related transforms:
                    transformTiming={{ duration: 1000, easing: 'ease-out' }}
                    // Used for the digit spin animations.
                    // Will fall back to `transformTiming` if unset:
                    spinTiming={{ duration: 2000, easing: 'ease-out' }}
                    // Used for fading in/out characters:
                    opacityTiming={{ duration: 2000, easing: 'ease-out' }}
                />% </span>{/*content is written in index.css*/}
                <p>SATISFIED <br/> CLIENTS</p>
            </div>
            <div>
                 <span>    {/*number of employees */}
                    <NumberFlow 
                        value={reviewValues[1]} 
                        duration={2000} 
                        plugins={[continuous]}
                        timing="ease-in-out"
                        // Used for layout-related transforms:
                        transformTiming={{ duration: 1000, easing: 'ease-out' }}
                        // Used for the digit spin animations.
                        // Will fall back to `transformTiming` if unset:
                        spinTiming={{ duration: 2000, easing: 'ease-out' }}
                        // Used for fading in/out characters:
                        opacityTiming={{ duration: 2000, easing: 'ease-out' }}
                    /> 
                </span>
                <p>EMPLOYEES ON<br/> WORLDWIDE</p>
            </div>
            <div>
                <span><NumberFlow 
                    value={reviewValues[2]} 
                    duration={2000} 
                    plugins={[continuous]}
                    timing="ease-in-out"
                    // Used for layout-related transforms:
                    transformTiming={{ duration: 1000, easing: 'ease-out' }}
                    // Used for the digit spin animations.
                    // Will fall back to `transformTiming` if unset:
                    spinTiming={{ duration: 2000, easing: 'ease-out' }}
                    // Used for fading in/out characters:
                    opacityTiming={{ duration: 2000, easing: 'ease-out' }}
                />+ </span><p>HOURS OF CLEANING<br/>COMPLETED</p> 
            </div>
        </div>      
    </>
  )
}



