import React from 'react';
import Navbar from '../components/Navbar'; // Import the Navbar component
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeImage from '../images/2426480.jpg';
import GamingImage from '../images/gaming.avif';
import RevenueImage from '../images/Gaming Industry Revenue by Year.png'
import ShinyAppEmbed from '../components/ShinyAppEmbed';
import ShinyApp2 from '../components/ShinyApp2';
import DataAnalysisApplications from '../components/DataAnalysisApplications';
import GameDevelopersSection from '../components/GameDevelopersSection';
import GameStreamersSection from '../components/GameStremers';
import Hardware from '../components/Hardware';
import BusinessAnalystsAndStudents from '../components/BusinessAnalystsAndStudents';
import GamingDrawbacksSection from '../components/GamingDrawbacksSection';
import DeepAnalysisSection from '../components/DeepAnalysisSection'
import SafetyTipsCarousel from '../components/SafetyTipsCarousel';
import PopularGames from '../components/PopularGames';

import SupporterSlider from '../components/SupporterSlider';
import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* First section */}
      <div
        className="container-fluid p-0"
        style={{
          background: '#000000', // navy blue background color
          color: '#ffffff', // white text color
          minHeight: '91.5vh', // Set section height
        }}
      >
        <div className="row align-items-center"> {/* Vertically align content */}
          <div className="col-md-12 p-0"> {/* Remove padding to remove gaps */}
            <img
              src={HomeImage}
              alt="Lock"
              className="img-fluid blend-mode"
              style={{
                width: '100%',
                height: 'auto',
                margin: '0',
                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)',
              }}
            /> {/* Full width image with shadow */}
          </div>
          <div className="col-md-6 offset-md-3 text-center p-5 mt-3"> {/* Centered text */}
            <h1
              className="display-4 mb-4"
              style={{ fontFamily: 'Perfect Dark BRK', fontSize: '2.5rem' }}
            >
              PLAY | ANALYZE | INNOVATE
            </h1>
            <p
              className="lead"
              style={{ fontFamily: 'Perfect Dark BRK', fontSize: '1.2rem' }}
            >
              Data Analytics for Gaming: A Walk-through
            </p>
          </div>
        </div>
      </div>

      {/* Second section - Key Advantages */}
      <div className="container-fluid py-5" style={{ background: '#f0f0f0', color: '#333' }}>
        <div className="row align-items-center">
          <div className="col-md-4">
            <img src={GamingImage} alt="Gaming" className="img-fluid" style={{ maxWidth: '100%', height: 'auto', marginLeft: '35px' }} />
          </div>
          <div className="col-md-8">
            <div className="p-5" style={{ paddingLeft: '25px' }}> {/* Adjusted padding left */}
              <h2
                className="mb-4"
                style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '2rem' }}
              >
                Key Gaming Industry Statistics 2023
              </h2>
              <p className="lead">In 2023, gaming industry revenue is projected at $365.6 billion globally.</p>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <strong>The gender ratio of gamers in the US is fairly equal with 48% women and 52% men approximately.</strong>
                </li>
                <li className="mb-3">
                  The video game industry worth is estimated at $214.2 billion.
                </li>
                <li className="mb-3">
                  <strong>Video game content revenue amounted to $47.48 billion in 2022, a 6.6% decrease from $50.83 billion of revenue in 2021.</strong>
                </li>
                <li className="mb-3">
                  China generated the most gaming revenue, accounting for $45.8 billion in 2022.
                </li>
                <li className="mb-3">
                  <strong>The gaming industry generates more revenue than filmed entertainment and music industry combined.</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      {/* Third section - Leading the Entertainment Revolution */}
      <div className="container-fluid py-5" style={{ background: '#ffffff', color: '#333' }}>
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '2rem', paddingLeft: '8%' }}>Leading the Entertainment Revolution</h2>
            <div className="p-5">
              <ul className="list-unstyled">
                <li className="mb-3">
                  <strong>Innovative Technologies:</strong> Augmented reality, virtual reality, and cloud gaming are changing the landscape.
                </li>
                <li className="mb-3">
                  <strong>Social Impact:</strong> Games are increasingly used to promote social causes and raise awareness.
                </li>
                <li className="mb-3">
                  <strong>Community Building:</strong> Online gaming has fostered a sense of community among players across the globe.
                </li>
                <li className="mb-3">
                  <strong>eSports Growth:</strong> Competitive gaming has become a multibillion-dollar industry.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <ShinyApp2 />
          </div>
        </div>
      </div>

      <hr style={{ border: '1px solid black', width: '80%', margin: '0 auto', marginBottom: '20px' }} />

      {/* Fourth section - Gaming Industry Revenue by Year */}
      <div className="container-fluid py-5" style={{ background: '#ffffff', color: '#333', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '2.5rem' }}>Gaming Industry Revenue by Year</h2>
        <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.1rem', padding: '0' }}>The video game market is constantly expanding and shows no signs of slowing down.</p>
        <div>
          <img src={RevenueImage} alt="Gaming Industry Revenue Graph" className="img-fluid" style={{ maxWidth: '90%', height: '500px', margin: '20px auto' }} />
        </div>
      </div>

      <hr style={{ border: '1px solid black', width: '80%', margin: '0 auto', marginBottom: '20px' }} />

      {/* Fifth section - Gaming Industry Overview */}
      <div className="container-fluid py-5" style={{ background: '#fff', color: '#333', paddingLeft: '25px' }}>
        <h2 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '2.5rem', textAlign: 'center' }}>Gaming Industry Overview</h2>
        <div className="row justify-content-center">
          <div className="col-md-6" style={{ textAlign: 'center' }}>
            <h4 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', paddingBottom: '20px' }}>Most Popular Game Genres</h4>
          </div>
        </div>
        <div className="row" style={{ justifyContent: 'center' }}>
          {['Adventure', 'Action', 'Battle Royale', 'Racing', 'Sports Games', 'Strategy', 'Role-Playing', 'Action-Adventure', 'Simulation', 'Fighting'].map(
            (genre, index) => (
              <div className="col-md-2" key={index}>
                <ul>
                  <li>{genre}</li>
                </ul>
              </div>
            )
          )}
          <ShinyAppEmbed />
        </div>
      </div>

      <hr style={{ border: '1px solid black', width: '80%', margin: '0 auto', marginBottom: '20px' }} />

      <DeepAnalysisSection />

      <hr style={{ border: '1px solid black', width: '80%', margin: '0 auto', marginBottom: '20px' }} />

      {/* Sixth section - Popular Games */}
      <div><PopularGames /></div>

      <hr style={{ border: '1px solid black', width: '80%', margin: '0 auto', marginBottom: '20px' }} />

      {/* Seventh section - Data Analysis Applications */}
      <DataAnalysisApplications />


      < GameDevelopersSection />


      <GameStreamersSection />



      <Hardware />


      <div><SupporterSlider /></div>


      <BusinessAnalystsAndStudents />


      <GamingDrawbacksSection />

      <SafetyTipsCarousel />


      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homepage;
