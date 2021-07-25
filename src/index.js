import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Cars from './Cars'
import CarRace from './components/CarRace';

ReactDOM.render(
  <React.StrictMode>
    <CarRace>
      <App />
      {/* <Cars /> */}
    </CarRace>
  </React.StrictMode>,
  document.getElementById('root'),
);
