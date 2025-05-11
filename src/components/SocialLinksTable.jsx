import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaTelegramPlane, FaWhatsapp, FaMapMarkerAlt} from "react-icons/fa";
import './SocialLinksTable.css';

const SocialLinksTable = () => {
  return (
    <div className="social-table">
      <a href="https://www.facebook.com/share/1ATuWNYTvC/" className="facebook" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
      <a href="https://www.instagram.com/bitro58/" className="instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      <a href="https://www.tiktok.com/@bitro89" className="tiktok" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
      <a href="https://t.me/+201017021001" className="telegram" target="_blank" rel="noopener noreferrer"><FaTelegramPlane /></a>
      <a href="https://wa.me/201017021001" className="whatsapp" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
      <a href="https://www.google.com/maps/place/BITRO+CAF%C3%88%D8%8C+%D8%A8%D9%84%D8%A8%D9%8A%D8%B3%D8%8C+%D9%85%D8%B1%D9%83%D8%B2+%D8%A8%D9%84%D8%A8%D9%8A%D8%B3%D8%8C+%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9+%D8%A7%D9%84%D8%B4%D8%B1%D9%82%D9%8A%D8%A9+12211%E2%80%AD/@30.4146996,31.5706089,15z/data=!4m6!3m5!1s0x14f7ff4ed21906df:0xbaded96ff62ab3ec!8m2!3d30.4146996!4d31.5706089!16s%2Fg%2F11wbtwpwq0?g_ep=Eg1tbF8yMDI1MDUwNV8xIJvbDyoASAJQAQ%3D%3D" className="icon location" title="Location">
        <FaMapMarkerAlt/></a>
    </div>
  );
};

export default SocialLinksTable;