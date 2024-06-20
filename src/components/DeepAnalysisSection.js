import React from 'react';
import AgeImage from '../images/Screenshot 2024-05-14 at 7.09.40 PM.png'; // Image for age analysis
import GenderImage from '../images/Screenshot 2024-05-14 at 7.09.18 PM.png'; // Image for gender analysis
import WorkStatusImage from '../images/workgraph.png'; // Image for work status analysis
import WhyPlayImage from '../images/mostwordsused.png'; // Image for why people play games
import FactorsImage from '../images/factorsinfluencing.png'; // Image for factors influencing gaming
import ProgrammingLanguagesImage from '../images/prog languages.png'; // Image for programming languages
import SkillsImage from '../images/skillsimage.jpeg'; // Image for essential skills
import GlobalGamersImage from '../images/gamerimage3.09.avif';
import worldMap from '../images/worldmap.jpeg';
import PlacesGraph from '../images/demographicsplacegraph.png';

const DeepAnalysisSection = () => (
  <div
    className="container-fluid py-0"
    style={{
      background: '#fff', // Light gray background for contrast
      color: '#333', // Dark text color
      textAlign: 'center', // Centered content
    }}
  >
    <div>
      {/* Number of Global Gamers */}
      <div className="col-md-12">
      <h2 style={{ marginBottom: '30px' }}>Gamers Count Across The World</h2>
        <img
          src={GlobalGamersImage}
          alt="Number of Global Gamers"
          className="img-fluid"
          style={{ maxWidth: '20%', marginBottom: '20px' }}
        />
        <div style={{ textAlign: 'center', paddingLeft: '5vh', marginRight: '20px' ,marginTop: '25px',marginBottom:'70px'}}>
          <h2 style={{ fontSize: '4rem', color: 'red' }}>3.09 Billion</h2>
          <p>The estimated number of active gamers worldwide till date</p>
        </div>

        <div className="container-fluid py-0" style={{ background: '#fff', color: '#333', textAlign: 'center' }}>
    {/* Number of Video Game Players Worldwide by Region */}
    <div className="col-md-12">
      <h2 style={{ marginBottom: '30px' }}>Number of Video Game Players Worldwide by Region</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '70px' }}>
        <img
          src={worldMap}
          alt="Age Analysis"
          className="img-fluid"
          style={{ maxWidth: '30%', marginRight: '10px', boxShadow: '5px 5px 10px #888888' }}
        />
        <img
          src={PlacesGraph}
          alt="Gender Analysis"
          className="img-fluid"
          style={{ maxWidth: '30%', marginLeft: '85px' }}
        />
      </div>
    </div>

    <div className="row justify-content-center">
      {/* Age Analysis */}
      <div className="col-md-4">
        <h3>Age of Gamers</h3>
        <img
          src={AgeImage}
          alt="Age Analysis"
          className="img-fluid"
          style={{ maxWidth: '60%', marginBottom: '90px' }}
        />
      </div>
      {/* Gender Analysis */}
      <div className="col-md-4">
        <h3>Gender of Gamers</h3>
        <img
          src={GenderImage}
          alt="Gender Analysis"
          className="img-fluid"
          style={{ maxWidth: '60%', marginBottom: '90px' }}
        />
      </div>
      {/* Work Status Analysis */}
      <div className="col-md-4">
        <h3>Work Status of Gamers</h3>
        <img
          src={WorkStatusImage}
          alt="Work Status Analysis"
          className="img-fluid"
          style={{ maxWidth: '60%', marginBottom: '90px',transition: 'transform 0.5s', cursor: 'zoom-in' }}
          onClick={(e) => {
            e.target.style.transform = e.target.style.transform ? '' : 'scale(1.5)';
            e.target.style.cursor = e.target.style.cursor === 'zoom-in' ? 'zoom-out' : 'zoom-in';
          }}
        />
      </div>
    </div>
    <div className="row justify-content-center">
      {/* Why People Play Games */}
      <div className="col-md-6">
        <h2>Why Do People Play Games?</h2>
        <div style={{ maxWidth: '60%', marginBottom: '40px', marginLeft: '10rem', overflow: 'hidden' }}>
          <img
            src={WhyPlayImage}
            alt="Why People Play Games"
            className="img-fluid"
            style={{ width: '100%', transition: 'transform 0.5s', cursor: 'zoom-in' }}
            onClick={(e) => {
              e.target.style.transform = e.target.style.transform ? '' : 'scale(1.5)';
              e.target.style.cursor = e.target.style.cursor === 'zoom-in' ? 'zoom-out' : 'zoom-in';
            }}
          />
        </div>
      </div>
      {/* Factors Influencing Gaming */}
      <div className="col-md-6">
        <h2>Top Factors Influencing Gaming</h2>
        <img
          src={FactorsImage}
          alt="Factors Influencing Gaming"
          className="img-fluid"
          style={{ maxWidth: '60%', marginBottom: '40px' }}
        />
      </div>
    </div>
    <div className="row justify-content-center">
      {/* Best Programming Languages for Game Development */}
      <div className="col-md-12">
        <h2>Best Programming Languages for Game Development</h2>
        <img
          src={ProgrammingLanguagesImage}
          alt="Best Programming Languages for Game Development"
          className="img-fluid"
          style={{ maxWidth: '40%', marginBottom: '40px' }}
        />
      </div>
      {/* Essential Skills for Mastering Game Development */}
      <div className="col-md-12">
        <h2>Essential Skills for Mastering Game Development</h2>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ul style={{ textAlign: 'start', paddingLeft: '35vh', marginRight: '20px' ,marginTop: '25px'}}>
            <li>Programming Languages</li>
            <li>Game Engines</li>
            <li>Mathematics for Game Development</li>
            <li>3D Modeling and Animation</li>
            <li>Game Design Principles</li>
            <li>Graphics Programming</li>
            <li>AI and Pathfinding</li>
            <li>Sound Design</li>
            <li>User Interface (UI) Design</li>
            <li>Game Testing and Quality Assurance</li>
            <li>Version Control Systems</li>
            <li>Networking and Multiplayer Gameplay</li>
            <li>Project Management</li>
            <li>Portfolio Development</li>
          </ul>
          <img
            src={SkillsImage}
            alt="Essential Skills for Mastering Game Development"
            className="img-fluid"
            style={{ maxWidth: '20%', marginBottom: '40px',marginLeft: '40vh' }}
          />
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  </div>
);

export default DeepAnalysisSection;