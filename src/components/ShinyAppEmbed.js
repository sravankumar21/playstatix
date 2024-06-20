import React from 'react';

// A simple React component to embed a Shiny app
const ShinyAppEmbed = () => {
  const shinyAppUrl = 'http://127.0.0.1:3777/';  // Update with your public Shiny app URL

  return (
    <div style={{ textAlign: 'center', paddingTop:'2%' }}>
      <iframe
        src={shinyAppUrl}
        width="80%"
        height="500px"  // Adjust height as needed
        style={{ border: 'none' }}
        title="Shiny App"
      ></iframe>
    </div>
  );
};

export default ShinyAppEmbed;
