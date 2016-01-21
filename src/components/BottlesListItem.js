import React, { PropTypes } from 'react';

const BottlesListItem = (props) => {
  var { bottle } = props;
  return (
    <li key={bottle.id}>
      <pre>
        id: {bottle.id}{"\n"}
        name: {bottle.name}{"\n"}
        brand: {bottle.brand}{"\n"}
        type: {bottle.type}{"\n"}
        country: {bottle.country}{"\n"}
        contents_cl: {bottle.contents_cl}{"\n"}
        alcohol_pct: {bottle.alcohol_pct}
      </pre>
    </li>
  );
};

BottlesListItem.propTypes = {
  bottle: PropTypes.object.isRequired
};

export default BottlesListItem;
