import React from 'react';
import CarContext from '../contextAPI/CarContextAPI';

class CarProvider extends React.Component {
  constructor() {
    super()
    this.state = {
        red: false,
        blue: false,
        yellow: false,
    }
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(color, side) {
    this.setState({
      [color]: side,
    });
  }

  render() {
    const carContext = {
      carsState: this.state,
      moveCarFunction: this.moveCar,
    }
    const { children } = this.props;
    return (
      <CarContext.Provider value={ carContext }>
        { children }
      </CarContext.Provider>
    );
  }
}


export default CarProvider;