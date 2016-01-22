import React, { PropTypes } from 'react';

import BottlesListItem from './BottlesListItem';
import BottlesListAdd from './BottlesListAdd';


const BottlesList = (props) => {
  const onDelete = function (id) {
    props.actions.deleteBottle(id);
  };

  const onAdd = function () {
    //props.actions.addBottle()
  };

  const handleAdd = function (e) {
    e.preventDefault();
    var f = e.target.form;
    console.log(e);
    console.log(e.ref.name.valueOf());


    //props.actions.addBottle(id);
  };

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
          <th>actions</th>
        </tr>
      </thead>
      <tbody>
        {bottles.length > 0 ?
          bottles.map((bottle, i) =>
            <BottlesListItem key={i} bottle={bottle} onDelete={onDelete}/>
          )
          :
          <tr><td colSpan="8">Nothing here.</td></tr>
        }
      </tbody>
      <tfoot>
        <tr><td colSpan="8">
          <BottlesListAdd onAdd={onAdd} />
        </td></tr>
      </tfoot>
    </table>
  );
};

BottlesList.propTypes = {
  actions: PropTypes.object.isRequired,
  bottles: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired
  }).isRequired).isRequired
};

export default BottlesList;
