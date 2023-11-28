import React from "react";
import "@/components/FooterStyles.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div class="Fcontainer">
      <div class="Ftitle">
        <a>TAFCO Designs and Constructions</a>
      </div>
      <div class="address">
        <span>TAFCO Designs and Constructions</span>
        <br></br>
        <span>(A division of Entropy Management Services)</span>
        <br></br>
        <span>
          49/1, Anees Plaza, 2nd floor, Rashtriya Vidyalaya Rd, Basavanagudi,
          Bengaluru, Karnataka-560004
        </span>
      </div>
      <div class="FiconContainer">
        <Image src="/assets/Facebook.png" width={20} height={20} />
        <Image src="/assets/Twitter.png" width={20} height={20} />
        <Image src="/assets/LinkedIn.png" width={20} height={20} />
      </div>
      <div class="copyright">
        <span>©2020 by TAFCO Designs and Constructions.</span>
      </div>
    </div>
  );
};

export default Footer;
