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
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = () => {
  const settings = {
    dots: true, 
    infinite: true,
    speed: 1500, 
    slidesToShow: 4, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 1000, 
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3, 
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2, 
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1, 
        },
      },
    ],
    arrows: false, 
  };

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
    <div className="carousel-container" style={{ margin: "20px 0" }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img
              src={image.src}
              alt={image.alt}
              style={{
                width: "auto",
                height: "100px", 
                margin: "0 auto",
                borderRadius: "8px",
                objectFit: "contain",   
                paddingLeft: "20px",
                paddingRight: "20px",
            }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
