import React from 'react';
import './FullscreenImage.css';

function FullscreenImage({ src, onClose }) {
  return (
    <div className="fullscreen-overlay" onClick={onClose}>
      <img src={src} alt="Fullscreen" className="fullscreen-img" />
      <span className="close-button" onClick={onClose}>&times;</span>
    </div>
  );
}

export default FullscreenImage;
