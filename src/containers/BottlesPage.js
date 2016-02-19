import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as bottledApiActions from '../actions/bottledApiActions';
import BottlesList from '../components/BottlesList';


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
        <h1>The Bottles Page</h1>
        <p>Work with data via Bottles API</p>
        <BottlesList bottles={bottles} actions={actions}/>
        <input type="button" value="Test fetchCollection 1" onClick={this.handleLoadCollection1} />
        <input type="button" value="Test fetchCollection 2" onClick={this.handleLoadCollection2} />
        <input type="button" value="Test fetchCollection 3" onClick={this.handleLoadCollection3} />
      </div>
    );
  }

  handleLoadCollection1(e) {
    //e.preventDefault();
    this.onFetchCollection(1);
  }
  handleLoadCollection2(e) {
    //e.preventDefault();
    this.onFetchCollection(2);
  }
  handleLoadCollection3(e) {
    //e.preventDefault();
    this.onFetchCollection(3);
  }

  onFetchCollection(collectionid) {
    this.props.actions.fetchCollection(collectionid);
  }
}

BottlesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  bottles: PropTypes.array.isRequired
};

// A container component connects (specific state and actions) to Redux using the code below. Learn more at
// https://github.com/rackt/react-redux/blob/4fca3cbc736b7462de65f589d3b0fdab0cb7a495/docs/quick-start.md

// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
  return {
    bottles: state.bottlesAppState.items
  };
}

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(bottledApiActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BottlesPage);

