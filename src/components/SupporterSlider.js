import React from 'react';
import './SupportSlider.css';
import supportimage1 from "../images/Tencent.webp"; // Replace with your image paths
import supportimage2 from '../images/sony.webp';
import supportimage3 from '../images/Microsoft.webp'; // Example images, change as needed
import supportimage4 from '../images/apple.webp';
import supportimage5 from '../images/NetEase_Games5.webp';
import supportimage6 from '../images/Google logo6.webp';
import supportimage7 from '../images/EAlogo7.webp';
import supportimage8 from '../images/Nintendo8.jpeg';
import supportimage9 from '../images/Take_Two_interactive9.webp';
import supportimage10 from '../images/nexon10.webp';

const SupporterSlider = () => {
  const images = [
    supportimage1, 
    supportimage2, 
    supportimage3, 
    supportimage4, 
    supportimage5,
    supportimage6,
    supportimage7,
    supportimage8,
    supportimage9,
    supportimage10,
  ]; // Array of images

  return (
    <div className="supporter-slider" style={{ backgroundColor: '#f9f9f9', height: 'auto' }}>
      <div className="logos">
        <h2 className="text-center mb-4" style={{ paddingBottom: '1%' }}>
          Top Public Gaming Companies by Revenues
        </h2>
        <div className="logos-slide">
          {images.concat(images).map((img, index) => ( // Double the images to create a seamless loop
            <div key={index} className="logo-item">
              <img src={img} alt={`Logo ${index + 1}`} className="support-image" />
              <p className="logo-rank"> {index % 10 + 1}</p> {/* Display rank below the image */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupporterSlider;
