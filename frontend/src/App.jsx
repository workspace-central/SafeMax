/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import Features from './components/Features';
import Securing from './components/Securing';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function App() {
  return (
    <div>
      <Header />
      <Securing></Securing>
      <Features></Features>
      <LandingPage />
      <Footer />
    </div>
  )
}
