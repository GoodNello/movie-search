import React from "react";
import axios from "axios";

import Search from "../Search/Search";
import Movie from "../Movie/Movie";

import API_KEY from "../../API_KEY";

class Jumbotron extends React.Component {
  constructor() {
    super();
    this.state = { data: null, isLoading: false, error: null };
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(searchText) {
    this.setState({
      isLoading: true
    });

    axios
      .get(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${searchText}`)
      .then(response => {
        if (response.status === 200) {
          this.setState({
            data: response.data,
            isLoading: false
          });
        } else {
          this.setState({
            error: "Response is not OK",
            isLoading: false
          });
        }
      })
      .catch(error => {
        this.setState({
          error,
          isLoading: false
        });
      });
  }
  render() {
    const { isLoading, data, error } = this.state;
    return (
      <div className="container p-5">
        <div className="jumbotron">
          <Search handleSearch={this.handleSearch} />
          {isLoading ? "Loading..." : undefined}
          <Movie data={data} error={error} />
        </div>
      </div>
    );
  }
}

export default Jumbotron;
