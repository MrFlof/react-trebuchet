import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as BottlesActions from '../actions/bottlesActions';


class CollectionsPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoadCollections = this.handleLoadCollections.bind(this);
    this.handleEditCollection = this.handleEditCollection.bind(this);
    this.handleAddCollection = this.handleAddCollection.bind(this);
    this.handleDeleteCollection = this.handleDeleteCollection.bind(this);
  }

  render() {
    const { collections, actions } = this.props;
    return (
      <div>
        <h1>The Collections Page</h1>
        <p>Work with data via Bottles API</p>
        <input type="button" value="fetchCollections alles" onClick={this.handleLoadCollections} />
        <input type="button" value="patch test" onClick={this.handleEditCollection} />
        <input type="button" value="create test" onClick={this.handleAddCollection} />
        <input type="button" value="delete test" onClick={this.handleDeleteCollection} />
        <pre>{JSON.stringify(collections,2)}</pre>{/*<CollectionsList bottles={collections} actions={actions}/>*/}
      </div>
    );
  }

  handleLoadCollections(e) {
    //e.preventDefault();
    this.props.actions.fetchCollections();
  }
  handleEditCollection(e) {
    //e.preventDefault();
    const name = "Bla-" + Number(Math.floor(Math.random()*65536)).toString(16).toUpperCase();
    this.props.actions.patchCollection(3, {name: name, barrytest: "123patched"});
  }
  handleAddCollection(e) {
    //e.preventDefault();
    const name = "New-" + Number(Math.floor(Math.random()*65536)).toString(16).toUpperCase();
    this.props.actions.createCollection({id:7, name: name, barrytest: "123created"});
  }
  handleDeleteCollection(e) {
    //e.preventDefault();
    const id = 7;
    this.props.actions.deleteCollection(id);
  }
}

CollectionsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  collections: PropTypes.object.isRequired
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

