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
      <div className="video-container">
  <video
    src="../vediopag/pagg.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="video-bg"
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