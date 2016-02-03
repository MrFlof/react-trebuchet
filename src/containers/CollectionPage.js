import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { loadCollection } from '../actions/collectionActions'
import Collection from '../components/Collection'
import Bottle from '../components/Bottle'
import List from '../components/List'


function loadData(props) {
  const { id } = props
  props.loadCollection(id, [ 'name' ])
}

class UserPage extends Component {
  constructor(props) {
    super(props)
    this.renderBottle = this.renderBottle.bind(this)
  }

  componentWillMount() {
    loadData(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.id !== this.props.id) {
      loadData(nextProps)
    }
  }

  renderBottle([ bottle, owner ]) {
    return (
      <Bottle bottle={bottle}
            owner={owner}
            key={bottle.id} />
    )
  }

  render() {
    const { collection, id } = this.props
    if (!collection) {
      return <h1><i>Loading {id}’s profile...</i></h1>
    }

    const { starredRepos } = this.props
    return (
      <div>
        <Collection collection={collection} />
        <hr />
        <pre>{JSON.stringify(starredRepos, 2)}</pre>
{/*
        <List renderItem={this.renderBottle}
              items={starredRepos}
              loadingLabel={`Loading ${id}’s bottles...`}
          {...starredPagination} />
*/}
      </div>
    )
  }
}

UserPage.propTypes = {
  id: PropTypes.string.isRequired,
  collection: PropTypes.object,
  starredRepos: PropTypes.array.isRequired,
  loadCollection: PropTypes.func.isRequired,
  loadStarred: PropTypes.func.isRequired
}

function mapStateToProps(state, props) {
  const { id } = props.params
  const {
    entities: { collections }
    } = state

  const bottleids = bottlesByCollection[id] || { ids: [] }
  const bottles = bottleids.ids.map(bottleid => bottles[bottleid])

  return {
    id,
    bottles, // fka starredRepos
    collection: collections[id]
  }
}

export default connect(mapStateToProps, {
  loadCollection
})(UserPage)
