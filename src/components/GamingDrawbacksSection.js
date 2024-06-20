import React from 'react';
import DrawbackImage from '../images/addictedimage.jpeg';
import ImageOne from '../images/poorsleep.jpeg';
import ImageTwo from '../images/poorhealth.jpeg';
import ImageThree from '../images/exhaustion.jpeg';
import ImageFour from '../images/aggression.jpeg';
import ImageFive from '../images/obesity.jpeg'; // Image for drawbacks
import LeftImage from '../images/gambling image.avif'; // Left image
import RightImage from '../images/online gambling data.png'; // Right image
import DataBreach from '../images/databreach.jpeg';
import gameSpendingImage from '../images/gamespendingiamhe.webp';
import Phobia1 from '../images/GAD.png';
import Phobia2 from '../images/SOCIAL PHOBIA.png';
import Phobia3 from '../images/SATISFACTION WITH LIVE SCORE.png';

const GamingDrawbacksSection = () => (
  <div
    className="container-fluid py-5"
    style={{
      background: '#f9f9f9', // Light gray background for contrast
      color: '#333', // Dark text color
      textAlign: 'center', // Centered content
    }}
  >
    <h2
      style={{
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold',
        fontSize: '2.5rem',
        marginBottom: '40px',
      }}
    >
      All Positives? Absolutely Not !!!
    </h2>
    <div className="row justify-content-center"> {/* Row to center the images */}
      {/* Drawbacks Image */}
      <div className="col-md-6">
        <img
          src={DrawbackImage}
          alt="Gaming Drawbacks"
          className="img-fluid"
          style={{
            maxWidth: '80%', 
            height: '80%',
            boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)', 
            marginBottom: '20px',
          }}
        />
      </div>
    </div>
    {/* Disadvantages of Gaming */}
    <div
      className="container"
      style={{
        border: '2px solid #333', // Black border
        borderRadius: '10px', // Rounded corners
        padding: '20px', // Padding inside the box
        marginTop: '20px', // Margin from the image
      }}
    >
      <h3 style={{ marginBottom: '20px' }}>Drawbacks of Gaming Addiction</h3>
      <div className="row justify-content-center">
        <div className="col-md-2" style={{ padding: '10px' }}>
          <img
            src={ImageOne}
            alt="Poor sleep hygiene"
            className="img-fluid"
            style={{ maxWidth: '93%' }}
          />
          <p>Poor sleep hygiene</p>
        </div>
        <div className="col-md-2" style={{ padding: '10px' }}>
          <img
            src={ImageTwo}
            alt="Physical health atrophy"
            className="img-fluid"
            style={{ maxWidth: '100%' }}
          />
          <p>Physical health atrophy</p>
        </div>
        <div className="col-md-2" style={{ padding: '10px' }}>
          <img
            src={ImageThree}
            alt="Exhaustion"
            className="img-fluid"
            style={{ maxWidth: '100%' }}
          />
          <p>Exhaustion</p>
        </div>
        <div className="col-md-2" style={{ padding: '10px' }}>
          <img
            src={ImageFour}
            alt="Aggression"
            className="img-fluid"
            style={{ maxWidth: '100%' }}
          />
          <p>Aggression</p>
        </div>
        <div className="col-md-2" style={{ padding: '10px' }}>
          <img
            src={ImageFive}
            alt="Obesity and heart problems"
            className="img-fluid"
            style={{ maxWidth: '100%' }}
          />
          <p>Obesity and heart problems</p>
        </div>
      </div>
    </div>
    {/* New section */}
    <h3 style={{ marginBottom: '40px', marginTop: '60px' }}>Exploring Global Online Gambling: Market Share Breakdown by Type</h3>
    <div className="row justify-content-center mt-5">
      <div className="col-md-6">
        <img
          src={LeftImage}
          alt="Left Image"
          className="img-fluid"
          style={{ maxWidth: '60%', marginTop: '100px', boxShadow: '0px 10px 20px rgba(0.2, 0.1, 0.1, 0.3)' }}
        />
      </div>
      <div className="col-md-6">
        <img
          src={RightImage}
          alt="Right Image"
          className="img-fluid"
          style={{ maxWidth: '60%', marginLeft: '20px' }}
        />
      </div>
      <hr style={{ border: '1px solid black', width: '80%', margin: '0 auto', marginTop: '10px', marginBottom: '20px' }} />
      <div className="col-md-12">
        <div>
          <h3 style={{ textAlign: 'center', marginBottom: '30px', marginTop: '50px', color: 'black', fontSize: '2rem' }}>The Pitfalls of In-Game Spending</h3>
          <img src={gameSpendingImage} alt="In-Game Spending" style={{ maxWidth: '30%', maxHeight: '5%', display: 'block', margin: '0 auto 20px auto' }} />
          <p style={{ textAlign: 'left', fontSize: '1.2rem', color: 'black', lineHeight: '1.6', padding: '0 20px', marginBottom: '20px', maxWidth: '60%', marginLeft: '20%', marginRight: '20%' }}>
            Over 40% of Indian gamers are spending an average of ₹230 per month on mobile games. While in-game purchases can enhance the gaming experience, excessive spending on virtual items like game skins and characters can lead to financial strain and addiction issues.
          </p>
        </div>
      </div>
      <hr style={{ border: '1px solid black', width: '80%', margin: '0 auto', marginBottom: '20px' }} />
      <div className="col-md-12">
        <div>
          <h3 style={{ textAlign: 'center', marginBottom: '30px', marginTop: '50px' }}>Security Issues in Online Gaming</h3>
          <img src={DataBreach} alt="Online Gaming Security" style={{ maxWidth: '30%', display: 'block', margin: '0 auto 20px auto' }} />
          <p style={{ textAlign: 'left', fontSize: '1.2rem', color: 'black', lineHeight: '1.6', padding: '0 20px', marginBottom: '20px', maxWidth: '60%', marginLeft: '20%', marginRight: '20%' }}>            Online gaming platforms can pose significant security risks as they may leak personal information. Players should be cautious about sharing sensitive details and ensure they are using secure platforms.
          </p>
        </div>
      </div>
      <hr style={{ border: '1px solid black', width: '80%', margin: '0 auto', marginBottom: '20px' }} />
      <div className="col-md-12">
        <div>
          <h3 style={{ textAlign: 'center', marginBottom: '30px', marginTop: '50px', color: 'black', fontSize: '2rem' }}>The Impact Of Gaming On Mental Health</h3>
          <img src={ImageOne} alt="Impact of Gaming on Mental Health" style={{ maxWidth: '30%', maxHeight: '5%', display: 'block', margin: '0 auto 20px auto' }} />
          <p style={{ textAlign: 'left', fontSize: '1.2rem', color: 'black', lineHeight: '1.6', padding: '0 20px', marginBottom: '20px', maxWidth: '60%', marginLeft: '20%', marginRight: '20%' }}>
            Excessive gaming can have detrimental effects on mental health, leading to issues such as addiction, social isolation, and decreased productivity. It's essential for gamers to maintain a balance between gaming and other activities to preserve their mental well-being.
          </p>
        </div>
      </div>
    </div>
    {/* New section */}
    <div>
      <h3 style={{ marginBottom: '40px', marginTop: '60px' }}>Impact of Gaming on Mental Well-being</h3>
      <div className="row justify-content-center mt-5">
        {/* First column */}
        <div className="col-md-4">
          
          <img src={Phobia1} alt="Phobia 1" className="img-fluid" />
          <h4 style={{paddingTop: '15px'}}>Gaming & Anxiety</h4>
        </div>
        {/* Second column */}
        <div className="col-md-4">
          
          <img src={Phobia2} alt="Something 2" className="img-fluid" />
          <h4 style={{paddingTop: '15px'}}>Gaming & Social Phobia</h4>
        </div>
        {/* Third column */}
        <div className="col-md-4">
          
          <img src={Phobia3} alt="Disease 3" className="img-fluid" />
          <h4 style={{paddingTop: '15px'}}>Gaming & Life Satisfaction</h4>
        </div>
      </div>
    </div>
  </div>
);

export default GamingDrawbacksSection;

