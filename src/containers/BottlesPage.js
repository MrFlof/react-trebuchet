import React from 'react';

import BottlesList from '../components/BottlesList';


class BottlesPage extends React.Component {
  render() {
    return (
      <div>
        <h1>The Bottles Page</h1>
        <p>Work with data via Bottles API</p>
        <BottlesList bottles={[]}/>
      </div>
    );
  }
}

export default BottlesPage;
