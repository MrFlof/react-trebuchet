// This file bootstraps the app with the boilerplate necessary
// to support hot reloading in Redux
import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import FuelSavingsApp from '../components/FuelSavingsApp';
import * as FuelSavingsActions from '../actions/fuelSavingsActions';

class App extends React.Component {
  render() {
    const { fuelSavingsAppState, actions } = this.props;

    return (
      <div>
        <FuelSavingsApp fuelSavingsAppState={fuelSavingsAppState} actions={actions} />
        <hr />
        <Link to="/">Root</Link> - <Link to="/foo">Foo</Link> - <Link to="/bar">Bar</Link> - <Link to="/planetpluto">Planet Pluto</Link>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  fuelSavingsAppState: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    fuelSavingsAppState: state.fuelSavingsAppState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(FuelSavingsActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
