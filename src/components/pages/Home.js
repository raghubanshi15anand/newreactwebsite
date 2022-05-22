import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import './cssFile/Home.css';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <div className='footerInformation'>
      <Footer />
      </div>
    </>
  );
}

export default Home;
