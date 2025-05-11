import React from 'react';
import SocialLinksTable from './SocialLinksTable'; // استيراد الجدول بدل ما نعيده
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <SocialLinksTable /> {/* هنا هنعرض اللينكات الجاهزة */}

     

<div className="footer-address">

      Bitro

</div>

<div className="footer-address">

        Restaurand and Cafe

</div>

<div className="footer-address">

Belbeis, Bahr , Hy Al-Zohour 

</div>
      <div className="made-by">
    
        By_Ahmed Bakry
      </div>
    </div>
  );
};

export default Footer; 