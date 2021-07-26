// src/Cars.jsx

// import PropTypes from 'prop-types';
import React from 'react';
// import { connect } from 'react-redux';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
// import { moveCar } from './redux/actionCreators';
import CarContext from './contextAPI/CarContextAPI.js';

class Cars extends React.Component {
  render () {
    const { carsState: { red, blue, yellow }, moveCarFunction } = this.context;
    // console.log('Context');
    // console.log(this.context);

    return (
      <div>
        <div>
          <img
            className={red ? 'car-right' : 'car-left'}
            src={carRed}
            alt="red car"
          />
          <button
            onClick={() => moveCarFunction('red', !red)}
            type="button"
          >
            Move
          </button>
        </div>
        <div>
          <img
            className={blue ? 'car-right' : 'car-left'}
            src={carBlue}
            alt="blue car"
          />
          <button
            onClick={() => moveCarFunction('blue', !blue)}
            type="button"
          >
            Move
          </button>
        </div>
        <div>
          <img
            className={yellow ? 'car-right' : 'car-left'}
            src={carYellow}
            alt="yellow car"
          />
          <button
            onClick={() => moveCarFunction('yellow', !yellow)}
            type="button"
          >
            Move
          </button>
        </div>
      </div>
    );
  }
}

// Cars.propTypes = {
//   moveCar: PropTypes.func.isRequired,
//   blueCar: PropTypes.bool.isRequired,
//   redCar: PropTypes.bool.isRequired,
//   yellowCar: PropTypes.bool.isRequired,
// };

// const mapStateToProps = (state) => ({
//   redCar: state.carReducer.cars.red,
//   blueCar: state.carReducer.cars.blue,
//   yellowCar: state.carReducer.cars.yellow});

// const mapDispatchToProps = { moveCar };

Cars.contextType = CarContext;
export default Cars;