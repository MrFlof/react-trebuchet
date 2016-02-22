import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

import { simpleCounterIncrease, simpleCounterDecrease } from '../actions/simpleCounterActions';


class SimpleCounterPage extends React.Component {
  render() {
    const { simpleCounterAppState, simpleCounterIncrease, simpleCounterDecrease } = this.props;

    return (
      <div>
        <h1>The Simple Counter Page</h1>
        <p>You can see, increment, and decrement the simpleCounter value in the redux store.</p>
        <p>Value: {simpleCounterAppState.simpleCounter}</p>
        <button onClick={() => simpleCounterIncrease(1)}>Increase</button>
        <button onClick={() => simpleCounterDecrease(1)}>Decrease</button>
      </div>
    );
  }
}

SimpleCounterPage.propTypes = {
  simpleCounterAppState: PropTypes.object.isRequired,
  simpleCounterIncrease: PropTypes.func.isRequired,
  simpleCounterDecrease: PropTypes.func.isRequired
};

export default connect(
  state => ({ simpleCounterAppState: state.simpleCounterAppState }),
  { simpleCounterIncrease, simpleCounterDecrease }
)(SimpleCounterPage);

