import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
