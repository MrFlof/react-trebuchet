import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class Bottle extends Component {

  render() {
    const { bottle, owner } = this.props
    const { collectionid } = owner
    const { id, name, brand } = bottle

    return (
      <div>
        {collectionid && <p>Collection={collectionid}</p>}
        {id && <p>Id={id}</p>}
        {name && <p>Name={name}</p>}
        {brand && <p>Brand={brand}</p>}
      </div>
    )
  }
}

Bottle.propTypes = {
  bottle: PropTypes.shape({
    name: PropTypes.string.isRequired,
    brand: PropTypes.string
  }).isRequired,
  owner: PropTypes.shape({
    id: PropTypes.number.isRequired
  }).isRequired
}
