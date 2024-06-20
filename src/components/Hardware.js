import React from 'react';
import SoftwareImage from '../images/bestsellingconsoles.png'; // Image for software analysis
import Table1 from '../images/Screenshot 2024-05-11 at 12.29.47 PM.png';

const Hardware = () => {

  return (
    <div
      className="container-fluid py-0"
      style={{
        background: '#fff', // Light gray background for contrast
        color: '#333', // Dark text color
        textAlign: 'center', // Centered content
      }}
    >
      <div>
        <h2
          style={{
            fontFamily: 'Arial, sans-serif',
            fontWeight: 'bold',
            fontSize: '2rem',
            marginBottom: '20px',
          }}
        >
          3.Impact on Hardware and Software Companies
        </h2>
      </div>

      <div className="row"> {/* Row to display content side by side */}
        {/* Image on the left */}
        <div className="col-md-6">
          <img
            src={SoftwareImage}
            alt="Hardware Companies"
            className="img-fluid"
            style={{
              maxWidth: '85%', 
              height: '85%',
              marginTop: '10px',
            }}
          />
        </div>
        
        {/* Table on the right */}
        <div className="col-md-6">
        <h3 style={{ marginTop: '140px' }}>Video game spending's by year</h3>

        <img
            src={Table1}
            alt="Hardware Companies"
            className="img-fluid"
            style={{
              maxWidth: 'auto', 
              height: 'auto',
              marginRight: '10rem',
            }}
          />
        </div>
        
      </div>
    </div>
  );
};

export default Hardware;
