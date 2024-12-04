/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const Header = () => {
  const [activeLink, setActiveLink] = useState("#home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setActiveLink(id);
    setIsMenuOpen(false); // Close menu on selection
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

    setActiveLink(currentSection);
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
            className="cursor-pointer"
            onClick={() => scrollToSection("#home")}
          >
            <img
              src="/logo.png"
              alt="SafeMax Security Logo - Cybersecurity Solutions"
              className="h-10 w-auto"
            />
          </a>

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-3xl text-white focus:outline-none ml-4"
            aria-label="Toggle Navigation Menu"
          >
            ☰
          </button>

          {/* Navigation Links */}
          <ul
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row justify-end md:space-x-20 text-xl absolute md:relative top-16 md:top-0 left-0 md:left-auto w-full md:w-auto bg-black md:bg-transparent p-4 md:p-0`}
          >
            {["#home", "#client", "#services", "#about", "#contact"].map(
              (id, index) => (
                <li key={index} className="mb-4 md:mb-0">
                  <button
                    onClick={() => scrollToSection(id)}
                    aria-label={`Navigate to ${id.replace("#", "").toUpperCase()} Section`}
                    className={`hover:text-orange-400 transition duration-200 ${
                      activeLink === id ? "text-orange-400" : ""
                    }`}
                  >
                    {id.replace("#", "").charAt(0).toUpperCase() +
                      id.replace("#", "").slice(1)}
                  </button>
                </li>
              )
            )}
          </ul>
        </nav>

        <main
          role="main"
          className="flex-grow flex flex-col items-center justify-center text-center"
        >
          <h1 className="text-4xl md:text-7xl font-bold leading-snug text-white">
            Innovating <span className="text-orange-400">Cybersecurity</span>
            <br />
            Securing Your <span className="text-orange-400">Future</span>
          </h1>

          <p className="text-sm md:text-2xl text-gray-300 mt-4">
            Empowering Enterprises with Next-Generation Cyber Defense.
          </p>

          <a
            href="mailto:support@safemaxsecurity.services"
            aria-label="Get Started with SafeMax Security"
            className="mt-6 px-8 md:px-12 py-3 text-lg md:text-2xl bg-orange-400 text-white font-bold rounded-full hover:bg-orange-500 transition duration-200 hover:scale-110 hover:shadow-lg"
          >
            Get Started
          </a>
        </main>
      </div>
    </header>
  );
};

export default Header;
