import React from "react";
import cyient from "../assets/cyient.png";
import threei from "../assets/threei.png";
import kpit from "../assets/kpit.png";
import eclerx from "../assets/eclerx.png";
import sonata from "../assets/sonata.png";
import zensar from "../assets/zensar.png";
import sasken from "../assets/sasken.png";
import persistent from "../assets/persistent.png";
import mastek from "../assets/mastek.png";
import hexaware from "../assets/hexaware.png";
import firstsource from "../assets/firstsource.png";
import landt from "../assets/l&t.png";
import "../assets/ImageCarousal.css"; // External CSS file for styling

const ImageCarousel = () => {
  const images = [
    { src: cyient, alt: "Cyient" },
    { src: threei, alt: "3i Infotech" },
    { src: kpit, alt: "KPIT" },
    { src: eclerx, alt: "eClerx" },
    { src: sonata, alt: "Sonata" },
    { src: zensar, alt: "Zensar" },
    { src: sasken, alt: "Sasken" },
    { src: persistent, alt: "Persistent" },
    { src: mastek, alt: "Mastek" },
    { src: hexaware, alt: "Hexaware" },
    { src: landt, alt: "L&T" },
    { src: firstsource, alt: "Firstsource" },
  ];

  return (
    <div id="client" className="carousel-container">
      <div className="carousel-track mt-[75px]">
        {images.concat(images).map((image, index) => (
          <div key={index} className="carousel-item">
            <img src={image.src} alt={image.alt} style={{
                width: "250px",
                height: "250px", 
                margin: "0 auto",
                borderRadius: "8px",
                objectFit: "contain",   
                paddingLeft: "20px",
                paddingRight: "20px",
            }}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
