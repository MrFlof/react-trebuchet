import React from 'react';

import BottlesList from '../components/BottlesList';

class BottlesPage extends React.Component {
  render() {
    const dummyBottles = [
      {
        id: 337,
        name: "Hightland scotch Whisky 12 years",
        brand: "Glenfarclas",
        type: "Whisky",
        country: "Schotland",
        contents_cl: 5,
        alcohol_pct: 43
      },
      {
        id: 338,
        name: "Antartica",
        brand: "Godet",
        type: "Cognac",
        country: "Frankrijk",
        contents_cl: 5,
        alcohol_pct: 40
      }
    ];

    return (
      <div>
        <h1>The Bottles Page</h1>
        <p>Work with data via Bottles API</p>
        <BottlesList bottles={dummyBottles}/>
      </div>
    );
  }
}

export default BottlesPage;
