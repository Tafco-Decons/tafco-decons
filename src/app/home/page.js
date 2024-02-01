import "rsuite/dist/rsuite.min.css";
import React from "react";
import "@/app/home/HomeStyles.css";
import HomeCarousel from "@/components/HomeCarousel";
import Contact from "../contact/page";
import Services from "../services/page";
import Image from "next/image";
import Projects from "../projects/page";

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <div className="welcome">
        <div className="welcomeInnerContainer">
          <h1>Welcome to TAFCO Designs and Constructions</h1>
          <h3>Top Quality Guaranteed</h3>
          <h5>
            Looking for a licensed and experienced professional to tackle a
            project? Get guaranteed quality results with TAFCO Designs and
            Constructions. We offer professional and reliable services for a
            wide variety of needs, working with the dedication and craftsmanship
            that has earned us a reputation for excellence. Get in touch for a
            free quote today.
          </h5>
        </div>
      </div>
      <div className="AboutContainer">
        <div className="innerContainer">
          <div className="imageContainer">
            <Image
              src={"/assets/About.jpg"}
              alt="aboutUs"
              width={100}
              height={100}
            />
          </div>
          <div className="AbouttextContainer">
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
      <Services />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
