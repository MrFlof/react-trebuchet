import React, { PropTypes } from 'react';

class BottlesListAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initialState();
    // Manually bind this method to the component instance...
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  initialState() {
    return {
      name: "Bla",
      brand: "",
      type: "",
      country: "",
      contents_cl: null,
      alcohol_pct: null
    };
  }

  handleAdd(e) {
    e.preventDefault();
    var { name, brand, type, country, contents_cl, alcohol_pct } = this.state;
    this.props.onAdd({
      name: name,
      brand: brand,
      type: type,
      country: country,
      contents_cl: contents_cl,
      alcohol_pct: alcohol_pct
    });
    this.setState(this.initialState()); // reset UI
  }

  handleChange(key, e) {
    var change = {};
    change[key] = e.target.value;
    this.setState(change);
  }

  render() {
    var { name, brand, type, country, contents_cl, alcohol_pct } = this.state;
    return (
      <form onSubmit={this.handleAdd}>
        <table>
          <tbody>
            <tr>
              <td>New:</td>
              <td><input className="small" type="text" name="name" value={name} onChange={this.handleChange.bind(this, "name")} /></td>
              <td><input className="small" type="text" name="brand" value={brand} onChange={this.handleChange.bind(this, "brand")} /></td>
              <td><input className="small" type="text" name="type" value={type} onChange={this.handleChange.bind(this, "type")} /></td>
              <td><input className="small" type="text" name="country" value={country} onChange={this.handleChange.bind(this, "country")} /></td>
              <td><input className="small" type="number" name="contents_cl" value={contents_cl} onChange={this.handleChange.bind(this, "contents_cl")} /></td>
              <td><input className="small" type="number" name="alcohol_pct" step="0.5" value={alcohol_pct} onChange={this.handleChange.bind(this, "alcohol_pct")} /></td>
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
