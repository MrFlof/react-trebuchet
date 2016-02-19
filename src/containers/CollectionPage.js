import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions/';


class BottlesPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoadCollection1 = this.handleLoadCollection1.bind(this);
    this.handleLoadCollection2 = this.handleLoadCollection2.bind(this);
    this.handleLoadCollection3 = this.handleLoadCollection3.bind(this);
  }

  render() {
    const { bottles, actions } = this.props;
    return (
      <div>
        <h1>The Collection Page</h1>
        <p>Work with data via Bottles API</p>
        <input type="button" value="Test fetchCollection 1" onClick={this.handleLoadCollection1} />
        <input type="button" value="Test fetchCollection 2" onClick={this.handleLoadCollection2} />
        <input type="button" value="Test fetchCollection 3" onClick={this.handleLoadCollection3} />
        <pre>{JSON.stringify(bottles,2)}</pre>
      </div>
    );
  }

  handleLoadCollection1(e) {
    this.props.actions.ViewCollection(1);
  }
  handleLoadCollection2(e) {
    this.props.actions.ViewCollection(2);
  }
  handleLoadCollection3(e) {
    this.props.actions.ViewCollection(3);
  }
}

BottlesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  bottles: PropTypes.array.isRequired
};

// A container component connects (specific state and actions) to Redux using the code below. Learn more at
// https://github.com/rackt/react-redux/blob/4fca3cbc736b7462de65f589d3b0fdab0cb7a495/docs/quick-start.md

// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(stateownProps) {
  return {
    // wip..
    bottles: ownProps.collection.children.map(id => state.bottles[id])
  };
}

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BottlesPage);

