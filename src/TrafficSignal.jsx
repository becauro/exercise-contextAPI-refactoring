// // src/TrafficSignal.jsx

import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { changeSignal } from './redux/actionCreators';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import TrafficContext from './contextAPI/TrafficContextAPI.js';

class TrafficSignal extends React.Component {
  constructor() {
    super()

    this.renderSignal = this.renderSignal.bind(this);
  }


renderSignal(signalColor) {
  if (signalColor === 'red') return redSignal;
  if (signalColor === 'yellow') return yellowSignal;
  if (signalColor === 'green') return greenSignal;
  return null;
};

render() {
  // const { value } = this.context;
    return (
      <TrafficContext.Consumer>
           {value => (
             <div>
             <div className="button-container">
               <button onClick={() => value.changeSignalFunction('red')} type="button">
                 Red
               </button>
               <button onClick={() => value.changeSignalFunction('yellow')} type="button">
                 Yellow
               </button>
               <button onClick={() => value.changeSignalFunction('green')} type="button">
                 Green
               </button>
             </div>
             <img className="signal" src={this.renderSignal(value.signalColor)} alt="" />
           </div>
           )
          }
      </TrafficContext.Consumer>
    );
  }
};

// TrafficSignal.contextType = TrafficContext;
export default TrafficSignal;
