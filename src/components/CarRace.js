import React from 'react';
import Cars from '../Cars';
import App from '../App.js';
import MyContext from '../contextAPI/contextAPI';

class CarRace extends React.Component {
constructor () {
  super()
  this.state = {
    blue: false,
    red: false,
    yellow: false, 
  }
  this.moveCar = this.moveCar.bind(this);
}

  moveCar(colorCar, side) {
    this.setState ({
      [colorCar]: side,
    })
  }

  render() {
   const myContextValue = {
      // stateColors: { ...this.state },
      blueCar: this.state.blue ,
      redCar: this.state.red,
      yellowCar: this.state.yellow,
      moveCar: this.moveCar,
    }

    const { children } = this.props;
    return (
      <MyContext.Provider value={ myContextValue }>
      {/* <Cars /> */}
      {/* <App /> */}
      { children }
      </MyContext.Provider>
    );
  }
}

export default CarRace;