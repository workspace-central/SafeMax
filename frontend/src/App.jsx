/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function App() {
  return (
    <div>
      <Header />
      <LandingPage />
      <Footer />
    </div>
  )
}
