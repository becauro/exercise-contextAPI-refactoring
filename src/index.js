import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CarProvider from './providers/CarProvider.js';
// import TrafficProvider from './providers/TrafficProvider.js';

// Poderia ser colocado o </TrafficProvider> encapsulando <App /> também.
// Mesmo que já tenha outro provider ali.
ReactDOM.render(
  <CarProvider>
    <App />
  </CarProvider>,
  document.getElementById('root'),
);
