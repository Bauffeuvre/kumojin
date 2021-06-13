import React from "react"

class ActualTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
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
      time: new Date().toLocaleString()
    });
  }
  render() {
    return (
      <div className="Time-container-actual">
        <h2 className="Label">Local time:</h2>
        <p className="Actual-time">
          {this.state.time}
        </p>
      </div>
    );
  }
}

export default ActualTime;