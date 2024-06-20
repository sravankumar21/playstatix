import React from 'react';
import GameStreamersImage from '../images/gamestremers.png'; // Image for game streamers
import StreamersCountryImage from '../images/Ninja-Streamign-Twitch.avif'; // Image for highest salary paying country for streamers
import GlobalEsportsImage from '../images/revenuestreamimage.png'; // Image for global esports revenue streams market 2024

const GameStreamersSection = () => (
  <div className="container-fluid py-1" style={{ background: '#fff', color: '#333', textAlign: 'center', marginTop: '-5rem' }}>
    <div>
      <h2 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '2rem', marginBottom: '40px' }}>2. Game Streamers</h2>
    </div>
    <div className="row"> {/* Row to center the images */}
      {/* Game Streamers Image */}
      <div className="col-md-6">
        <h3>Most-watched video games on Twitch</h3>
        <img
          src={GameStreamersImage}
          alt="Game Streamers"
          className="img-fluid"
          style={{ maxWidth: '60%', height: '60%', boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)', marginTop: '10px', marginBottom: '10px' }}
        />
        <h6>Share of Esports Hours by Game</h6>
      </div>
      {/* Highest Salary Paying Country Image */}
      <div className="col-md-6">
        <h4 style={{ marginBottom:'24px' }}>Most-followed streamer on Twitch.</h4>
        <h5 style={{ color: 'red', fontFamily: 'cursive', fontSize: '2rem' }}> Ninja – Followers: 19 million [Known for: Fortnite]</h5>
        <img
          src={StreamersCountryImage}
          alt="Highest Salary Paying Country for Game Streamers"
          className="img-fluid"
          style={{ maxWidth: '60%', height: '40%', boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)', marginTop: '30px', marginBottom: '1px' }}
        />
      </div>
    </div>

    {/* New div for Global esports revenue streams market 2024 */}
    <div>
      <h2 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '2rem', marginBottom: '40px', marginTop: '10px' }}>Global esports revenue streams market 2024</h2>
      <img
        src={GlobalEsportsImage}
        alt="Global esports revenue streams market 2024"
        className="img-fluid"
        style={{ maxWidth: '35%', height: '35%', boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)', marginTop: '10px', marginBottom: '50px' }}
      />
    </div>
  </div>
);

export default GameStreamersSection;
