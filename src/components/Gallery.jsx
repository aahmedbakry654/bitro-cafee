import React, { useState } from "react";
import "./Gallery.css";

const images = [
  { src: "../images/1.jpg", name: "Espresso" },
  { src: "../images/3.jpg", name: "Hot Coffe" },
  { src: "../images/2.jpg", name: "Ice coffe & Frappe" },
  { src: "../images/4.jpg", name: "Soft Drinks & Mix Soda" },
  { src: "../images/5.jpg", name: "Cocktail Fresh" },
  { src: "../images/6.jpg", name: "Fresh Juice" },
  { src: "../images/7.jpg", name: "Milk Shake" },
  { src: "../images/desert.jpg", name: "Desert" },
  { src: "../images/8.jpg", name: "Bitro وجبات" },
  { src: "../images/9.jpg", name: "Burger Chicken" },
  { src: "../images/10.jpg", name: "Bitro مكرونه" },
  { src: "../images/11.jpg", name: "Crepe-كريب" },
  { src: "../images/12.jpg", name: "Rap Sandwich راب سندوتش" },
  { src: "../images/15.jpg", name: "وجبات مكس" },
  { src: "../images/16.jpg", name: "صواني الصحاب" },
  { src: "../images/shisha.jpg", name: "shisha" },

];

const Gallery = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="gallery-item" onClick={() => setFullscreenImage(img)}>
            <img src={img.src} alt={img.name} />
            <p>{img.name}</p>
          </div>
        ))}
      </div>

      {fullscreenImage && (
        <div className="fullscreen-overlay" onClick={() => setFullscreenImage(null)}>
          <span className="close-button">&times;</span>
          <img src={fullscreenImage.src} alt={fullscreenImage.name} className="fullscreen-img" />
          <p className="image-caption">{fullscreenImage.name}</p>
        </div>
      )}
    </div>
  );
};

export default Gallery;