import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { CALL_API } from 'redux-api-middleware';

import * as BottlesActions from '../actions/bottlesActions';
import BottlesList from '../components/BottlesList';


class BottlesPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoadCollection = this.handleLoadCollection.bind(this);
  }

  render() {
    const { bottles, actions } = this.props;
    return (
      <div>
        <h1>The Bottles Page</h1>
        <p>Work with data via Bottles API</p>
        <BottlesList bottles={bottles} actions={actions}/>
        <input type="button" value="Test fetchCollection 1" onClick={this.handleLoadCollection} />
      </div>
    );
  }

  handleLoadCollection(e) {
    //e.preventDefault();
    this.onFetchCollection(1);
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
    actions: bindActionCreators(BottlesActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BottlesPage);

