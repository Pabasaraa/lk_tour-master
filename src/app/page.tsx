'use client';
import { useState } from 'react';
import Head from 'next/head';
import Navbar from '../app/components/Navbar';
import Footer from '../app/components/Footer';
import About from './components/About';
import Fixed from './components/Fixed';
import Why from './components/why';
import EpicEscapes from './components/EpicEscapes';
import TVoices from './components/TVoices';
import Gallery from './components/Moments';
import BackToTop from './components/BackToTop';

export default function Home() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <Head>
        <title>LK Tour Lanka</title>
      </Head>
      <Navbar />

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <p>Discover the Wonders of Sri Lanka</p>
          <h1>LK TOUR LANKA</h1>
        </div>
      </header>

      <About />

      <Fixed />

      <Why />

      <EpicEscapes />

      <TVoices />

      <Gallery />

      <Footer />

      <BackToTop />
    </>
  );
}
