import Image from "next/image";
import React from "react";
import { Carousel } from "rsuite";
import "@/components/ProjectCarousel.css";

const ProjectCarousel = ({ images }) => {
  if (!Array.isArray(images)) {
    return null; // Or handle the case when images is not an array
  }
  return (
    <>
      <div>
        <Carousel
          autoplay
          className="custom-slider"
          autoplayInterval={5000}
          style={{ height: "50vh" }}
        >
          {images.map((image, index) => (
            <div key={index} className="ProjectCarouselImageContainer">
              <Image src={`/assets/${image}`} layout="fill" objectFit="cover" />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default ProjectCarousel;
