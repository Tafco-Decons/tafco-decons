"use client";
import React, { useEffect, useState } from "react";
import "@/app/home/HomeStyles.css";
import { Button } from "rsuite";

const HomePage = () => {
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
    <div class="HImageContainer">
      <div class={`title ${isTextVisible ? "show" : ""}`}>
        <span style={{ marginBottom: "2em" }}>
          TAFCO Designs and Constructions
        </span>
        <h6>OUR EXPERTISE FOR YOUR PROJECT</h6>
      </div>
      <Button style={{ color: "white" }} appearance="ghost">
        LEARN MORE{" "}
      </Button>
    </div>
  );
};

export default HomePage;
