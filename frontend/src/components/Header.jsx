/* eslint-disable no-unused-vars */
import React from "react";

const Header = () => {
  return (
    <header role="banner" className="relative h-screen text-white">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src="/bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      ></video>

      {/* Content */}
      <div className="relative z-10 px-6 py-4 h-full flex flex-col">
        {/* Navbar */}
        <nav
          role="navigation"
          aria-label="Main navigation"
          className="container mx-auto flex items-center justify-between"
        >
          {/* Logo */}
          <a
            href="#home"
            aria-label="Navigate to Home Section"
            className="cursor-pointer"
          >
            <img
              src="/logo.png"
              alt="SafeMax Security Logo - Cybersecurity Solutions"
              className="h-12 w-30 ml-11"
            />
          </a>

          {/* Navigation Links */}
          <ul className="flex-grow hidden md:flex justify-center space-x-20 text-xl">
            <li>
              <a
                href="#home"
                aria-label="Go to Home Section"
                className="hover:text-orange-400 transition duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#service"
                aria-label="Explore Our Services"
                className="hover:text-orange-400 transition duration-200"
              >
                Service
              </a>
            </li>
            <li>
              <a
                href="#about"
                aria-label="Learn About Us"
                className="hover:text-orange-400 transition duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                aria-label="Contact Us"
                className="hover:text-orange-400 transition duration-200"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        {/* Hero Section */}
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
