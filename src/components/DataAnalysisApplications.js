import React from 'react';
import Image1 from '../images/gamedev.webp';
import Image2 from '../images/gamingcompanies.webp';
import Image3 from '../images/hardware.webp';
import Image4 from '../images/softwarecompanies.jpeg';
import Image5 from '../images/business analysts.jpeg';

const DataAnalysisApplications = () => (
  <div
    className="container-fluid py-5"
    style={{
      background: '#fff', // Light gray background for contrast
      color: '#333', // Dark text color
      textAlign: 'center', // Centered content
    }}
  >
    <h2
      style={{
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold',
        fontSize: '2.5rem',
      }}
    >
      What Will We Use Out of This Data Analysis?
    </h2>
    <p
      style={{
        fontFamily: 'Arial, sans-serif',
        fontSize: '1.1rem',
        padding: '0 40px', // Small padding for readability
      }}
    >
      Data analysis in the gaming industry has a far-reaching impact.
    </p>
    <div className="row justify-content-center"> {/* Row to center the images */}
      {/* Each image is in a column with equal size */}
      <div className="col-md-2">
        <div style={{ height: '200px' }}> {/* Container with fixed height */}
          <img
            src={Image1}
            alt="Game Developers"
            className="img-fluid"
            style={{
              maxWidth: '100%', 
              height: '80%', // Image takes full height of the container
              objectFit: 'cover', // Maintain aspect ratio and cover the container
              boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)', 
              marginBottom: '25px',
            }}
          />
        </div>
        <p>Game Developers</p>
      </div>
      <div className="col-md-2">
        <div style={{ height: '200px' }}>
          <img
            src={Image2}
            alt="Game Streamers"
            className="img-fluid"
            style={{
              maxWidth: '100%',
              height: '80%',
              objectFit: 'cover',
              boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)',
              marginBottom: '25px',
            }}
          />
        </div>
        <p>Game Streamers</p>
      </div>
      <div className="col-md-2">
        <div style={{ height: '200px' }}>
          <img
            src={Image3}
            alt="Hardware Companies"
            className="img-fluid"
            style={{
              maxWidth: '100%',
              height: '80%',
              objectFit: 'cover',
              boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)',
              marginBottom: '25px',
            }}
          />
        </div>
        <p>Hardware Companies</p>
      </div>
      <div className="col-md-2">
        <div style={{ height: '200px' }}>
          <img
            src={Image4}
            alt="Software Companies"
            className="img-fluid"
            style={{
              maxWidth: '100%',
              height: '80%',
              objectFit: 'cover',
              boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)',
              marginBottom: '25px',
            }}
          />
        </div>
        <p>Software Companies</p>
      </div>
      <div className="col-md-2">
        <div style={{ height: '200px' }}>
          <img
            src={Image5}
            alt="Business Analysts"
            className="img-fluid"
            style={{
              maxWidth: '100%',
              height: '80%',
              objectFit: 'cover',
              boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)',
              marginBottom: '25px',
            }}
          />
        </div>
        <p>Business Analysts & Students</p>
      </div>
    </div>
  </div>
);

export default DataAnalysisApplications;
