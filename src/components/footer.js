import React from "react";
import { BiLogoWhatsapp, BiMailSend, BiPhone } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = ()=>{
    
    return(
        <div className="footer">
            <link></link>
            <section className="fts1">
                <h3>About us</h3>
                <a href="#">Services</a>
                <a href="#">Prices</a>
                <a href="#">FAQ</a>
            </section>
            <section className="fts2">
                <h3>conatct details</h3>
                <a href='#'><BiMailSend style={{paddingRight:'5px'}}/> Mail</a>
                <a href='#'><BiPhone style={{paddingRight:'5px'}}/> Phone</a>
                <a href='#'><BiLogoWhatsapp style={{paddingRight:'5px'}}/> WhatsApp</a>
            </section>
            <section className="fts3">
                <h3>Business Opening time</h3>
                <p></p>
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
