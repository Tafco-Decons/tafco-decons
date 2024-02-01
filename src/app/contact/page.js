import React from "react";
import { Button } from "rsuite";
import "@/app/contact/ContactStyles.css";
import ContactForm from "@/components/ContactForm";
import Googlemaps from "@/components/Googlemaps";

const Contact = () => {
  return (
    <div className="ContactOuterContainer">
      <div className="ContacttitleContainer">
        <div className="Ctitle">
          <h3>Contact</h3>
          <span>
            Do you have a project in mind? Get in touch today and let our
            licensed experts help get the job done right.
          </span>
        </div>
        <div className="Caddress">
          <span>TAFCO Designs and Constructions</span>
          <br></br>
          <span>(A division of Entropy Management Services)</span>
          <br></br>
          <span>
            49/1, Anees Plaza, 2nd floor, Rashtriya Vidyalaya Rd, Basavanagudi,
            Bengaluru, Karnataka-560004
          </span>
          <br></br>
        </div>
        <div className="mail">
          <a href="mailto:info@tafcodecons.com">info@tafcodecons.com</a>
        </div>
        <div className="phone">
          <span>+918722046798</span>
        </div>
      </div>
      <ContactForm />
      {/* <Googlemaps /> */}
    </div>
  );
};

export default Contact;
