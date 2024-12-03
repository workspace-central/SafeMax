/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const Header = () => {
  const [activeLink, setActiveLink] = useState("#home");

  // Scroll to specific section or top of the page
  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setActiveLink(id); // Update active link state
  };

  useEffect(() => {
    scrollToSection("#home");
  }, []);

  const handleScroll = () => {
    const sections = ["#home", "#services", "#about", "#contact"];
    let currentSection = "#home";
    
    sections.forEach((section) => {
      const element = document.querySelector(section);
      if (element && window.scrollY >= element.offsetTop - 100) {
        currentSection = section;
      }
    });

    setActiveLink(currentSection); // Update active section
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header role="banner" className="relative h-screen text-white">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src="/bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      ></video>

      <div className="relative z-10 px-6 py-4 h-full flex flex-col">
        <nav
          role="navigation"
          aria-label="Main navigation"
          className="container mx-auto flex items-center justify-between"
        >
          <a
            href="#home"
            aria-label="Navigate to Home Section"
            className={`cursor-pointer ${activeLink === "#home" ? "text-orange-400" : ""}`}
            onClick={() => scrollToSection("#home")}
          >
            <img
              src="/logo.png"
              alt="SafeMax Security Logo - Cybersecurity Solutions"
              className="flex justify-center h-full w-30"
            />
          </a>

          <ul className="flex-grow hidden md:flex justify-end space-x-20 text-xl">
            <li>
              <button
                onClick={() => scrollToSection("#home")}
                aria-label="Go to Home Section"
                className={`hover:text-orange-400 transition duration-200 ${activeLink === "#home" ? "text-orange-400" : ""}`}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("#services")}
                aria-label="Explore Our Services"
                className={`hover:text-orange-400 transition duration-200 ${activeLink === "#services" ? "text-orange-400" : ""}`}
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("#about")}
                aria-label="Learn About Us"
                className={`hover:text-orange-400 transition duration-200 ${activeLink === "#about" ? "text-orange-400" : ""}`}
              >
                About Us
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("#contact")}
                aria-label="Scroll to Contact Us Section"
                className={`hover:text-orange-400 transition duration-200 ${activeLink === "#contact" ? "text-orange-400" : ""}`}
              >
                Contact Us
              </button>
            </li>
          </ul>
        </nav>

        <main
          role="main"
          className="flex-grow flex flex-col items-center justify-center text-center"
        >
          <h1 className="text-6xl md:text-7xl font-bold leading-snug text-white">
            Innovating <span className="text-orange-400">Cybersecurity</span>
            <br />
            Securing Your <span className="text-orange-400">Future</span>
          </h1>

          <p className="text-base md:text-2xl text-gray-300 mt-4">
            Empowering Enterprises with Next-Generation Cyber Defense.
          </p>

          <a
            href="#get-started"
            aria-label="Get Started with SafeMax Security"
            className="mt-6 px-12 py-3 text-2xl bg-orange-400 text-white font-bold rounded-full hover:bg-orange-500 transition duration-200 hover:scale-110 hover:shadow-lg"
          >
            Get Started
          </a>
        </main>
      </div>
    </header>
  );
};

export default Header;
