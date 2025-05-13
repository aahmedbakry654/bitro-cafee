import React, { useState } from 'react';
import Hero from './components/Hero';

import Footer from './components/Footer';
import FullscreenImage from './components/FullscreenImage';




import './App.css';

const App = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);


  const handleClose = () => {
    setFullscreenImage(null);
  };

  return (
    <div className="App">
      {/* اسمك في العنوان */}
      <h2 style={{ textAlign: 'center', margin: '20px 0', color: '#333' }}>
      
      </h2>

      {/* المكونات الرئيسية */}
      <Hero />
    

  
      <Footer />

      {/* عرض الصورة لما تتفتح */}
      {fullscreenImage && (
        <FullscreenImage src={fullscreenImage} onClose={handleClose} />
      )}
    </div>
  );
};

export default App;