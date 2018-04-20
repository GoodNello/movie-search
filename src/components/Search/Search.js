import React from "react";

export default class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: null
    };
  }
  onSubmit(e) {
    e.preventDefault();
    const { searchText } = this.state;

    if (searchText) {
      this.props.handleSearch(searchText);
    }
  }
  onChange(e) {
    this.setState({
      searchText: e.target.value
    });
  }
  render() {
    return (
      <form className="form-inline" onSubmit={this.onSubmit.bind(this)}>
        <input
          className="form-control form-control-lg"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={this.onChange.bind(this)}
        />
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </form>
    );
  }
}
