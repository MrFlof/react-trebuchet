import React, { PropTypes } from 'react';

import BottlesListItem from './BottlesListItem';


const BottlesList = (props) => {
  var { bottles } = props;
  return (
    <ul>
      {bottles.map((bottle, i) =>
        <BottlesListItem key={i} bottle={bottle} />
      )}
    </ul>
  );
};

BottlesList.propTypes = {
  bottles: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired
  }).isRequired).isRequired
};

export default BottlesList;
