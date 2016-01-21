import React, { PropTypes } from 'react';

import BottlesListItem from './BottlesListItem';


const BottlesList = (props) => {
  var { bottles } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Brand</th>
          <th>Type</th>
          <th>Country</th>
          <th>Contents cl</th>
          <th>Alcohol %</th>
        </tr>
      </thead>
      <tbody>
        {bottles.map((bottle, i) =>
          <BottlesListItem key={i} bottle={bottle} />
        )}
      </tbody>
    </table>
  );
};

BottlesList.propTypes = {
  bottles: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired
  }).isRequired).isRequired
};

export default BottlesList;
