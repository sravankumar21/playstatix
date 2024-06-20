import React from 'react';
import GameDevImage from '../images/switzerland.webp'; // Image for game developers
import CountryImage from '../images/salaryimage.png'; // Image for highest salary paying country
import USAImage from '../images/avgsalaryusa.png'; // Image for average salaries in the USA

const GameDevelopersSection = () => (
    <div
      className="container-fluid py-2"
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
          fontSize: '2rem',
          marginBottom: '40px',
        }}
      >
        1.Game Developers
      </h2>
      <div className="row"> {/* Row to center the images */}
        {/* Game Developers Image */}
        <div className="col-md-6">
        <h4>Salaries paid by each country for Game Developers</h4>
          <img
            src={CountryImage}
            alt="Game Developers"
            className="img-fluid"
            style={{
              maxWidth: '80%', 
              height: '80%',
              boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)', 
              marginBottom: '1px',
            }}
          />
        </div>
        {/* Highest Salary Paying Country Image */}
        <div className="col-md-6">
        <h4 style={{marginBottom:'24px'}}>Highest Salary Paying Country for Game Developers</h4>
        <h5 style={{color: 'red', fontFamily: 'cursive' , fontSize: '2rem'}}> Switzerland with 130306 Dollar's</h5>
          <img
            src={GameDevImage}
            alt="Highest Salary Paying Country"
            className="img-fluid"
            style={{
              maxWidth: '50%', 
              height: '50%',
              boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)', 
              marginTop: '40px',
              marginBottom: '1px'
            }}
          />
          
        </div>
      {/* Another Image */}
      <p>Average Salaries in the USA for Game Developers</p>
      <p>Source: pingle.com</p>
      <div className="col-md-12">
        <img
          src={USAImage}
          alt="Avg Paying Country"
          className="img-fluid"
          style={{
            maxWidth: '60%', 
            height: '60%',
            alignItems: 'center',
            boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)', 
            marginTop: '1px',
          }}
        />
       
      </div>
      
    </div>
  </div>
  
);

export default GameDevelopersSection;
