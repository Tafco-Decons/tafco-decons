import React from "react";
import "@/app/services/service.css";
import Image from "next/image";

// export const metadata = {
//   title: "Services | TAFCO Designs and Constructions",
// };

const Services = () => {
  const description = [
    {
      img: "Architecture.jpg",
      title: "Architecture",
      subtitle: "Customized to Your Preferences",
      desc: "Architecture is a creative field that demands extraordinary imagination and planning. We provide innovative and distinct architectural designs as per client’s requirement. Along with architectural plans, we also help our clients get an idea of their dream house by creating 3D models and elevations.",
    },
    {
      img: "Interior.jpg",
      title: "Interior",
      subtitle: "Efficient. Reliable. Exceptional.",
      desc: " Interiors are one of the most prominent aspects of a building. It is necessary to create an aesthetically pleasing and healthy atmosphere for the people using the space. We are pro in designing and executing the interiors and have expertise in the following works.• False ceiling • Customized wallpapers• GRG 3D panels• PVC panels• 3D flooring• Vinyl flooring• Wooden flooring• Grid ceiling• PVC ceiling• Curtains• MDF jail designs• Wardrobe designs• Modular kitchens",
    },
    {
      img: "Structuraldesign.jpg",
      title: "Structural Design",
      subtitle: "It’s All in the Details",
      desc: "Every building needs to be structurally sound to withstand various possible loads. We perform detailed structural analysis of different components of buildings and provide economic design solutions without affecting the architecture and interiors.",
    },
    {
      img: "Construction.jpg",
      title: "Construction",
      subtitle: "Customized to Your Preferences",
      desc: "TAFCO is involved in construction of apartments, villas, commercial buildings as well as water treatment plants, sewage treatment plants and rain water harvesting set up. We maintain full transparency with our clients and keep them updated with minute details. Having zero tolerance towards hindrance, we always ensure that the construction is done according to the schedule without compromising on the quality. We also undertake building renovation works.",
    },
  ];
  const Content = () => {
    return (
      <div className="iconContainer">
        {description.map((item, index) => (
          <div className="services" key={index}>
            <div className="ImageContainer">
              <Image
                src={`/assets/${item.img}`}
                width={400}
                height={400}
                alt={item.title}
              />
            </div>
            <div className="descContainer">
              <h1>{item.title}</h1>
              <h2>{item.subtitle}</h2>
              <h3>{item.desc}</h3>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="outerConatiner">
        <div className="ServicetextContainer">
          <h1>Our Services</h1>
          <h3>A lasting Impact</h3>
        </div>

        <Content />
      </div>
    </>
  );
};

export default Services;
