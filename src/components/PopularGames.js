import React from 'react';
import pcImage from '../images/popularpc.png';
import mobileImage from '../images/popularmobile.png';
import xboxImage from '../images/popular xbox.png';
import playstationImage from '../images/popularplaystation.png';
import './PopularGames.css'; // You may create a CSS file for styling

const PopularGames = () => {

  return (
    <div id="popular-games" className="py-5">
      <div className="container">
        <h1 className="section-heading text-center mb-5">Top Picks Across Platforms</h1>

        {/* Carousel Content */}
        <div className="row">
          {/* Segment 1: Popular Games on PC */}
          <div className="col-md-6">
            <div className="segment p-3">
              <h2 className="segment-title">Popular Games played on PC</h2>
            </div>
          </div>
          <div className="col-md-6">
            <img src={pcImage} alt="PC Game" className="segment-image img-fluid shadow" />
          </div>
        </div>


        {/* Segment 2: Popular Games on Mobile */}
        <div className="row">
          <div className="col-md-6 order-md-2">
            <div className="segment p-3">
              <h2 className="segment-title">Popular Games played on Mobile</h2>

            </div>
          </div>
          <div className="col-md-6 order-md-1">
            <img src={mobileImage} alt="Mobile Game" className="segment-image img-fluid shadow" />
          </div>
        </div>


        {/* Segment 3: Popular Games on Xbox */}
        <div className="row">
          <div className="col-md-6">
            <div className="segment p-3">
              <h2 className="segment-title">Popular Games played on Xbox</h2>
            </div>
          </div>
          <div className="col-md-6">
            <img src={xboxImage} alt="Xbox Game" className="segment-image img-fluid shadow" />
          </div>
        </div>

        {/* Segment 4: Popular Games on PlayStation */}
        <div className="row">
          <div className="col-md-6 order-md-2">
            <div className="segment p-3">
              <h2 className="segment-title">Popular Games played on PlayStation</h2>
            </div>
          </div>
          <div className="col-md-6 order-md-1">
            <img src={playstationImage} alt="PlayStation Game" className="segment-image img-fluid shadow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularGames;
