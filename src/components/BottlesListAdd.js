import React, { PropTypes } from 'react';

class BottlesListAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "default name",
      brand: "",
      type: "",
      country: "",
      contents_cl: 0,
      alcohol_pct: null
    };
    // Manually bind this method to the component instance...
    this.handleAdd = this.handleAdd.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleBrandChange = this.handleBrandChange.bind(this);
  }

  handleAdd(e) {
    e.preventDefault();
    var { name, brand } = this.state;
    this.props.onAdd({
      name: name,
      brand: brand,
      type: "Melk",
      country: "Scheutland",
      contents_cl: 50,
      alcohol_pct: null
    });
  }

  handleNameChange(e) {
    this.setState({name: e.target.value});
  }

  handleBrandChange(e) {
    this.setState({brand: e.target.value});
  }

  render() {
    var { name, brand } = this.state;
    return (
      <form onSubmit={this.handleAdd}>
        <table>
          <tbody>
            <tr>
              <td>New:</td>
              <td><input className="small" type="text" name="name" onChange={this.handleNameChange} value={name} /></td>
              <td><input className="small" type="text" name="brand" onChange={this.handleBrandChange} value={brand} /></td>
              <td><input className="small" type="text" name="type" /></td>
              <td><input className="small" type="text" name="country" /></td>
              <td><input className="small" type="number" name="contents_cl" /></td>
              <td><input className="small" type="number" name="alcohol_pct" step="0.5" /></td>
              <td><input className="small" type="submit" value="Add" /></td>
            </tr>
          </tbody>
        </table>
      </form>
    );
  }
}

BottlesListAdd.propTypes = {
  onAdd: PropTypes.func.isRequired
};

export default BottlesListAdd;
