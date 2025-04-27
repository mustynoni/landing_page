import React from "react";
import { BiLogoWhatsapp, BiMailSend, BiPhone } from "react-icons/bi";

const Footer = ()=>{
    
    return(
        <div className="footer">
            <section className="fts1">
                <h3>About us</h3>
                <ul>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#Pricing">Prices</a></li>
                    <li><a href="#Faq">FAQ</a></li>
                </ul>

            </section>
            <section className="fts2">
                <h3>conatct details</h3>
                <ul>
                    <li><a href='mailto:someone@example.com'><BiMailSend style={{paddingRight:'5px'}}/> Mail</a></li>
                    <li><a href='tel:07590228369'><BiPhone style={{paddingRight:'5px'}}/> Phone</a></li>
                    <li><a href='whatsapp://send?phone=447590228369&text=Hi%20Quality%20Clean%2C%0A%0AI%20would%20like%20services%20with%20%E2%80%A6'><BiLogoWhatsapp style={{paddingRight:'5px'}}/> WhatsApp</a></li>
                </ul>
            </section>
            <section className="fts3">
                <h3>Service Hours</h3>
                <p>Weekdays 7:30 Am - 9:00 Pm</p>
                <p>Weekends 7:00 Am - 8:00 Pm</p>
                <p></p>
                <p></p>
            </section>
            {/* <section className="fts4">
                <h3>conatct details</h3>
                <a></a>
                <a></a>
                <a></a>
            </section> */}
        </div>
    )
}

export default Footer
