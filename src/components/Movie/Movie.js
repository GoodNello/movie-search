import React from "react";

export default class Movie extends React.Component {
  render() {
    if (this.props.data) {
      const { Title } = this.props.data;
      return (
        <div>
          <h3>{Title}</h3>
        </div>
      );
    } else {
      return <p>Type the name of a movie.</p>;
    }
  }
}
