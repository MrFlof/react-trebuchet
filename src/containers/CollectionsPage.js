import React from 'react';
import { Link } from 'react-router';


class CollectionsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>The Collections Page</h1>
        <p>Choose a collection -from the Bottled API- to browse:</p>
        <ul>
          <li><Link to="/collection/1">Collection 1</Link></li>
          <li><Link to="/collection/2">Collection 2</Link></li>
          <li><Link to="/collection/3">Collection 3</Link></li>
          <li><Link to="/collection/4">Collection 4</Link></li>
        </ul>
        <p>TODO get from API</p>
      </div>
    );
  }
}

export default CollectionsPage;
