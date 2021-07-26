import React from 'react';
import PropTypes from 'prop-types';
import TrafficContext from '../contextAPI/TrafficContextAPI.js';

class TrafficProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        signalColor: 'red',
    }
    this.changeSignal = this.changeSignal.bind(this);
  }

  changeSignal(color) {
    this.setState({
        signalColor: color,
    });
    // console.log(color);
  }

  render() {
    const signalContext = {
    	signalColor: this.state.signalColor,
      changeSignalFunction: this.changeSignal,
    }
    const { children } = this.props;
    return (
      <TrafficContext.Provider value={signalContext}>
        { children }
      </TrafficContext.Provider>
    );
  }
}
TrafficProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default TrafficProvider;