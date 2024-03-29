import React from "react";
import "@/app/about/about.css";
import Image from "next/image";

// export const metadata = {
//   title: "About | TAFCO Designs and Constructions",
// };

const About = () => {
  return (
    <>
      <div className="outerContainer">
        <div className="innerContainer">
          <div className="imageContainer">
            <Image
              src={"/assets/About.jpg"}
              alt="aboutUs"
              width={100}
              height={100}
            />
          </div>
          <div className="textContainer">
            <h1>Who are we?</h1>
            <h2>Contractors You Can Trust</h2>
            <h3>
              TAFCO Designs and Constructions is a design and construction firm
              based in Bangalore. We provide complete end to end services for
              residential apartments, commercial buildings, sewage and water
              treatment plants, layouts and villas. As a reputed company, we
              give utmost importance to our client’s satisfaction and achieve
              targets with honesty and uprightness. Our team consists of highly
              skilled professionals who are passionate and dedicated. We ensure
              that our clients get a quality service at reasonable price.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
