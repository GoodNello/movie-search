import React from "react";

// Higher Order Component that has to be implemented

const withFetching = query => Comp =>
  class WithFetching extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        data: {},
        isLoading: false,
        error: null
      };
    }
    componentDidMount() {
      this.setState({ isLoading: true });

      //AXIOS CODE HERE
    }
    render() {
      return <Comp {...this.props} {...this.state} />;
    }
  };

export default withFetching();
