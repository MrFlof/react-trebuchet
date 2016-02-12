import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as BottlesActions from '../actions/bottlesActions';


class CollectionsPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoadCollections = this.handleLoadCollections.bind(this);
  }

  render() {
    const { collections, actions } = this.props;
    return (
      <div>
        <h1>The Collections Page</h1>
        <p>Work with data via Bottles API</p>
        <input type="button" value="fetchCollections alles" onClick={this.handleLoadCollections} />
        <pre>{JSON.stringify(collections,2)}</pre>{/*<CollectionsList bottles={collections} actions={actions}/>*/}
      </div>
    );
  }

  handleLoadCollections(e) {
    //e.preventDefault();
    this.props.actions.fetchCollections();
  }
}

CollectionsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  collections: PropTypes.array.isRequired
};

// A container component connects (specific state and actions) to Redux using the code below. Learn more at
// https://github.com/rackt/react-redux/blob/4fca3cbc736b7462de65f589d3b0fdab0cb7a495/docs/quick-start.md

// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
  return {
    collections: state.entities.collections
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
)(CollectionsPage);

