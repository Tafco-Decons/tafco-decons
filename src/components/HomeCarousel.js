"use client";
import { useEffect, useState } from "react";
import { Button, Carousel } from "rsuite";
import "@/components/HomeCarousel.css";
import { useRouter } from "next/navigation";

const HomeCarousel = () => {
  const router = useRouter();
  const [isTextVisible, setIsTextVisible] = useState(false);

  useEffect(() => {
    // Add the 'show' class after a delay (adjust the delay as needed)
    const timeoutId = setTimeout(() => {
      setIsTextVisible(true);
    }, 500);

    // Clear the timeout when the component is unmounted
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>
      <div>
        <Carousel
          className="custom-slider"
          //   autoplay
          //   autoplayInterval={5000}
          style={{ height: "85vh" }}
        >
          <div className="HImageContainer">
            <div className="titleContainer">
              <div className={`title ${isTextVisible ? "show" : ""}`}>
                <span>TAFCO DESIGNS AND CONSTRUCTIONS</span>
                <h5>OUR EXPERTISE FOR YOUR PROJECT</h5>
              </div>
              <div className="buttonContainer">
                <Button
                  appearance="default"
                  className="button"
                  onClick={() => {
                    router.push("/projects");
                  }}
                >
                  OUR PROJECTS
                </Button>
              </div>
            </div>
          </div>
          <div className="HImageContainer1">
            <div className="titleContainer">
              <div className={`title ${isTextVisible ? "show" : ""}`}>
                <span>THE BEST COMPANY</span>
                <h5>We are professional company over 20 year of experience.</h5>
                <h5>We will brighten up every corner of your house.</h5>
              </div>
              <div className="buttonContainer">
                <Button
                  appearance="default"
                  className="button"
                  onClick={() => {
                    router.push("/contact");
                  }}
                >
                  CONTACT
                </Button>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};
export default HomeCarousel;
