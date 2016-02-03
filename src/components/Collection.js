import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class Collection extends Component {
  render() {
    const { id, name } = this.props.collection

    return (
      <div>
        <Link to={`/collections/${id}`}>
          <h3>
            #{id} {name && <span>({name})</span>}
          </h3>
        </Link>
      </div>
    )
  }
}

Collection.propTypes = {
  collection: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string
  }).isRequired
}
