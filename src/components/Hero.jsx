import React, { useState } from 'react';
import './Hero.css';
import Gallery from '../components/Gallery'; 

const Hero = () => {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <>
      {/* نص بيترو كافيه المتوهج */}
      <div className="hero-text-above">
     
        <h1 className="bitro-glow-text">Bitro </h1>
        
      </div>

      {/* الفيديو الخلفية */}
      <div className="hero">
        <video
          className="hero-video"
          src="/vediopag/pagg.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
      </div>
      

      {/* زر المينيو */}
      <div className="menu-button-container">
        <button className="menu-button" onClick={() => setShowGallery(!showGallery)}>
          Menu
        </button>
      </div>

      {/* الجاليري يظهر عند الضغط فقط */}
      {showGallery && <Gallery />}
    </>
  );
};

export default Hero;