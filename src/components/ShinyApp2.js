import React from 'react';
import Graph1 from '../images/areyouentertained.png';
// React component to display a graph image
const RevenueGraph = () => {

  return (
    <div style={{ textAlign: 'end' }}>
      <img src={Graph1} alt="Global Revenue in 2021" width="90%" />
    </div>
  );
};

export default RevenueGraph;
