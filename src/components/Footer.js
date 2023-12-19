import React from "react";
import "@/components/FooterStyles.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="Fcontainer">
      <div className="Ftitle">
        <h4>TAFCO Designs and Constructions</h4>
      </div>
      <div className="address">
        <span>TAFCO Designs and Constructions</span>
        <br></br>
        <span>(A division of Entropy Management Services)</span>
        <br></br>
        <span>
          49/1, Anees Plaza, 2nd floor, Rashtriya Vidyalaya Rd, Basavanagudi,
          Bengaluru, Karnataka-560004
        </span>
      </div> 
      <div className="FiconContainer">
        <Image src="/assets/Facebook.png" alt="some" width={20} height={20} />
        <Image src="/assets/Twitter.png" alt="some" width={20} height={20} />
        <Image src="/assets/LinkedIn.png" alt="some" width={20} height={20} />
      </div>
      <div className="copyright">
        <span>©2020 by TAFCO Designs and Constructions.</span>
      </div>
    </div>
  );
};

export default Footer;
