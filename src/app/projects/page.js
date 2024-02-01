"use client";
import React, { useEffect, useState } from "react";
import "@/app/projects/Projects.css";
import Image from "next/image";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Carousel } from "rsuite";

const Projects = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  useEffect(() => {
    // Add the 'show' class after a delay (adjust the delay as needed)
    const timeoutId = setTimeout(() => {
      setIsTextVisible(true);
    }, 500);

    // Clear the timeout when the component is unmounted
    return () => clearTimeout(timeoutId);
  }, []);
  const isMobile = useMediaQuery("(max-width:600px)");
  const isDesktop = useMediaQuery("(min-width:600px)");
  const projectDescription = [
    {
      img: [
        "/assets/Architecture.jpg",
        "/assets/Interior.jpg",
        "/assets/Structuraldesign.jpg",
        "/assets/Construction.jpg",
      ],

      title: "Villa at Chikmagalur ",
      subtitle: "Ongoing project",
      desc: "This project involved a lot of compliance measures to make sure we followed industry standards adequately. Successfully completed on time and within budget, it’s a great example of delivering on our promise of quality work while ensuring absolute client satisfaction. Want to learn more about similar projects? Get in touch today.",
    },
    {
      img: [
        "/assets/Architecture.jpg",
        "/assets/Interior.jpg",
        "/assets/Structuraldesign.jpg",
        "/assets/Construction.jpg",
      ],
      title: "Apartment at Jayanagar 9th Block, Bangalore",
      subtitle: "January 25, 2025",
      desc: " If you’re looking for a certified contractor to manage a really complex job, consider this project a testament to our abilities. We managed to deliver excellent results on schedule and under budget. We worked closely with the client to understand their needs and preferences, and the successful outcome speaks for itself.",
    },
    {
      img: [
        "/assets/Architecture.jpg",
        "/assets/Interior.jpg",
        "/assets/Structuraldesign.jpg",
        "/assets/Construction.jpg",
      ],
      title: "Apartment building at Jayanagar 9th Block",
      subtitle: "January 25, 2025",
      desc: "This project involved a lot of compliance measures to make sure we followed industry standards adequately. Successfully completed on time and within budget, it’s a great example of delivering on our promise of quality work while ensuring absolute client satisfaction. Want to learn more about similar projects? Get in touch today.",
    },
    {
      img: [
        "/assets/Architecture.jpg",
        "/assets/Interior.jpg",
        "/assets/Structuraldesign.jpg",
        "/assets/Construction.jpg",
      ],
      title: "Residential building at Hassan",
      subtitle: "Completed Project",
      desc: "While working on this project, we were very poignant about the materials and footprint of our work. We worked together with the client in order to manage their expectations and deliver the kind of results they desired. At TAFCO Designs and Constructions, our goal is to bring our client’s vision to life while working with them every step of the way.",
    },
    {
      img: [
        "/assets/Architecture.jpg",
        "/assets/Interior.jpg",
        "/assets/Structuraldesign.jpg",
        "/assets/Construction.jpg",
      ],
      title: "Entropy’s Park View, Madhavan Park, Jayanagar, Bangalore",
      subtitle: "Completed Project",
      desc: "If you’re looking for a certified contractor to manage a really complex job, consider this project a testament to our abilities. We managed to deliver excellent results on schedule and under budget. We worked closely with the client to understand their needs and preferences, and the successful outcome speaks for itself.",
    },
    {
      img: [
        "/assets/Architecture.jpg",
        "/assets/Interior.jpg",
        "/assets/Structuraldesign.jpg",
        "/assets/Construction.jpg",
      ],
      title: "Entropy Heights, BHEL layout, Bangalore",
      subtitle: "Completed Project",
      desc: "While working on this project, we were very poignant about the materials and footprint of our work. We worked together with the client in order to manage their expectations and deliver the kind of results they desired. At TAFCO Designs and Constructions, our goal is to bring our client’s vision to life while working with them every step of the way.",
    },
    {
      img: [
        "/assets/Architecture.jpg",
        "/assets/Interior.jpg",
        "/assets/Structuraldesign.jpg",
        "/assets/Construction.jpg",
      ],
      title: "Apartment at Dr. Omer Shariff Road, Basavanagudi, Bangalore",
      subtitle: "Ongoing Project",
      desc: "This project involved a lot of compliance measures to make sure we followed industry standards adequately. Successfully completed on time and within budget, it’s a great example of delivering on our promise of quality work while ensuring absolute client satisfaction. Want to learn more about similar projects? Get in touch today.",
    },
    {
      img: [
        "/assets/Architecture.jpg",
        "/assets/Interior.jpg",
        "/assets/Structuraldesign.jpg",
        "/assets/Construction.jpg",
      ],
      title: "Jamia Masjid, Sakleshpur",
      subtitle: "Ongoing Project",
      desc: "If you’re looking for a certified contractor to manage a really complex job, consider this project a testament to our abilities. We managed to deliver excellent results on schedule and under budget. We worked closely with the client to understand their needs and preferences, and the successful outcome speaks for itself.",
    },
    {
      img: [
        "/assets/Architecture.jpg",
        "/assets/Interior.jpg",
        "/assets/Structuraldesign.jpg",
        "/assets/Construction.jpg",
      ],
      title: "Apartment at Jayanagar East End A Cross, Bangalore",
      subtitle: "Upcoming Project",
      desc: "An exciting new construction project that is set to redefine urban living in our city. Located in a prime, central location, CityScape Residences is poised to become a dynamic addition to the city's skyline. This innovative development combines sleek modern architecture with sustainable design, promising to offer a vibrant and eco-conscious urban lifestyle",
    },
  ];
  const Content = () => {
    return (
      <>
        <>
          {projectDescription.map((item, index) => (
            <div className="projects" key={index}>
              <Carousel
                autoplay
                className="custom-slider"
                autoplayInterval={5000}
              >
                {item.img.map((imageUrl, imageIndex) => (
                  <div key={imageIndex} className="ProjectImageContainer">
                    <Image
                      src={imageUrl}
                      width={400}
                      height={250}
                      alt={item.subtitle}
                    />
                  </div>
                ))}
              </Carousel>

              <div className="projectdescriptionContainer">
                <h1>{item.title}</h1>
                <h2>{item.subtitle}</h2>
                <h3>{item.desc}</h3>
              </div>
            </div>
          ))}
        </>
      </>
    );
  };

  return (
    <>
      {isDesktop && (
        <div className="ProjectBackgroundImageContainer">
          <div className="ProjectTitleContainer">
            <div className={`ProjectTitle ${isTextVisible ? "show" : ""}`}>
              <span>PROJECTS PORTFOLIO</span>
              <h5>RECENT WORK</h5>
            </div>
          </div>
        </div>
      )}
      <div className="projectOuterContainer">
        {isMobile && (
          <div className="ProjecttextContainer">
            <h1>PROJECTS PORTFOLIO</h1>
            <h3>RECENT WORK</h3>
          </div>
        )}
        <Content />
      </div>
    </>
  );
};

export default Projects;
