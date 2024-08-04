import React from "react";
import { BiLogoWhatsapp, BiMailSend, BiPhone } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = ()=>{
    
    return(
        <div className="footer">
            <link></link>
            <section className="fts1">
                <h3>About us</h3>
                <a>services</a>
                <p>prices</p>
                <p>FAQ</p>
            </section>
            <section className="fts2">
                <h3>conatct details</h3>
                <a style={{display:"flex", alignItems:'center'}}><BiMailSend style={{paddingRight:'5px'}}/> Mail</a>
                <a style={{display:"flex", alignItems:'center'}}><BiPhone style={{paddingRight:'5px'}}/> Phone</a>
                <a style={{display:"flex", alignItems:'center'}}><BiLogoWhatsapp style={{paddingRight:'5px'}}/> WhatsApp</a>
            </section>
            <section className="fts3">
                <h3>Business Opening time</h3>
                <a></a>
                <a></a>
                <a></a>
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
