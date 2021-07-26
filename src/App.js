import React from 'react';
import TrafficSignal from './TrafficSignal.jsx';
import './App.css';
import Cars from './Cars';
// import CarProvider from './providers/CarProvider.js';
import TrafficProvider from './providers/TrafficProvider.js';

// Poderia ser colocado o CarProvider.js encapsulando <Cars />.
function App() {
  return (
    <div className="container">
      <Cars />
      <TrafficProvider>
        <TrafficSignal />
      </TrafficProvider>

    </div>
  );
}

export default App;
