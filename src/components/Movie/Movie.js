import React from "react";

export default class Movie extends React.Component {
  render() {
    if (this.props.data) {
      const {
        Title,
        Year,
        Runtime,
        Genre,
        Director,
        Actors,
        Plot,
        Country,
        Awards,
        Poster,
        Production
      } = this.props.data;

      return (
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h3>
                {Title} ({Country} - {Year})
              </h3>
              <h6>
                {Genre} - {Runtime}
              </h6>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <p className="lead">{Plot}</p>
              With: {Actors}
              <ul>
                <li>Production: {Production}</li>
                <li>Awards: {Awards}</li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-6">
              <img src={Poster} with="150" />
            </div>
          </div>
        </div>
      );
    } else {
      return <p>Type the name of a movie.</p>;
    }
  }
}
