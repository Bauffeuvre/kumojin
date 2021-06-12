import React from "react"

class TokyoTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.tokyo_time
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: tokyo_time
    });
  }
  render() {
    return (
      <p className="App-clock">
        The actual time is : {this.state.time}.
      </p>
    );
  }
}

export default TokyoTime;